import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex flex-col justify-center items-center overflow-hidden px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between z-10">
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
            LANY Books
          </h1>
          <p className="text-xl md:text-2xl text-ink/80">
            Libros para enseñar y soñar.
          </p>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.img 
            src="/gretel/happy.webp" 
            alt="Gretel feliz"
            className="w-64 md:w-80 lg:w-96 drop-shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#catalogo" 
          className="text-ink/60 hover:text-accent transition-colors flex flex-col items-center"
        >
          <span className="mb-2">Catálogo</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  )
}
