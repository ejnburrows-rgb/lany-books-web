/**
 * Pure TypeScript ISO/IEC 18004 QR Code Matrix Generator (Byte Mode, ECC Level L)
 * Zero external dependencies — produces scannable 2D boolean matrices for SVG rendering.
 */

// Total codewords per version (Versions 1..20)
const TOTAL_CODEWORDS: number[] = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085,
]

// ECC codewords per block for Level L (Versions 1..20)
const ECC_CODEWORDS_PER_BLOCK_L: number[] = [
  0, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28,
  28,
]

// Number of error correction blocks for Level L (Versions 1..20)
const NUM_ERROR_CORRECTION_BLOCKS_L: number[] = [
  0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8,
]

// Alignment pattern center coordinates per version (Versions 1..20)
const ALIGNMENT_PATTERN_POSITIONS: number[][] = [
  [],
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
]

function getDataCapacityBytesL(version: number): number {
  const total = TOTAL_CODEWORDS[version]
  const eccPerBlock = ECC_CODEWORDS_PER_BLOCK_L[version]
  const blocks = NUM_ERROR_CORRECTION_BLOCKS_L[version]
  const dataCodewords = total - eccPerBlock * blocks
  const countBits = version <= 9 ? 8 : 16
  return Math.floor((dataCodewords * 8 - 4 - countBits) / 8)
}

function gfMultiply(x: number, y: number): number {
  let z = 0
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d)
    z ^= ((y >>> i) & 1) * x
  }
  return z
}

function reedSolomonComputeDivisor(degree: number): Uint8Array {
  const result = new Uint8Array(degree)
  result[degree - 1] = 1
  let root = 1
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < degree; j++) {
      result[j] = gfMultiply(result[j], root)
      if (j + 1 < degree) {
        result[j] ^= result[j + 1]
      }
    }
    root = gfMultiply(root, 0x02)
  }
  return result
}

function reedSolomonComputeRemainder(
  data: Uint8Array,
  divisor: Uint8Array
): Uint8Array {
  const result = new Uint8Array(divisor.length)
  for (let i = 0; i < data.length; i++) {
    const factor = data[i] ^ result[0]
    result.copyWithin(0, 1)
    result[divisor.length - 1] = 0
    for (let j = 0; j < divisor.length; j++) {
      result[j] ^= gfMultiply(divisor[j], factor)
    }
  }
  return result
}

function appendBits(val: number, len: number, bitBuffer: number[]): void {
  for (let i = len - 1; i >= 0; i--) {
    bitBuffer.push((val >>> i) & 1)
  }
}

export function generateQrMatrix(text: string): boolean[][] {
  const utf8Bytes = new TextEncoder().encode(text)

  // Pick smallest version (1..20) that fits utf8Bytes in Level L
  let version = 1
  while (
    version <= 20 &&
    utf8Bytes.length > getDataCapacityBytesL(version)
  ) {
    version++
  }

  // If payload exceeds Version 20 capacity, truncate safely so QR still renders
  const maxBytes = getDataCapacityBytesL(Math.min(version, 20))
  if (version > 20) {
    version = 20
  }
  const payloadBytes =
    utf8Bytes.length > maxBytes ? utf8Bytes.slice(0, maxBytes) : utf8Bytes

  const totalCodewords = TOTAL_CODEWORDS[version]
  const eccPerBlock = ECC_CODEWORDS_PER_BLOCK_L[version]
  const numBlocks = NUM_ERROR_CORRECTION_BLOCKS_L[version]
  const dataCodewordsLen = totalCodewords - eccPerBlock * numBlocks

  // Build bit stream: Byte mode indicator (0100), character count, payload, terminator, padding
  const bits: number[] = []
  appendBits(0b0100, 4, bits)
  appendBits(payloadBytes.length, version <= 9 ? 8 : 16, bits)
  for (let i = 0; i < payloadBytes.length; i++) {
    appendBits(payloadBytes[i], 8, bits)
  }

  const capacityBits = dataCodewordsLen * 8
  appendBits(0, Math.min(4, capacityBits - bits.length), bits)
  appendBits(0, (8 - (bits.length % 8)) % 8, bits)

  let padByte = 0xec
  while (bits.length < capacityBits) {
    appendBits(padByte, 8, bits)
    padByte = padByte === 0xec ? 0x11 : 0xec
  }

  const dataCodewords = new Uint8Array(dataCodewordsLen)
  for (let i = 0; i < bits.length; i++) {
    dataCodewords[i >>> 3] |= bits[i] << (7 - (i & 7))
  }

  // Split into blocks, compute Reed-Solomon ECC, and interleave
  const numShortBlocks = numBlocks - (totalCodewords % numBlocks)
  const shortBlockLen = Math.floor(totalCodewords / numBlocks)
  const shortDataLen = shortBlockLen - eccPerBlock
  const divisor = reedSolomonComputeDivisor(eccPerBlock)

  const dataBlocks: Uint8Array[] = []
  const eccBlocks: Uint8Array[] = []
  let offset = 0
  for (let i = 0; i < numBlocks; i++) {
    const datLen = shortDataLen + (i < numShortBlocks ? 0 : 1)
    const block = dataCodewords.subarray(offset, offset + datLen)
    offset += datLen
    dataBlocks.push(block)
    eccBlocks.push(reedSolomonComputeRemainder(block, divisor))
  }

  const allCodewords = new Uint8Array(totalCodewords)
  let ptr = 0
  const maxDataBlockLen = shortDataLen + 1
  for (let i = 0; i < maxDataBlockLen; i++) {
    for (let j = 0; j < numBlocks; j++) {
      if (i < dataBlocks[j].length) {
        allCodewords[ptr++] = dataBlocks[j][i]
      }
    }
  }
  for (let i = 0; i < eccPerBlock; i++) {
    for (let j = 0; j < numBlocks; j++) {
      allCodewords[ptr++] = eccBlocks[j][i]
    }
  }

  // Initialize module matrix
  const size = version * 4 + 17
  const modules: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  )
  const isFunction: boolean[][] = Array.from({ length: size }, () =>
    Array(size).fill(false)
  )

  const setFunctionModule = (x: number, y: number, isDark: boolean) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      modules[y][x] = isDark
      isFunction[y][x] = true
    }
  }

  // Timing patterns
  for (let i = 0; i < size; i++) {
    setFunctionModule(6, i, i % 2 === 0)
    setFunctionModule(i, 6, i % 2 === 0)
  }

  // Finder patterns (3 corners)
  const drawFinderPattern = (cx: number, cy: number) => {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const dist = Math.max(Math.abs(dx), Math.abs(dy))
        const xx = cx + dx
        const yy = cy + dy
        if (xx >= 0 && xx < size && yy >= 0 && yy < size) {
          setFunctionModule(xx, yy, dist !== 2 && dist !== 4)
        }
      }
    }
  }
  drawFinderPattern(3, 3)
  drawFinderPattern(size - 4, 3)
  drawFinderPattern(3, size - 4)

  // Alignment patterns
  const alignPos = ALIGNMENT_PATTERN_POSITIONS[version]
  for (let i = 0; i < alignPos.length; i++) {
    for (let j = 0; j < alignPos.length; j++) {
      if (
        (i === 0 && j === 0) ||
        (i === 0 && j === alignPos.length - 1) ||
        (i === alignPos.length - 1 && j === 0)
      ) {
        continue
      }
      const cx = alignPos[i]
      const cy = alignPos[j]
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          setFunctionModule(
            cx + dx,
            cy + dy,
            Math.max(Math.abs(dx), Math.abs(dy)) !== 1
          )
        }
      }
    }
  }

  // Reserve format info & dark module
  for (let i = 0; i <= 8; i++) {
    if (i !== 6) {
      setFunctionModule(8, i, false)
      setFunctionModule(i, 8, false)
    }
  }
  for (let i = 0; i < 8; i++) {
    setFunctionModule(size - 1 - i, 8, false)
    setFunctionModule(8, size - 1 - i, false)
  }
  setFunctionModule(8, size - 8, true)

  // Version info for versions >= 7
  if (version >= 7) {
    let rem = version
    for (let i = 0; i < 12; i++) {
      rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25)
    }
    const verBits = (version << 12) | rem
    for (let i = 0; i < 18; i++) {
      const bit = ((verBits >>> i) & 1) !== 0
      const a = size - 11 + (i % 3)
      const b = Math.floor(i / 3)
      setFunctionModule(a, b, bit)
      setFunctionModule(b, a, bit)
    }
  }

  // Place data codewords in zigzag pattern
  let bitIdx = 0
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j
        const upward = ((right + 1) & 2) === 0
        const y = upward ? size - 1 - vert : vert
        if (!isFunction[y][x] && bitIdx < allCodewords.length * 8) {
          const bit =
            ((allCodewords[bitIdx >>> 3] >>> (7 - (bitIdx & 7))) & 1) !== 0
          modules[y][x] = bit
          bitIdx++
        }
      }
    }
  }

  // Apply Mask 0 ((x + y) % 2 === 0) and write format bits (Level L = 01, Mask = 000)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!isFunction[y][x] && (x + y) % 2 === 0) {
        modules[y][x] = !modules[y][x]
      }
    }
  }

  const dataFormat = (0b01 << 3) | 0b000
  let rem = dataFormat
  for (let i = 0; i < 10; i++) {
    rem = (rem << 1) ^ ((rem >>> 9) * 0x537)
  }
  const formatBits = ((dataFormat << 10) | rem) ^ 0x5412
  const getFormatBit = (idx: number) => ((formatBits >>> idx) & 1) !== 0

  for (let i = 0; i <= 5; i++) setFunctionModule(8, i, getFormatBit(i))
  setFunctionModule(8, 7, getFormatBit(6))
  setFunctionModule(8, 8, getFormatBit(7))
  setFunctionModule(7, 8, getFormatBit(8))
  for (let i = 9; i < 15; i++) setFunctionModule(14 - i, 8, getFormatBit(i))

  for (let i = 0; i < 8; i++)
    setFunctionModule(size - 1 - i, 8, getFormatBit(i))
  for (let i = 8; i < 15; i++)
    setFunctionModule(8, size - 15 + i, getFormatBit(i))
  setFunctionModule(8, size - 8, true)

  return modules
}

export function generateQrSvgString(text: string): string {
  const matrix = generateQrMatrix(text)
  const quietZone = 4
  const totalSize = matrix.length + quietZone * 2
  const rects: string[] = []
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[y][x]) {
        rects.push(
          `<rect x="${x + quietZone}" y="${y + quietZone}" width="1" height="1" fill="#0f172a"/>`
        )
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalSize} ${totalSize}" shape-rendering="crispEdges"><rect width="${totalSize}" height="${totalSize}" fill="#ffffff"/>${rects.join('')}</svg>`
}
