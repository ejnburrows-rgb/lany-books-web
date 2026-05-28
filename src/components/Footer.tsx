export default function Footer() {
  return (
    <footer id="contacto" className="bg-ink text-white/80 py-16 px-6 mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center md:text-left">
          <div>
            <h4 className="font-serif text-white text-xl mb-4">LANY Books LLC</h4>
            <p className="text-sm opacity-80">©2004–2026 Leonor Lopetegui</p>
          </div>
          <div>
            <h4 className="font-serif text-white text-xl mb-4">Arte</h4>
            <p className="text-sm opacity-80">Ilustraciones: Estela de Armas Plasencia</p>
          </div>
          <div>
            <h4 className="font-serif text-white text-xl mb-4">Equipo</h4>
            <p className="text-sm opacity-80">Colaboradoras: Aída Fernández · Silvia Diez</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs opacity-60">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
