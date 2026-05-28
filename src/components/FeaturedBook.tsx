import { useState } from 'react'
import SamplePagesModal from './SamplePagesModal'

export default function FeaturedBook() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="catalogo" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-ink mb-10 border-b border-ink/10 pb-4">Catálogo</h2>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-ink/5 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex justify-center perspective-[1000px]">
          <div className="transform transition-transform hover:scale-105 duration-500" style={{ transform: 'rotateY(-6deg)' }}>
            <img 
              src="/book-samples/cover-stand-in.jpg" 
              alt="Ilustración de La Cartilla de Gretel — la niña enfermita"
              className="w-full max-w-sm rounded shadow-2xl"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-center">
          <h3 className="text-4xl font-serif text-ink mb-2">La Cartilla de Gretel</h3>
          <p className="text-xl text-ink/70 mb-4">Cuaderno de lectoescritura · 92 páginas · 24 lecciones</p>
          <p className="text-sm font-mono text-ink/50 mb-8 tracking-wide">ISBN 0-971-8696-8-5</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#" 
              aria-disabled="true"
              className="px-6 py-3 rounded-full border-2 border-ink/20 text-ink/50 font-medium text-center cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              📖 Edición impresa · Próximamente
            </a>
            <a 
              href="https://www.amazon.com/s?k=cartilla+de+gretel+leonor+lopetegui" 
              target="_blank" 
              rel="noopener"
              className="px-6 py-3 rounded-full bg-ink text-white font-medium text-center hover:bg-ink/90 transition-colors shadow-md"
            >
              📱 Kindle eBook
            </a>
            <a 
              href="https://www.audible.com/search?keywords=cartilla+de+gretel" 
              target="_blank" 
              rel="noopener"
              className="px-6 py-3 rounded-full bg-gold text-ink font-medium text-center hover:bg-gold/90 transition-colors shadow-md"
            >
              🎧 Audiolibro · Audible
            </a>
          </div>
          
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-transform hover:-translate-y-1 shadow-lg cursor-pointer"
            >
              Ver muestra gratis
            </button>
          </div>
        </div>
      </div>
      
      <SamplePagesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
