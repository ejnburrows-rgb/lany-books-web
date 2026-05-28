import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SAMPLES = [
  '/book-samples/sample-o-1.jpg',
  '/book-samples/sample-a-1.jpg',
  '/book-samples/sample-e-1.jpg',
  '/book-samples/sample-i-1.jpg'
]

export default function SamplePagesModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % SAMPLES.length)
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + SAMPLES.length) % SAMPLES.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-ink/90 backdrop-blur-sm" 
          onClick={onClose} 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-4xl bg-cream rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          <div className="flex justify-between items-center p-4 border-b border-ink/10">
            <h3 className="font-serif text-xl">Muestra gratis ({currentIndex + 1}/{SAMPLES.length})</h3>
            <button onClick={onClose} className="text-ink/60 hover:text-ink text-2xl px-2 cursor-pointer">&times;</button>
          </div>
          
          <div className="relative flex-1 bg-cloud flex items-center justify-center p-4 sm:p-8 min-h-[50vh]">
            <img 
              src={SAMPLES[currentIndex]} 
              alt={`Página de muestra ${currentIndex + 1}`} 
              className="max-h-[70vh] object-contain shadow-md"
            />
            
            <button 
              onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + SAMPLES.length) % SAMPLES.length) }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white flex items-center justify-center text-2xl text-ink cursor-pointer"
            >
              ←
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % SAMPLES.length) }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white flex items-center justify-center text-2xl text-ink cursor-pointer"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
