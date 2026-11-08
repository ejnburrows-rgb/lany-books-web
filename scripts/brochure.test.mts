import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import {
  copyVerificationList,
  getBrochureSpreads,
  getCrmPresentationSlides,
  gretelReferenceSamples,
  physicalKitComponents,
  promptStudioRecipes,
  replacementMapData,
  reviewRequiredItems,
  upgradedGalleryItems,
} from '../src/config/brochureData.ts'

const publicDir = path.resolve(process.cwd(), 'public')

test('10-page physical brochure has all 10 sequential pages in English and Spanish', () => {
  const enSpreads = getBrochureSpreads('en')
  const esSpreads = getBrochureSpreads('es')

  assert.equal(enSpreads.length, 10, 'English brochure must have 10 pages')
  assert.equal(esSpreads.length, 10, 'Spanish brochure must have 10 pages')

  for (let i = 0; i < 10; i++) {
    assert.equal(enSpreads[i].pageIndex, i + 1)
    assert.equal(esSpreads[i].pageIndex, i + 1)
    assert.ok(enSpreads[i].title.length > 5)
    assert.ok(esSpreads[i].title.length > 5)
    assert.ok(enSpreads[i].highlights.length >= 3)
    assert.ok(esSpreads[i].highlights.length >= 3)
  }

  // Page 1 must preserve exact title "La Cartilla de Gretel"
  assert.equal(enSpreads[0].title, 'La Cartilla de Gretel')
  assert.equal(esSpreads[0].title, 'La Cartilla de Gretel')

  // Page 9 must include explicit ecosystem status tags
  assert.ok(enSpreads[8].ecosystemTags && enSpreads[8].ecosystemTags.length >= 4)
  assert.ok(esSpreads[8].ecosystemTags && esSpreads[8].ecosystemTags.length >= 4)
})

test('Separate 9-slide CRM presentation has all 9 slides, 8-field contact record, and 6-stage pipeline', () => {
  const enSlides = getCrmPresentationSlides('en')
  const esSlides = getCrmPresentationSlides('es')

  assert.equal(enSlides.length, 9, 'English CRM deck must have 9 slides')
  assert.equal(esSlides.length, 9, 'Spanish CRM deck must have 9 slides')

  // Slide 3: Contact and Organization View (8 required fields)
  assert.equal(enSlides[2].recordFields?.length, 8)
  assert.equal(esSlides[2].recordFields?.length, 8)

  // Slide 4: Opportunity Pipeline (6 required stages)
  assert.equal(enSlides[3].pipelineStages?.length, 6)
  assert.equal(esSlides[3].pipelineStages?.length, 6)
})

test('All image assets referenced in brochure spreads, gallery, replacement map, and Prompt Studio exist on disk', () => {
  const allPaths = new Set<string>()

  for (const lang of ['en', 'es'] as const) {
    for (const spread of getBrochureSpreads(lang)) {
      allPaths.add(spread.primaryImage)
      allPaths.add(spread.secondaryImage)
    }
  }

  for (const item of upgradedGalleryItems) {
    allPaths.add(item.src)
  }

  for (const row of replacementMapData) {
    allPaths.add(row.upgradedAsset)
  }

  for (const sample of gretelReferenceSamples) {
    allPaths.add(sample.src)
  }

  for (const recipe of promptStudioRecipes) {
    allPaths.add(recipe.originalEp42Crop)
    allPaths.add(recipe.colorizedResult)
  }

  for (const webPath of allPaths) {
    const diskPath = path.join(publicDir, webPath.replace(/^\//, ''))
    assert.ok(fs.existsSync(diskPath), `Missing image asset on disk: ${webPath} (${diskPath})`)
    const stat = fs.statSync(diskPath)
    assert.ok(stat.size > 1000, `Image asset is unexpectedly small: ${webPath}`)
  }
})

test('Duplicate audit excludes superseded circular floral emblem and synthetic bundle kit from brochure pages', () => {
  const forbiddenSupersededAsset = '/assets/aistudio/image-gen-9_20261030-080504__a998c4de.png'
  const forbiddenBadgeTypoAsset = '/assets/aistudio/image-gen-3_20261030-080458__f15ffa14.png'
  const forbiddenSyntheticBundle = '/images/gretel/cartilla-bundle.webp'

  for (const lang of ['en', 'es'] as const) {
    for (const spread of getBrochureSpreads(lang)) {
      assert.notEqual(spread.primaryImage, forbiddenSupersededAsset)
      assert.notEqual(spread.secondaryImage, forbiddenSupersededAsset)
      assert.notEqual(spread.primaryImage, forbiddenBadgeTypoAsset)
      assert.notEqual(spread.secondaryImage, forbiddenBadgeTypoAsset)
      assert.notEqual(spread.primaryImage, forbiddenSyntheticBundle)
      assert.notEqual(spread.secondaryImage, forbiddenSyntheticBundle)
    }
  }

  assert.equal(gretelReferenceSamples.length, 3)
  assert.equal(promptStudioRecipes.length, 6)
  assert.equal(physicalKitComponents.en.length, 10)
  assert.equal(physicalKitComponents.es.length, 10)
  assert.ok(copyVerificationList.en.length >= 5)
  assert.ok(reviewRequiredItems.en.length >= 5)

  const appSource = fs.readFileSync(path.resolve(process.cwd(), 'src/App.tsx'), 'utf8')
  const clientShareSource = fs.readFileSync(
    path.resolve(process.cwd(), 'src/components/ClientShareSession.tsx'),
    'utf8'
  )
  const brochureDataSource = fs.readFileSync(
    path.resolve(process.cwd(), 'src/config/brochureData.ts'),
    'utf8'
  )

  assert.ok(!appSource.includes('cartilla-bundle.webp'), 'App.tsx must not reference synthetic bundle')
  assert.ok(
    !clientShareSource.includes('cartilla-bundle.webp'),
    'ClientShareSession.tsx must not reference synthetic bundle'
  )
  assert.ok(
    !brochureDataSource.includes('cartilla-bundle.webp'),
    'brochureData.ts must not reference synthetic bundle'
  )

  for (const colorizedAsset of [
    '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
    '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
    '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
    '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
    '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
    '/assets/aistudio/colorized/heritage-covers-pair.jpg',
  ]) {
    assert.ok(appSource.includes(colorizedAsset), `App.tsx imagePaths missing ${colorizedAsset}`)
    assert.ok(
      clientShareSource.includes(colorizedAsset),
      `ClientShareSession.tsx missing ${colorizedAsset}`
    )
  }

  assert.ok(
    clientShareSource.includes('copy-to-clipboard-btn'),
    'ClientShareSession must include the Copy to Clipboard bundle button'
  )
  assert.ok(
    clientShareSource.includes('qr-code-generator'),
    'ClientShareSession must include the QR code generator for physical brochure distribution'
  )
})

test('QR code generator produces valid square matrix and SVG for page URL and pre-filled message', async () => {
  const { generateQrMatrix, generateQrSvgString } = await import(
    '../src/utils/qrCodeGenerator.ts'
  )
  const samplePayload =
    'https://lany-books-web-delta.vercel.app/?qr_lang=en&qr_role=school&qr_note=10-Page+Brochure+PDF+%26+11-Piece+Physical+Kit+Checklist#client-session'
  const matrix = generateQrMatrix(samplePayload)
  assert.ok(matrix.length >= 21, 'QR matrix must be at least Version 1 (21x21)')
  assert.equal(matrix.length, matrix[0].length, 'QR matrix must be square')
  // Top-left finder pattern corner is always dark
  assert.equal(matrix[0][0], true)
  assert.equal(matrix[6][6], true)

  const svg = generateQrSvgString(samplePayload)
  assert.ok(svg.startsWith('<svg '), 'Must generate valid SVG string')
  assert.ok(svg.includes('<rect '), 'Must contain module rects')
})

test('Master Handoff: 3 Brochure Styles, 7-Page Redesigned Brochure (EN/ES), 5 Website Concepts, and Restored Cutouts exist and meet 100% fidelity rules', async () => {
  const {
    AUTHENTICITY_COMPARISONS,
    BROCHURE_STYLES,
    SEVEN_PAGE_BROCHURE,
    WEBSITE_CONCEPTS,
  } = await import('../src/config/masterHandoffData.ts')

  assert.equal(BROCHURE_STYLES.length, 3, 'Must provide 3 brochure style options (A, B, C)')
  assert.equal(SEVEN_PAGE_BROCHURE.length, 7, 'Historical brochure redesign must have 7 pages')
  assert.equal(WEBSITE_CONCEPTS.length, 5, 'Must provide 5 website visual concepts')
  assert.equal(AUTHENTICITY_COMPARISONS.length, 5, 'Must provide 5 side-by-side authenticity comparisons')

  // Check required Spanish headlines in the 5 concepts
  const expectedSpanishHeadlines = [
    'Grandes historias comienzan con las primeras letras.',
    'De los primeros sonidos a las primeras historias.',
    'Una experiencia de lectura para compartir en el aula.',
    'Cada página, una oportunidad para aprender juntos.',
    'Una tradición de aprendizaje que mira hacia el futuro.',
  ]
  for (let i = 0; i < 5; i++) {
    assert.equal(WEBSITE_CONCEPTS[i].proposedHeadlineEs, expectedSpanishHeadlines[i])
    assert.ok(WEBSITE_CONCEPTS[i].proposedHeadlineEn.length > 10)
  }

  // Verify every image path referenced in masterHandoffData exists on disk
  const handoffPaths = new Set<string>()
  for (const page of SEVEN_PAGE_BROCHURE) {
    assert.ok(page.title.en.length > 3)
    assert.ok(page.title.es.length > 3)
    assert.ok(page.keyPoints.length >= 2)
    handoffPaths.add(page.primaryImage.src)
    if (page.primaryImage.secondarySrc) {
      handoffPaths.add(page.primaryImage.secondarySrc)
    }
  }

  for (const concept of WEBSITE_CONCEPTS) {
    handoffPaths.add(concept.lifestyleBackdropSrc)
    for (const asset of concept.authenticProductAssets) {
      handoffPaths.add(asset.src)
    }
  }

  for (const comp of AUTHENTICITY_COMPARISONS) {
    handoffPaths.add(comp.originalSrc)
    handoffPaths.add(comp.restoredSrc)
  }

  for (const webPath of handoffPaths) {
    const diskPath = path.join(publicDir, webPath.replace(/^\//, ''))
    assert.ok(fs.existsSync(diskPath), `Missing Master Handoff asset on disk: ${webPath} (${diskPath})`)
    const stat = fs.statSync(diskPath)
    assert.ok(stat.size > 1000, `Master Handoff asset unexpectedly small: ${webPath}`)
  }
})

