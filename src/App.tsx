import { useState } from 'react'

type Lang = 'en' | 'es'

const copy = {
  en: {
    nav: ['Home', 'Program', 'Package', 'Author', 'Contact'],
    eyebrow: 'Lanny Books presents',
    title: 'La Cartilla de Gretel',
    subtitle: 'A complete phonetic Spanish reading and writing program for Kindergarten, First Grade, and Second Grade.',
    heroText: 'A warm, structured program that guides children from letter sounds to syllables, words, sentences, paragraphs, and poems.',
    purchase: 'Purchase Now',
    includedCta: 'View What’s Included',
    request: 'Request Information',
    methodTitle: 'A controlled phonetic path into Spanish literacy.',
    intro: [
      'La Cartilla de Gretel is an easy-to-follow program for students in Kindergarten, First Grade, or Second Grade. This method emphasizes the mechanics of reading and writing in Spanish. The program uses sound associations to help students remember vowel and consonant sounds.',
      'The method takes the student from the simple to the complex. The student first learns letter sounds, then syllable sounds, then forms words. Certain sight words are then presented so the student can form sentences and ultimately paragraphs and poems.',
      'This is a completely controlled method. No letters or phonetic sounds are used until they are fully introduced.'
    ],
    packageTitle: 'Complete Package',
    packageLead: 'A full classroom-ready teaching system with student materials, presentation tools, reproducible practice, evaluations, audio support, answer keys, and the Teacher’s Guide.',
    price: '$150',
    add: 'Add to Cart',
    linksTitle: 'Additional purchase formats',
    purchaseLinks: ['Amazon PDF', 'Kindle', 'Audible', 'Barnes & Noble'],
    includedTitle: 'What the package includes',
    components: ['17" × 22" flipchart and easel', 'Reproducible syllabic and vowel charts', 'Answer key to the syllabic charts', '92-page Student Book', 'Reproducible homework pages', 'Audio CD of all poems included in the flipchart', 'Reproducible evaluations', 'Evaluation answer key', 'Teacher’s Guide', 'Durable canvas carrying bag'],
    note: 'The flipchart comes in its own easel and all components come neatly organized in corresponding folders and a durable canvas carrying bag.',
    showcaseTitle: 'A beautiful package for school and home.',
    showcaseLead: 'The presentation centers the real book cover and the Gretel illustrations instead of cheap scan-heavy pamphlet visuals.',
    cards: [['Student Book', '92 pages of reading and writing practice.'], ['Flipchart', 'A 17" × 22" classroom presentation tool.'], ['Homework', 'Reproducible practice pages for home.'], ['Evaluations', 'Reproducible evaluations with answer key.'], ['Audio CD', 'Poems recorded for listening support.'], ['Teacher’s Guide', 'Teacher support for instruction.']],
    authorTitle: 'About Leonor Lopetegui',
    authorLead: 'Veteran educator, author, and creator of La Cartilla de Gretel.',
    authorParagraphs: ['Leonor Lopetegui dedicated more than 50 years to teaching and educational leadership, with a lifelong focus on Spanish literacy and bilingual education.', 'Her work as an educator helped support children, teachers, and families learning Spanish through a structured and loving approach.', 'La Cartilla de Gretel reflects that legacy: a practical, phonetic, classroom-tested method that gives young readers confidence step by step.'],
    honors: ['More than 50 years in education', 'Recognized for contributions to Hispanic and bilingual education', 'Author of educational materials for Spanish literacy', 'Presented and contributed to bilingual education communities'],
    creditsTitle: 'Official credits',
    credits: [['Author', 'Leonor Lopetegui'], ['Illustrator', 'Estela de Armas Plasencia'], ['Contributors', 'Silvia Diez and Aída Fernández'], ['Digital adaptation', 'Emilio José Novo'], ['Imprint', 'Lanny Books']],
    formNote: 'For parents, teachers, schools, distributors, and bookstores. This form is front-end only until a form service is connected.'
  },
  es: {
    nav: ['Inicio', 'Programa', 'Paquete', 'Autora', 'Contacto'],
    eyebrow: 'Lanny Books presenta',
    title: 'La Cartilla de Gretel',
    subtitle: 'Un programa completo y fonético de lectura y escritura en español para Kindergarten, Primer Grado y Segundo Grado.',
    heroText: 'Un programa cálido y estructurado que guía al niño desde los sonidos de las letras hasta sílabas, palabras, oraciones, párrafos y poemas.',
    purchase: 'Comprar ahora',
    includedCta: 'Ver qué incluye',
    request: 'Solicitar información',
    methodTitle: 'Un camino fonético controlado hacia la lectoescritura en español.',
    intro: [
      'La Cartilla de Gretel es un programa fácil de seguir para estudiantes de Kindergarten, Primer Grado y Segundo Grado. Este método enfatiza la mecánica de la lectura y la escritura en español. El programa utiliza asociaciones de sonidos para ayudar al estudiante a recordar sonidos vocálicos y consonánticos.',
      'El método lleva al estudiante de lo simple a lo complejo. Primero aprende los sonidos de las letras, luego los sonidos silábicos y después forma palabras. Más adelante se introducen palabras de reconocimiento visual para que pueda formar oraciones y finalmente párrafos y poemas.',
      'Es un método completamente controlado. No se utilizan letras ni sonidos fonéticos hasta que hayan sido introducidos completamente.'
    ],
    packageTitle: 'Paquete completo',
    packageLead: 'Un sistema completo listo para el aula con materiales del alumno, herramientas de presentación, práctica reproducible, evaluaciones, apoyo de audio, claves de respuestas y Guía del Maestro.',
    price: '$150',
    add: 'Agregar al carrito',
    linksTitle: 'Formatos adicionales de compra',
    purchaseLinks: ['PDF en Amazon', 'Kindle', 'Audible', 'Barnes & Noble'],
    includedTitle: 'Qué incluye el paquete',
    components: ['Rotafolio de 17" × 22" con caballete', 'Carteles reproducibles de sílabas y vocales', 'Clave de respuestas de los carteles silábicos', 'Libro del alumno de 92 páginas', 'Tareas reproducibles', 'CD de audio con todos los poemas incluidos en el rotafolio', 'Evaluaciones reproducibles', 'Clave de respuestas de las evaluaciones', 'Guía del maestro', 'Bolsa de lona resistente'],
    note: 'El rotafolio viene con su propio caballete y todos los componentes vienen organizados cuidadosamente en carpetas correspondientes y en una resistente bolsa de lona.',
    showcaseTitle: 'Un paquete hermoso para la escuela y el hogar.',
    showcaseLead: 'La presentación se centra en la portada real del libro y las ilustraciones de Gretel, no en visuales baratos de páginas escaneadas.',
    cards: [['Libro del alumno', '92 páginas de práctica de lectura y escritura.'], ['Rotafolio', 'Herramienta de presentación de 17" × 22" para el aula.'], ['Tareas', 'Páginas reproducibles para practicar en casa.'], ['Evaluaciones', 'Evaluaciones reproducibles con clave de respuestas.'], ['CD de audio', 'Poemas grabados para apoyo auditivo.'], ['Guía del maestro', 'Apoyo para la instrucción del maestro.']],
    authorTitle: 'Acerca de Leonor Lopetegui',
    authorLead: 'Educadora veterana, autora y creadora de La Cartilla de Gretel.',
    authorParagraphs: ['Leonor Lopetegui dedicó más de 50 años a la enseñanza y al liderazgo educativo, con un enfoque de vida en la lectoescritura en español y la educación bilingüe.', 'Su labor como educadora apoyó a niños, maestros y familias en el aprendizaje del español mediante un enfoque estructurado y amoroso.', 'La Cartilla de Gretel refleja ese legado: un método práctico, fonético y probado en el aula que le da confianza al lector paso a paso.'],
    honors: ['Más de 50 años en la educación', 'Reconocida por sus aportes a la educación hispana y bilingüe', 'Autora de materiales educativos para la lectoescritura en español', 'Participación y aporte a comunidades de educación bilingüe'],
    creditsTitle: 'Créditos oficiales',
    credits: [['Autora', 'Leonor Lopetegui'], ['Ilustradora', 'Estela de Armas Plasencia'], ['Colaboradoras', 'Silvia Diez y Aída Fernández'], ['Adaptación digital', 'Emilio José Novo'], ['Sello', 'Lanny Books']],
    formNote: 'Para padres, maestros, escuelas, distribuidores y librerías. Este formulario es solo visual hasta conectar un servicio de formularios.'
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [cart, setCart] = useState(0)
  const t = copy[lang]
  const navTargets = ['#home', '#program', '#package', '#author', '#contact']

  return (
    <div className="site-shell" data-language={lang}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="topbar">
        <a className="brand-lockup" href="#home"><span>Lanny</span><span>Books</span></a>
        <nav className="nav" aria-label="Main navigation">{t.nav.map((item, i) => <a key={item} href={navTargets[i]}>{item}</a>)}</nav>
        <div className="header-actions"><a className="mini-cta" href="#purchase">{t.purchase}</a><button id="language-toggle" className="language-toggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>EN / ES</button></div>
      </header>
      <main id="main">
        <section id="home" className="hero-section">
          <div className="hero-copy"><p className="kicker">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-subtitle">{t.subtitle}</p><p className="hero-lead">{t.heroText}</p><div className="hero-actions"><a className="button primary" href="#purchase">{t.purchase}</a><a className="button secondary" href="#package">{t.includedCta}</a><a className="button ghost" href="#contact">{t.request}</a></div></div>
          <div className="hero-visual premium-visual"><img className="hero-gretel" src="/gretel/happy.webp" alt="Gretel with La Cartilla de Gretel" /><div className="cover-chip"><img src="/book-samples/cover-stand-in.jpg" alt="La Cartilla de Gretel official cover" /><span>{t.purchase}</span></div></div>
        </section>
        <section id="program" className="section split-section"><div><p className="kicker">{lang === 'en' ? 'The method' : 'El método'}</p><h2>{t.methodTitle}</h2></div><div className="text-stack">{t.intro.map((p) => <p key={p}>{p}</p>)}</div></section>
        <section id="purchase" className="section purchase-section"><div className="product-card"><div className="product-cover-wrap"><img src="/book-samples/cover-stand-in.jpg" alt="Official book cover" /></div><div className="product-copy"><p className="kicker">Lanny Books</p><h2>{t.packageTitle}</h2><p className="section-lead">{t.packageLead}</p><div className="price-pill">{t.price}</div><div className="purchase-row"><button className="button primary" type="button" onClick={() => setCart(cart + 1)}>{t.add}{cart ? ` (${cart})` : ''}</button><a className="button secondary" href="#contact">{t.request}</a></div><div className="link-panel"><h3>{t.linksTitle}</h3><div className="purchase-links">{t.purchaseLinks.map((label) => <a href="#contact" key={label}>{label}</a>)}</div></div></div></div></section>
        <section id="package" className="section package-section"><p className="kicker">{lang === 'en' ? 'Complete package' : 'Paquete completo'}</p><h2>{t.includedTitle}</h2><p className="section-lead">{t.packageLead}</p><ul className="component-list">{t.components.map((item) => <li key={item}>{item}</li>)}</ul><p className="package-note">{t.note}</p></section>
        <section className="section showcase-section"><p className="kicker">{lang === 'en' ? 'Presentation' : 'Presentación'}</p><h2>{t.showcaseTitle}</h2><p className="section-lead">{t.showcaseLead}</p><div className="cards-grid">{t.cards.map(([title, text]) => <article className="premium-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section id="author" className="section author-section"><div className="author-card"><p className="kicker">{lang === 'en' ? 'Author legacy' : 'Legado de la autora'}</p><h2>{t.authorTitle}</h2><p className="section-lead">{t.authorLead}</p><div className="text-stack">{t.authorParagraphs.map((p) => <p key={p}>{p}</p>)}</div></div><div className="honors-panel"><h3>{lang === 'en' ? 'Recognitions and legacy' : 'Reconocimientos y legado'}</h3><ul>{t.honors.map((h) => <li key={h}>{h}</li>)}</ul></div></section>
        <section className="section credits-section"><div><p className="kicker">Lanny Books</p><h2>{t.creditsTitle}</h2></div><div className="credit-panel">{t.credits.map(([label, value]) => <div className="credit-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section>
        <section id="contact" className="section contact-section"><div><p className="kicker">Lanny Books</p><h2>{t.request}</h2><p className="section-lead">{t.formNote}</p></div><form className="interest-form"><label>{lang === 'en' ? 'Name' : 'Nombre'}<input /></label><label>Email<input type="email" /></label><label>{lang === 'en' ? 'Interested as' : 'Interés como'}<select><option>{lang === 'en' ? 'Parent' : 'Padre o madre'}</option><option>{lang === 'en' ? 'Teacher' : 'Maestro'}</option><option>{lang === 'en' ? 'School' : 'Escuela'}</option><option>{lang === 'en' ? 'Distributor or bookstore' : 'Distribuidor o librería'}</option></select></label><label>{lang === 'en' ? 'Message' : 'Mensaje'}<textarea /></label><button className="button primary" type="button">{t.request}</button></form></section>
      </main>
      <footer className="footer"><strong>Lanny Books</strong><span>La Cartilla de Gretel · Emilio José Novo</span></footer>
    </div>
  )
}
