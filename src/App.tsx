import { useState } from 'react'

type Lang = 'en' | 'es'

type Credit = [string, string]

const imagePaths = {
  hero: '/images/gretel/hero.jpg',
  cover: '/images/gretel/book-cover.jpg',
  reading: '/images/gretel/reading.jpg',
  holding: '/images/gretel/holding-book.jpg',
  hugging: '/images/gretel/hugging-book.jpg'
}

const logoPaths: Record<string, string> = {
  amazon: '/images/brands/amazon.svg',
  kindle: '/images/brands/kindle.svg',
  audible: '/images/brands/audible.svg',
  bn: '/images/brands/barnes-noble.svg'
}

const formats = [
  { id: 'amazon', name: 'Amazon', className: 'amazon' },
  { id: 'kindle', name: 'Kindle', className: 'kindle' },
  { id: 'audible', name: 'Audible', className: 'audible' },
  { id: 'bn', name: 'Barnes & Noble', className: 'bn' }
] as const

const copy = {
  en: {
    nav: ['Home', 'Program', 'Package', 'Author', 'Contact'],
    navAria: 'Main navigation',
    brandAria: 'LANY Books home',
    toggle: 'Español',
    eyebrow: 'LANY Books presents',
    title: 'La Cartilla de Gretel',
    subtitle:
      'A complete phonetic Spanish reading and writing program for Kindergarten, First Grade, and Second Grade.',
    heroText:
      'A warm, structured, classroom-ready program that guides children from letter sounds to syllables, words, sentences, paragraphs, and poems.',
    purchase: 'Purchase Now',
    addToCart: 'Add to Cart',
    viewIncluded: 'View What’s Included',
    requestInfo: 'Request Information',

    programLabel: 'Program',
    methodTitle: 'A controlled phonetic method that builds confidence step by step.',
    methodText: [
      'La Cartilla de Gretel is an easy-to-follow program for students in Kindergarten, First Grade, or Second Grade. This method emphasizes the mechanics of reading and writing in Spanish.',
      'The program uses sound associations to help students remember vowel and consonant sounds. It takes the child from the simple to the complex: letter sounds, syllables, words, sentences, paragraphs, and poems.',
      'This is a completely controlled method. No letters or phonetic sounds are used until they have been fully introduced.'
    ],

    offerLabel: 'Complete offer',
    packageTitle: 'La Cartilla de Gretel Complete Package',
    packageLead:
      'A complete teaching package for schools, teachers, and families who want a structured Spanish literacy method.',
    price: '$150',
    formatsTitle: 'Additional purchase formats',
    formatsNote:
      'Example buttons showing how each retail format would appear. Purchase links are not connected yet.',
    formatTags: ['PDF', 'eBook', 'Audiobook', 'Bookstore'],

    packageLabel: 'Package',
    includedTitle: 'What the package includes',
    includedLead:
      'Everything needed to present the method, guide classroom instruction, send home practice, and evaluate progress.',
    components: [
      '17" × 22" flipchart and easel',
      'Reproducible syllabic and vowel charts',
      'Answer key to the syllabic charts',
      '92-page Student Book',
      'Reproducible homework pages',
      'Audio CD of all poems included in the flipchart',
      'Reproducible evaluations',
      'Evaluation answer key',
      'Teacher’s Guide',
      'Durable canvas carrying bag with organized folders'
    ],
    packageNote:
      'The flipchart comes in its own easel, and all components come neatly organized in corresponding folders and a durable canvas carrying bag.',

    presentationLabel: 'Presentation',
    showcaseTitle: 'A beautiful literacy package for school and home.',
    showcaseLead:
      'The visual presentation centers the book cover and Gretel artwork, not cheap scan-heavy pamphlet images.',
    showcaseCards: [
      ['Student Book', 'A 92-page student workbook for structured reading and writing practice.'],
      ['Flipchart', 'A large 17" × 22" classroom presentation tool with easel.'],
      ['Homework', 'Reproducible practice pages for home and classroom reinforcement.'],
      ['Evaluations', 'Reproducible evaluations with answer key support.'],
      ['Audio CD', 'Audio support for the poems included in the flipchart.'],
      ['Teacher’s Guide', 'Teacher support for presenting the program with structure and clarity.']
    ],

    authorLegacyLabel: 'Author legacy',
    authorTitle: 'About the Author',
    authorLead: 'Veteran educator, author, and creator of La Cartilla de Gretel.',
    authorText: [
      'Leonor Lopetegui dedicated more than 50 years to teaching and educational leadership, with a lifelong focus on Spanish literacy and bilingual education.',
      'Her work supported children, teachers, and families through a structured, loving, and practical approach to Spanish reading and writing.',
      'La Cartilla de Gretel reflects that legacy: a phonetic, classroom-tested method designed to help young readers succeed step by step.'
    ],
    dedicationLabel: 'In the author’s words',
    dedicationParas: [
      'To my daughter Nora Bethsy, to my nieces Sofía M. Destefano and Alexa G. Flores, and to all the children who study Spanish.',
      'This book was born in the classroom, and to the classroom I want it to return. My students showed the way; of them I have been both teacher and pupil. With the same love with which it was created, I want to place it in the hands of the children who will come to our classrooms to learn to read very well.'
    ],
    dedicationAttribution: '— Leonor Lopetegui, the author',
    honorsTitle: 'Recognitions and legacy',
    honors: [
      'More than 50 years as an educator',
      'Lifelong focus on Spanish literacy and bilingual education',
      'Created the controlled phonetic method behind La Cartilla de Gretel'
    ],

    creditsLabel: 'LANY Books',
    creditsTitle: 'Official credits',
    credits: [
      ['Author', 'Leonor Lopetegui'],
      ['Illustrator', 'Estela de Armas Plasencia'],
      ['Contributors', 'Silvia Diez and Aída Fernández'],
      ['Digital adaptation', 'Emilio José Novo'],
      ['Imprint', 'LANY Books']
    ] as Credit[],

    interestFormLabel: 'Interest form',
    contactTitle: 'Request information',
    contactLead:
      'For parents, teachers, schools, distributors, and bookstores. This form is front-end only until a form service is connected.',
    name: 'Name',
    email: 'Email',
    role: 'Interested as',
    roles: ['Parent', 'Teacher', 'School', 'Distributor or bookstore'],
    message: 'Message',
    footer: 'Spanish literacy, thoughtfully presented by LANY Books.'
  },

  es: {
    nav: ['Inicio', 'Programa', 'Paquete', 'Autora', 'Contacto'],
    navAria: 'Navegación principal',
    brandAria: 'Inicio de LANY Books',
    toggle: 'English',
    eyebrow: 'LANY Books presenta',
    title: 'La Cartilla de Gretel',
    subtitle:
      'Un programa completo y fonético de lectura y escritura en español para Kindergarten, Primer Grado y Segundo Grado.',
    heroText:
      'Un programa cálido, estructurado y listo para el aula que guía al niño desde los sonidos de las letras hasta sílabas, palabras, oraciones, párrafos y poemas.',
    purchase: 'Comprar ahora',
    addToCart: 'Agregar al carrito',
    viewIncluded: 'Ver qué incluye',
    requestInfo: 'Solicitar información',

    programLabel: 'Programa',
    methodTitle: 'Un método fonético controlado que desarrolla confianza paso a paso.',
    methodText: [
      'La Cartilla de Gretel es un programa fácil de seguir para estudiantes de Kindergarten, Primer Grado y Segundo Grado. Este método enfatiza la mecánica de la lectura y la escritura en español.',
      'El programa utiliza asociaciones de sonidos para ayudar al estudiante a recordar vocales y consonantes. Lleva al niño de lo simple a lo complejo: sonidos de letras, sílabas, palabras, oraciones, párrafos y poemas.',
      'Es un método completamente controlado. No se utilizan letras ni sonidos fonéticos hasta que hayan sido introducidos completamente.'
    ],

    offerLabel: 'Oferta completa',
    packageTitle: 'Paquete completo de La Cartilla de Gretel',
    packageLead:
      'Un paquete completo de enseñanza para escuelas, maestros y familias que desean un método estructurado de lectoescritura en español.',
    price: '$150',
    formatsTitle: 'Formatos adicionales de compra',
    formatsNote:
      'Botones de ejemplo que muestran cómo se vería cada formato de venta. Los enlaces de compra aún no están conectados.',
    formatTags: ['PDF', 'Libro electrónico', 'Audiolibro', 'Librería'],

    packageLabel: 'Paquete',
    includedTitle: 'Qué incluye el paquete',
    includedLead:
      'Todo lo necesario para presentar el método, guiar la instrucción, enviar práctica al hogar y evaluar el progreso.',
    components: [
      'Rotafolio de 17" × 22" con caballete',
      'Carteles reproducibles de sílabas y vocales',
      'Clave de respuestas de los carteles silábicos',
      'Libro del alumno de 92 páginas',
      'Tareas reproducibles',
      'CD de audio con todos los poemas incluidos en el rotafolio',
      'Evaluaciones reproducibles',
      'Clave de respuestas de las evaluaciones',
      'Guía del maestro',
      'Bolsa de lona resistente con carpetas organizadas'
    ],
    packageNote:
      'El rotafolio viene con su propio caballete, y todos los componentes vienen organizados cuidadosamente en carpetas correspondientes y en una resistente bolsa de lona.',

    presentationLabel: 'Presentación',
    showcaseTitle: 'Un paquete hermoso de lectoescritura para la escuela y el hogar.',
    showcaseLead:
      'La presentación visual se centra en la portada del libro y las ilustraciones de Gretel, no en imágenes baratas de páginas escaneadas.',
    showcaseCards: [
      ['Libro del alumno', 'Libro del alumno de 92 páginas para práctica estructurada de lectura y escritura.'],
      ['Rotafolio', 'Herramienta grande de presentación para el aula de 17" × 22" con caballete.'],
      ['Tareas', 'Páginas reproducibles para práctica en casa y refuerzo en el aula.'],
      ['Evaluaciones', 'Evaluaciones reproducibles con apoyo de clave de respuestas.'],
      ['CD de audio', 'Apoyo auditivo para los poemas incluidos en el rotafolio.'],
      ['Guía del maestro', 'Apoyo para presentar el programa con estructura y claridad.']
    ],

    authorLegacyLabel: 'Legado de la autora',
    authorTitle: 'Acerca de la autora',
    authorLead: 'Educadora veterana, autora y creadora de La Cartilla de Gretel.',
    authorText: [
      'Leonor Lopetegui dedicó más de 50 años a la enseñanza y al liderazgo educativo, con un enfoque de vida en la lectoescritura en español y la educación bilingüe.',
      'Su labor apoyó a niños, maestros y familias mediante un enfoque estructurado, amoroso y práctico para la lectura y escritura en español.',
      'La Cartilla de Gretel refleja ese legado: un método fonético, probado en el aula, diseñado para ayudar al lector joven paso a paso.'
    ],
    dedicationLabel: 'En palabras de la autora',
    dedicationParas: [
      'A mi hija Nora Bethsy, a mis sobrinas Sofía M. Destefano y Alexa G. Flores, y a todos los niños que estudian español.',
      'Este libro ha nacido en las aulas y a ellas quiero que vuelva. Mis alumnos señalaron el camino; de ellos he sido maestra y discípula. Con el mismo amor que fue creado, deseo ponerlo en las manos de los niños y niñas que vendrán a nuestras aulas para que aprendan a leer muy bien.'
    ],
    dedicationAttribution: '— Leonor Lopetegui, la autora',
    honorsTitle: 'Reconocimientos y legado',
    honors: [
      'Más de 50 años como educadora',
      'Enfoque de vida en la lectoescritura en español y la educación bilingüe',
      'Creadora del método fonético controlado de La Cartilla de Gretel'
    ],

    creditsLabel: 'LANY Books',
    creditsTitle: 'Créditos oficiales',
    credits: [
      ['Autora', 'Leonor Lopetegui'],
      ['Ilustradora', 'Estela de Armas Plasencia'],
      ['Colaboradoras', 'Silvia Diez y Aída Fernández'],
      ['Adaptación digital', 'Emilio José Novo'],
      ['Sello', 'LANY Books']
    ] as Credit[],

    interestFormLabel: 'Formulario de interés',
    contactTitle: 'Solicitar información',
    contactLead:
      'Para padres, maestros, escuelas, distribuidores y librerías. Este formulario es solo visual hasta conectar un servicio de formularios.',
    name: 'Nombre',
    email: 'Correo electrónico',
    role: 'Interés como',
    roles: ['Padre o madre', 'Maestro', 'Escuela', 'Distribuidor o librería'],
    message: 'Mensaje',
    footer: 'Lectoescritura en español, presentada cuidadosamente por LANY Books.'
  }
}

function FormatGlyph({ id }: { id: string }) {
  switch (id) {
    case 'amazon':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M3 14.5c5 4 13 4 18 0" fill="none" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M17 13l4 1.4-1.4 3.7" fill="none" stroke="#FF9900" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'kindle':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="5" y="2.5" width="14" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="9" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'audible':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M5 13.2v-1.2a7 7 0 0114 0v1.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="3.4" y="12.8" width="4" height="6.4" rx="1.4" fill="currentColor" />
          <rect x="16.6" y="12.8" width="4" height="6.4" rx="1.4" fill="currentColor" />
        </svg>
      )
    case 'bn':
      return (
        <svg className="formatGlyph" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M12 6c-2-1.4-5-1.9-8-1.4v12.8c3-.5 6 0 8 1.4 2-1.4 5-1.9 8-1.4V4.6c-3-.5-6 0-8 1.4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <line x1="12" y1="6" x2="12" y2="18.8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    default:
      return null
  }
}

function BrandLogo({ id, name, tag }: { id: string; name: string; tag: string }) {
  const [failed, setFailed] = useState(false)

  if (failed || !logoPaths[id]) {
    return (
      <>
        <FormatGlyph id={id} />
        <span className="formatLinkText">
          <strong>{name}</strong>
          <small>{tag}</small>
        </span>
      </>
    )
  }

  return (
    <>
      <img
        className="formatLogoImg"
        src={logoPaths[id]}
        alt={name}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span className="formatLinkText">
        <small>{tag}</small>
      </span>
    </>
  )
}

function ImageFrame({
  src,
  alt,
  label,
  className = '',
  aspect
}: {
  src: string
  alt: string
  label: string
  className?: string
  aspect?: string
}) {
  const [failed, setFailed] = useState(false)
  const style = aspect ? { aspectRatio: aspect } : undefined

  if (failed) {
    return (
      <div
        className={`imageFallback ${className}`}
        style={style}
        role="img"
        aria-label={alt}
      >
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [cart, setCart] = useState(0)
  const t = copy[lang]
  const navTargets = ['#home', '#program', '#package', '#author', '#contact']

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#home" aria-label={t.brandAria}>
          <span>LANY</span>
          <span>Books</span>
        </a>

        <nav aria-label={t.navAria}>
          {t.nav.map((item, index) => (
            <a key={item} href={navTargets[index]}>
              {item}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <a className="smallButton dark" href="#buy">
            {t.purchase}
          </a>
          <button
            className="smallButton gold"
            type="button"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          >
            {t.toggle}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="heroSubtitle">{t.subtitle}</p>
            <p className="heroText">{t.heroText}</p>

            <div className="actions">
              <a className="button primary" href="#buy">
                {t.purchase}
              </a>
              <a className="button secondary" href="#package">
                {t.viewIncluded}
              </a>
              <a className="button soft" href="#contact">
                {t.requestInfo}
              </a>
            </div>
          </div>

          <div className="heroArt">
            <ImageFrame
              src={imagePaths.hero}
              alt="Gretel holding La Cartilla de Gretel"
              label="Gretel hero image pending"
              className="heroImage"
              aspect="4 / 5"
            />
            <div className="coverBadge">
              <ImageFrame
                src={imagePaths.cover}
                alt="Official La Cartilla de Gretel cover"
                label="Book cover pending"
                className="coverImage"
                aspect="3 / 4"
              />
              <strong>{t.purchase}</strong>
            </div>
          </div>
        </section>

        <section id="program" className="section split">
          <div>
            <p className="eyebrow">{t.programLabel}</p>
            <h2>{t.methodTitle}</h2>
          </div>
          <div className="textStack">
            {t.methodText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="buy" className="section productSection">
          <div className="productCard">
            <div className="productCover">
              <ImageFrame
                src={imagePaths.cover}
                alt="La Cartilla de Gretel cover"
                label="Official book cover pending"
                aspect="3 / 4"
              />
            </div>

            <div>
              <p className="eyebrow">{t.offerLabel}</p>
              <h2>{t.packageTitle}</h2>
              <p className="lead">{t.packageLead}</p>

              <div className="price">{t.price}</div>

              <div className="actions">
                <button
                  className="button primary"
                  type="button"
                  onClick={() => setCart((current) => current + 1)}
                >
                  {t.addToCart}
                  {cart > 0 ? ` (${cart})` : ''}
                </button>

                <a className="button secondary" href="#contact">
                  {t.requestInfo}
                </a>
              </div>

              <div className="formatBox">
                <h3>{t.formatsTitle}</h3>
                <div className="formatLinks">
                  {formats.map((format, index) => (
                    <a
                      key={format.id}
                      className={`formatLink ${format.className}`}
                      href="#contact"
                      aria-label={`${format.name} (example)`}
                    >
                      <BrandLogo id={format.id} name={format.name} tag={t.formatTags[index]} />
                    </a>
                  ))}
                </div>
                <p>{t.formatsNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="package" className="section">
          <p className="eyebrow">{t.packageLabel}</p>
          <h2>{t.includedTitle}</h2>
          <p className="lead">{t.includedLead}</p>

          <ul className="components">
            {t.components.map((component) => (
              <li key={component}>{component}</li>
            ))}
          </ul>

          <p className="packageNote">{t.packageNote}</p>
        </section>

        <section className="section showcase">
          <div className="showcaseHeader">
            <p className="eyebrow">{t.presentationLabel}</p>
            <h2>{t.showcaseTitle}</h2>
            <p className="lead">{t.showcaseLead}</p>
          </div>

          <div className="visualGrid">
            <ImageFrame
              src={imagePaths.holding}
              alt="Gretel holding the book"
              label="Gretel holding book image pending"
              aspect="1 / 1"
            />
            <ImageFrame
              src={imagePaths.reading}
              alt="Gretel reading the book"
              label="Gretel reading image pending"
              aspect="1 / 1"
            />
            <ImageFrame
              src={imagePaths.hugging}
              alt="Gretel hugging the book"
              label="Gretel book presentation image pending"
              aspect="1 / 1"
            />
          </div>

          <div className="cardsGrid">
            {t.showcaseCards.map(([title, body]) => (
              <article className="infoCard" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="author" className="section split">
          <div>
            <p className="eyebrow">{t.authorLegacyLabel}</p>
            <h2>{t.authorTitle}</h2>
            <p className="lead">{t.authorLead}</p>

            <div className="textStack">
              {t.authorText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <figure className="dedication">
              <p className="dedicationLabel">{t.dedicationLabel}</p>
              <blockquote>
                {t.dedicationParas.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption>{t.dedicationAttribution}</figcaption>
            </figure>
          </div>

          <div className="panel">
            <h3>{t.honorsTitle}</h3>
            <ul>
              {t.honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section credits">
          <p className="eyebrow">{t.creditsLabel}</p>
          <h2>{t.creditsTitle}</h2>

          <div className="creditPanel">
            {t.credits.map(([label, value]) => (
              <div className="creditRow" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section split contact">
          <div>
            <p className="eyebrow">{t.interestFormLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="lead">{t.contactLead}</p>
          </div>

          <form className="form">
            <label>
              {t.name}
              <input type="text" />
            </label>

            <label>
              {t.email}
              <input type="email" />
            </label>

            <label>
              {t.role}
              <select>
                {t.roles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>

            <label>
              {t.message}
              <textarea />
            </label>

            <button className="button primary" type="button">
              {t.requestInfo}
            </button>
          </form>
        </section>
      </main>

      <footer>
        <strong>LANY Books</strong>
        <span>{t.footer}</span>
      </footer>
    </div>
  )
}
