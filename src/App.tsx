import { useState } from 'react'

type Lang = 'en' | 'es'

const c = {
  en: {
    nav: ['Home', 'Program', 'Package', 'Book', 'Contact'],
    toggle: 'ES',
    languageLabel: 'Language',
    eyebrow: 'Spanish literacy for early readers',
    title: 'A warm phonetic reading and writing program for young Spanish learners.',
    intro: [
      'La Cartilla de Gretel is an easy to follow program for students in Kindergarten, First or Second Grade. This method emphasizes the mechanics of reading and writing in Spanish. The program uses sound associations to facilitate the students recollection of vowel and consonant sounds.',
      'La Cartilla de Gretel is a completely phonetic approach to reading and writing which takes the student from the simple to the complex. The student first learns letter sounds, then syllable sounds, then forms words. Certain sight words are then presented so the student can form sentences and ultimately paragraphs and poems.',
      'This is a completely controlled method whereby no letters or phonetic sounds are used until they are fully introduced.'
    ],
    componentsTitle: 'What the package includes',
    componentsLead: 'A classroom-ready system for presentation, student practice, teacher support, homework, evaluation, and audio reinforcement.',
    components: ['17" × 22" flipchart and easel','Reproducible syllabic and vowel charts','Answer key to the syllabic charts','92-page Student Book','Reproducible homework pages','Audio CD of all poems included in the flipchart','Reproducible evaluations','Evaluation answer key','Teacher’s Guide'],
    note: 'The flipchart comes in its own easel, and all components come neatly organized in corresponding folders and a durable canvas carrying bag.',
    cards: [
      ['Student Book','The 92-page student book supports reading and writing practice that reinforces what was learned from the flipchart.'],
      ['Flipchart','The flipchart introduces vowel and consonant sounds through visual association, then builds syllables, words, sentences, and poems.'],
      ['Reproducible Homework','Homework pages give students practice with the syllables from each lesson and support reading at home.'],
      ['Evaluations','Reproducible evaluations help test recognition of letters, syllables, and words together with comprehension skills.'],
      ['Reproducible Syllabic Charts','Charts support vowel practice and syllabic combinations, with answer-key support for the teacher.']
    ],
    credits: [['Author','Leonor Lopetegui'],['Illustrator','Estela de Armas Plasencia'],['Contributors','Silvia Diez and Aída Fernández'],['Digital adaptation','Emilio José Novo'],['Imprint','Lanny Books']],
    formNote: 'This form is front-end only. It does not send or store information until a backend or form service is connected.'
  },
  es: {
    nav: ['Inicio', 'Programa', 'Paquete', 'Libro', 'Contacto'],
    toggle: 'EN',
    languageLabel: 'Idioma',
    eyebrow: 'Lectoescritura en español para primeros lectores',
    title: 'Un programa cálido y fonético para aprender a leer y escribir en español.',
    intro: [
      'La Cartilla de Gretel es un programa fácil de seguir para estudiantes de Kindergarten, Primero o Segundo Grado. Este método enfatiza la mecánica de la lectura y la escritura en español. El programa utiliza asociaciones de sonidos para facilitar que los estudiantes recuerden los sonidos vocálicos y consonánticos.',
      'La Cartilla de Gretel es un enfoque completamente fonético de lectura y escritura que lleva al estudiante de lo simple a lo complejo. El estudiante aprende primero los sonidos de las letras, luego los sonidos silábicos y después forma palabras. Más adelante se presentan palabras de uso frecuente para que el estudiante pueda formar oraciones y finalmente párrafos y poemas.',
      'Es un método completamente controlado en el que no se usan letras ni sonidos fonéticos hasta que han sido introducidos por completo.'
    ],
    componentsTitle: 'Qué incluye el paquete',
    componentsLead: 'Un sistema listo para el aula con presentación, práctica del estudiante, apoyo al maestro, tareas, evaluación y refuerzo auditivo.',
    components: ['Rotafolio de 17" × 22" con caballete','Carteles vocálicos y silábicos reproducibles','Clave de respuestas para los carteles silábicos','Libro del alumno de 92 páginas','Tareas reproducibles para la casa','CD de audio con todos los poemas incluidos en el rotafolio','Evaluaciones reproducibles','Clave de respuestas de las evaluaciones','Guía del maestro'],
    note: 'El rotafolio viene en su propio caballete, y todos los componentes vienen organizados en sus carpetas correspondientes dentro de una bolsa de lona duradera.',
    cards: [
      ['Libro del alumno','El libro del alumno de 92 páginas apoya la práctica de lectura y escritura para reforzar lo aprendido con el rotafolio.'],
      ['Rotafolio','El rotafolio introduce sonidos vocálicos y consonánticos mediante asociación visual, y luego forma sílabas, palabras, oraciones y poemas.'],
      ['Tareas reproducibles','Las tareas permiten practicar en casa las sílabas de cada lección y refuerzan la lectura familiar.'],
      ['Evaluaciones','Las evaluaciones reproducibles ayudan a evaluar letras, sílabas y palabras junto con habilidades de comprensión.'],
      ['Carteles silábicos reproducibles','Los carteles apoyan la práctica vocálica y las combinaciones silábicas, con clave de respuestas para el maestro.']
    ],
    credits: [['Autora','Leonor Lopetegui'],['Ilustradora','Estela de Armas Plasencia'],['Colaboradoras','Silvia Diez and Aída Fernández'],['Adaptación digital','Emilio José Novo'],['Sello','Lanny Books']],
    formNote: 'Este formulario es solo visual. No envía ni guarda información hasta que se conecte un backend o servicio de formularios.'
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const copy = c[lang]
  return (
    <div className="page" data-language={lang}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <div className="brand">Lanny Books</div>
        <nav className="nav" aria-label="Main navigation">
          {copy.nav.map((item, i) => <a key={item} href={['#home','#program','#package','#book','#contact'][i]}>{item}</a>)}
        </nav>
        <div className="language-switch" data-testid="language-toggle-wrapper">
          <span>{copy.languageLabel}</span>
          <button id="language-toggle" data-testid="language-toggle" className="language-toggle" aria-label="Toggle language between English and Spanish" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>EN / ES</button>
        </div>
      </header>
      <main id="main">
        <section id="home" className="section hero">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="lead">La Cartilla de Gretel · {lang === 'en' ? 'Author' : 'Autora'}: Leonor Lopetegui</p>
            <div className="hero-actions"><a className="btn primary" href="#program">{lang === 'en' ? 'Explore the Program' : 'Explorar el programa'}</a><a className="btn secondary" href="#contact">{lang === 'en' ? 'Request Information' : 'Solicitar información'}</a></div>
          </div>
          <div className="hero-art"><div className="book-card"><img src="/book-samples/cover-stand-in.jpg" alt="La Cartilla de Gretel cover" /></div><img className="floating-gretel" src="/gretel/happy.webp" alt="Gretel character" /></div>
        </section>
        <section id="program" className="section"><p className="eyebrow">{lang === 'en' ? 'Introduction' : 'Introducción'}</p><h2>{lang === 'en' ? 'A controlled phonetic path from sounds to reading.' : 'Un camino fonético controlado desde los sonidos hasta la lectura.'}</h2><div className="grid three">{copy.intro.map((p) => <article className="card" key={p}><p>{p}</p></article>)}</div></section>
        <section id="package" className="section"><p className="eyebrow">{lang === 'en' ? 'Complete package' : 'Paquete completo'}</p><h2>{copy.componentsTitle}</h2><p className="lead">{copy.componentsLead}</p><ul className="components">{copy.components.map((x) => <li key={x}>{x}</li>)}</ul><p className="note">{copy.note}</p><div className="showcase">{copy.cards.map(([title, text]) => <article className="visual-card" key={title}><div className="visual-body"><p className="lane">{lang === 'en' ? 'Package component' : 'Componente del paquete'}</p><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
        <section id="book" className="section product"><img src="/book-samples/cover-stand-in.jpg" alt="La Cartilla de Gretel book" /><div><p className="eyebrow">{lang === 'en' ? 'Featured book' : 'Libro destacado'}</p><h2>La Cartilla de Gretel · Libro del alumno</h2><p className="lead">{lang === 'en' ? 'The student book is kept separate from teacher materials, classroom flipchart resources, homework, charts, and evaluations.' : 'El libro del alumno se mantiene separado de los materiales del maestro, el rotafolio, las tareas, los carteles y las evaluaciones.'}</p><div className="credit-list">{copy.credits.map(([label, value]) => <div className="credit-row" key={label}><span>{label}</span><span>{value}</span></div>)}</div></div></section>
        <section id="contact" className="section two"><div><p className="eyebrow">{lang === 'en' ? 'Interest' : 'Interés'}</p><h2>{lang === 'en' ? 'Request information' : 'Solicitar información'}</h2><p className="lead">{copy.formNote}</p></div><form className="form"><label>{lang === 'en' ? 'Name' : 'Nombre'}<input /></label><label>Email<input type="email" /></label><label>{lang === 'en' ? 'Interested as' : 'Interés como'}<select><option>{lang === 'en' ? 'Parent' : 'Padre o madre'}</option><option>{lang === 'en' ? 'Teacher' : 'Maestro'}</option><option>{lang === 'en' ? 'School' : 'Escuela'}</option></select></label><label>{lang === 'en' ? 'Message' : 'Mensaje'}<textarea /></label><button className="btn primary" type="button">{lang === 'en' ? 'Request Information' : 'Solicitar información'}</button></form></section>
      </main>
      <footer className="footer"><strong>Lanny Books</strong><span>La Cartilla de Gretel · Emilio José Novo</span></footer>
    </div>
  )
}
