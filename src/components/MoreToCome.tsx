export default function MoreToCome() {
  return (
    <section id="proximos" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-ink mb-4 border-b border-ink/10 pb-4">Próximos títulos · LANY Books</h2>
      <p className="text-lg text-ink/70 mb-10">
        LANY Books LLC está preparando nuevos títulos. Suscríbete para enterarte primero.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border-2 border-dashed border-ink/20 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center bg-white/50 opacity-60">
          <p className="text-center font-medium text-ink/60">Título por anunciar · 2026</p>
        </div>
        <div className="border-2 border-dashed border-ink/20 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center bg-white/50 opacity-60">
          <p className="text-center font-medium text-ink/60">Título por anunciar · 2027</p>
        </div>
        <div className="border-2 border-dashed border-ink/20 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center bg-white/50 opacity-60">
          <p className="text-center font-medium text-ink/60">Colección educativa · TBA</p>
        </div>
      </div>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-1 px-4 py-3 rounded-full border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
          />
          <button 
            onClick={() => window.open('mailto:ejnburrows@gmail.com?subject=Suscripci%C3%B3n%20LANY%20Books')}
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors cursor-pointer"
          >
            Notifícame
          </button>
        </div>
      </div>
    </section>
  )
}
