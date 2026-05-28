export default function AuthorCard() {
  return (
    <section id="autora" className="scroll-mt-24">
      <h2 className="text-3xl font-serif text-ink mb-10">Sobre la autora</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-ink/5">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold to-accent flex items-center justify-center shadow-inner">
            <span className="text-6xl font-serif text-white">L</span>
          </div>
        </div>
        <div className="flex-1 text-lg text-ink/80 leading-relaxed space-y-4">
          <p>
            Leonor Lopetegui es la autora de La Cartilla de Gretel (©2004), 
            un método de lectoescritura en español ilustrado por 
            Estela de Armas Plasencia, con la colaboración de Aída Fernández 
            y Silvia Diez. Publicado por LANY Books LLC, el cuaderno enseña 
            las vocales y consonantes a través de personajes entrañables y 
            rimas memorables, en el orden pedagógico O · A · E · I · U y las 
            consonantes M, P, S, T, D, L, N, Ñ, B, V, R, rr, G, F, J, C, Y, Z.
          </p>
        </div>
      </div>
    </section>
  )
}
