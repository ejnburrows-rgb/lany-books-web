import { useState } from 'react'

type Lang = 'en' | 'es'

const img = {
  hero: '/images/gretel/hero.webp',
  cover: '/book-samples/cover-stand-in.jpg'
}

const content = {
  en: {
    nav: ['Home', 'Program', 'Package', 'Author', 'Buy'],
    heroTitle: 'La Cartilla de Gretel',
    heroSub: 'A complete phonetic Spanish reading and writing program for Kindergarten, First Grade, and Second Grade.',
    heroText: 'Created for families, teachers, and schools, this complete program moves children from letter sounds to syllables, words, sentences, paragraphs, and poems.',
    purchase: 'Purchase Now', add: 'Add to Cart', included: 'View What’s Included', request: 'Request Information',
    methodTitle: 'A controlled phonetic method that builds confidence step by step.',
    intro: ['La Cartilla de Gretel is an easy-to-follow program for students in Kindergarten, First Grade, or Second Grade. This method emphasizes the mechanics of reading and writing in Spanish and uses sound associations to help students remember vowel and consonant sounds.', 'The student learns from the simple to the complex: letter sounds, syllable sounds, words, sentences, paragraphs, and poems. No letters or phonetic sounds are used until they have been fully introduced.'],
    packageTitle: 'Complete Package', price: '$150',
    packageLead: 'A full classroom-ready package with student materials, presentation tools, reproducible practice, evaluations, audio support, answer keys, and the Teacher’s Guide.',
    components: ['17" × 22" flipchart and easel', 'Reproducible syllabic and vowel charts', 'Answer key to the syllabic charts', '92-page Student Book', 'Reproducible homework pages', 'Audio CD of all poems included in the flipchart', 'Reproducible evaluations', 'Evaluation answer key', 'Teacher’s Guide', 'Durable canvas carrying bag with organized folders'],
    formats: ['Amazon PDF', 'Kindle', 'Audible', 'Barnes & Noble'],
    authorTitle: 'About Leonor Lopetegui',
    author: ['Leonor Lopetegui dedicated more than 50 years to teaching and educational leadership, with a lifelong focus on Spanish literacy and bilingual education.', 'Her work supported children, teachers, and families through a structured, loving, and practical approach to Spanish reading and writing.', 'La Cartilla de Gretel reflects that legacy: a phonetic, classroom-tested method designed to help young readers succeed step by step.'],
    honors: ['More than 50 years in education', 'Recognized for contributions to Hispanic and bilingual education', 'Author of educational materials for Spanish literacy', 'Presented and contributed to bilingual education communities'],
    credits: [['Author','Leonor Lopetegui'],['Illustrator','Estela de Armas Plasencia'],['Contributors','Silvia Diez and Aída Fernández'],['Digital adaptation','Emilio José Novo'],['Imprint','Lanny Books']],
    form: 'For parents, teachers, schools, distributors, and bookstores. This form is front-end only until a form service is connected.'
  },
  es: {
    nav: ['Inicio', 'Programa', 'Paquete', 'Autora', 'Comprar'],
    heroTitle: 'La Cartilla de Gretel',
    heroSub: 'Un programa completo y fonético de lectura y escritura en español para Kindergarten, Primer Grado y Segundo Grado.',
    heroText: 'Creado para familias, maestros y escuelas, este programa lleva al niño desde los sonidos de las letras hasta sílabas, palabras, oraciones, párrafos y poemas.',
    purchase: 'Comprar ahora', add: 'Agregar al carrito', included: 'Ver qué incluye', request: 'Solicitar información',
    methodTitle: 'Un método fonético controlado que desarrolla confianza paso a paso.',
    intro: ['La Cartilla de Gretel es un programa fácil de seguir para estudiantes de Kindergarten, Primer Grado y Segundo Grado. Este método enfatiza la mecánica de la lectura y la escritura en español y utiliza asociaciones de sonidos para ayudar al estudiante a recordar vocales y consonantes.', 'El estudiante aprende de lo simple a lo complejo: sonidos de letras, sonidos silábicos, palabras, oraciones, párrafos y poemas. No se utilizan letras ni sonidos fonéticos hasta que hayan sido introducidos completamente.'],
    packageTitle: 'Paquete completo', price: '$150',
    packageLead: 'Un paquete completo listo para el aula con materiales del alumno, herramientas de presentación, práctica reproducible, evaluaciones, apoyo de audio, claves de respuestas y Guía del Maestro.',
    components: ['Rotafolio de 17" × 22" con caballete', 'Carteles reproducibles de sílabas y vocales', 'Clave de respuestas de los carteles silábicos', 'Libro del alumno de 92 páginas', 'Tareas reproducibles', 'CD de audio con todos los poemas incluidos en el rotafolio', 'Evaluaciones reproducibles', 'Clave de respuestas de las evaluaciones', 'Guía del maestro', 'Bolsa de lona resistente con carpetas organizadas'],
    formats: ['PDF en Amazon', 'Kindle', 'Audible', 'Barnes & Noble'],
    authorTitle: 'Acerca de Leonor Lopetegui',
    author: ['Leonor Lopetegui dedicó más de 50 años a la enseñanza y al liderazgo educativo, con un enfoque de vida en la lectoescritura en español y la educación bilingüe.', 'Su labor apoyó a niños, maestros y familias mediante un enfoque estructurado, amoroso y práctico para la lectura y escritura en español.', 'La Cartilla de Gretel refleja ese legado: un método fonético, probado en el aula, diseñado para ayudar al lector joven paso a paso.'],
    honors: ['Más de 50 años en la educación', 'Reconocida por sus aportes a la educación hispana y bilingüe', 'Autora de materiales educativos para la lectoescritura en español', 'Participación y aporte a comunidades de educación bilingüe'],
    credits: [['Autora','Leonor Lopetegui'],['Ilustradora','Estela de Armas Plasencia'],['Colaboradoras','Silvia Diez y Aída Fernández'],['Adaptación digital','Emilio José Novo'],['Sello','Lanny Books']],
    form: 'Para padres, maestros, escuelas, distribuidores y librerías. Este formulario es solo visual hasta conectar un servicio de formularios.'
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [cart, setCart] = useState(0)
  const t = content[lang]
  return <div className="site"><header><a className="brand" href="#home">Lanny <span>Books</span></a><nav>{t.nav.map((n,i)=><a href={['#home','#program','#package','#author','#buy'][i]} key={n}>{n}</a>)}</nav><button onClick={()=>setLang(lang==='en'?'es':'en')}>EN / ES</button></header><main><section id="home" className="hero"><div><p className="eyebrow">Lanny Books presents</p><h1>{t.heroTitle}</h1><h2>{t.heroSub}</h2><p>{t.heroText}</p><div className="actions"><a className="primary" href="#buy">{t.purchase}</a><a className="secondary" href="#package">{t.included}</a></div></div><div className="heroArt"><img src={img.hero} alt="Gretel reading La Cartilla de Gretel"/><div className="coverBadge"><img src={img.cover} alt="Official cover of La Cartilla de Gretel"/><strong>{t.purchase}</strong></div></div></section><section id="program" className="split"><div><p className="eyebrow">Program</p><h2>{t.methodTitle}</h2></div><div>{t.intro.map(p=><p key={p}>{p}</p>)}</div></section><section id="buy" className="product"><img src={img.cover} alt="La Cartilla de Gretel cover"/><div><p className="eyebrow">Complete offer</p><h2>{t.packageTitle}</h2><p>{t.packageLead}</p><div className="price">{t.price}</div><button className="primary" onClick={()=>setCart(cart+1)}>{t.add}{cart?` (${cart})`:''}</button><div className="formats">{t.formats.map(f=><a href="#contact" key={f}>{f}</a>)}</div></div></section><section id="package"><p className="eyebrow">Package</p><h2>{lang==='en'?'What the package includes':'Qué incluye el paquete'}</h2><ul className="components">{t.components.map(c=><li key={c}>{c}</li>)}</ul><img className="wideArt" src={img.hero} alt="Gretel presentation art"/></section><section id="author" className="split"><div><p className="eyebrow">Legacy</p><h2>{t.authorTitle}</h2>{t.author.map(p=><p key={p}>{p}</p>)}</div><div className="panel"><h3>{lang==='en'?'Recognitions and legacy':'Reconocimientos y legado'}</h3><ul>{t.honors.map(h=><li key={h}>{h}</li>)}</ul></div></section><section className="credits"><h2>{lang==='en'?'Official credits':'Créditos oficiales'}</h2>{t.credits.map(([a,b])=><div className="credit" key={a}><span>{a}</span><strong>{b}</strong></div>)}</section><section id="contact" className="split"><div><h2>{t.request}</h2><p>{t.form}</p></div><form><input placeholder={lang==='en'?'Name':'Nombre'}/><input placeholder="Email"/><select><option>{lang==='en'?'Parent':'Padre o madre'}</option><option>{lang==='en'?'Teacher':'Maestro'}</option><option>{lang==='en'?'School':'Escuela'}</option></select><textarea placeholder={lang==='en'?'Message':'Mensaje'}/><button className="primary" type="button">{t.request}</button></form></section></main><footer><strong>Lanny Books</strong><span>La Cartilla de Gretel · Emilio José Novo</span></footer></div>
}
