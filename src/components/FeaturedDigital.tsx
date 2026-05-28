export default function FeaturedDigital() {
  return (
    <section id="digital" className="scroll-mt-24">
      <div className="bg-gradient-to-br from-cloud to-white rounded-3xl p-8 md:p-12 shadow-sm border border-ink/5 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="md:w-3/5 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-4xl font-serif text-ink mb-2">La Cartilla de Gretel Digitalizado</h3>
          <p className="text-xl text-accent font-medium mb-6">Del libro físico al CRM de aula</p>
          
          <p className="text-lg text-ink/80 mb-8 leading-relaxed">
            Una plataforma para maestros: gestiona clases, estudiantes,
            asignaciones y progreso. El cuaderno físico cobra vida digital,
            respetando cada página, cada lección y cada ilustración original.
          </p>
          
          <ul className="space-y-3 mb-10 text-ink/75">
            <li className="flex items-center gap-3"><span className="text-accent">✓</span> Aula virtual + roster de estudiantes</li>
            <li className="flex items-center gap-3"><span className="text-accent">✓</span> Páginas oficiales del libro renderizadas en pantalla</li>
            <li className="flex items-center gap-3"><span className="text-accent">✓</span> Seguimiento de progreso por lección</li>
            <li className="flex items-center gap-3"><span className="text-accent">✓</span> Presentación para proyectar en clase</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://cartilla-de-gretel.vercel.app" 
              target="_blank" 
              rel="noopener"
              className="px-8 py-4 rounded-full bg-ink text-white font-semibold text-center hover:bg-ink/90 transition-transform hover:-translate-y-1 shadow-lg"
            >
              Visitar la plataforma
            </a>
            <a 
              href="mailto:ejnburrows@gmail.com?subject=Acceso%20a%20La%20Cartilla%20Digitalizado" 
              className="px-8 py-4 rounded-full bg-white border border-ink/20 text-ink font-medium text-center hover:bg-cloud transition-colors shadow-sm"
            >
              Solicitar acceso para educadores
            </a>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-sm aspect-square bg-white rounded-full shadow-xl border-8 border-cloud flex items-center justify-center overflow-hidden">
            <img 
              src="/gretel/thinking.webp" 
              alt="Gretel pensando — La Cartilla Digitalizado"
              className="w-3/4 object-contain mt-8"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}
