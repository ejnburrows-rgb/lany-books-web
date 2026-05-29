import { useState } from 'react'

type Lang = 'en' | 'es'

const c = {
  en: {
    nav: ['Home', 'Program', 'Package', 'Author', 'Book', 'Contact'],
    languageLabel: 'Language',
    eyebrow: 'Lanny Books presents',
    title: 'La Cartilla de Gretel',
    subtitle: 'A premium Spanish reading and writing program for Kindergarten, First Grade, and Second Grade.',
    intro: [
      'La Cartilla de Gretel is an easy-to-follow program that emphasizes the mechanics of reading and writing in Spanish. It uses sound associations to help students remember vowel and consonant sounds.',
      'The method moves from the simple to the complex: letter sounds, syllable sounds, words, sentences, paragraphs, and poems.',
      'It is a controlled phonetic method. No letters or sounds are used until they have been fully introduced.'
    ],
    componentsTitle: 'What the complete package includes',
    componentsLead: 'A classroom-ready system for teachers, parents, and early Spanish readers.',
    components: ['17 inch by 22 inch flipchart and easel','Reproducible syllabic and vowel charts','Answer key to the syllabic charts','92-page Student Book','Reproducible homework pages','Audio CD of all poems included in the flipchart','Reproducible evaluations','Evaluation answer key','Teacher’s Guide'],
    note: 'The flipchart comes in its own easel, and all components come neatly organized in corresponding folders and a durable canvas carrying bag.',
    cards: [
      ['Student Book','A 92-page reading and writing book that reinforces the program sequence.'],
      ['Flipchart','A classroom presentation tool for introducing sounds, syllables, words, sentences, and poems.'],
      ['Homework','Reproducible home practice pages tied to the lessons.'],
      ['Evaluations','Reproducible assessments with answer-key support.'],
      ['Syllabic Charts','Practice charts for vowel work and syllable combinations.']
    ],
    authorTitle: 'About Leonor Lopetegui',
    authorLead: 'The educator behind La Cartilla de Gretel.',
    authorParagraphs: [
      'Leonor Lopetegui dedicated almost fifty years to teaching Spanish with passion and devotion in Miami-Dade County Public Schools.',
      'She led the Division of Bilingual Education and World Languages for Miami-Dade County Public Schools for more than ten years, helping strengthen Spanish learning for children and adults.',
      'Her work includes educational books for children and presentations at major national and international education events, including the National Association for Bilingual Education and the Florida Association for Bilingual Education.'
    ],
    honors: ['Premio Cervantes from Nova Southeastern University for making a difference in Hispanic education','Teacher of the Year at James H. Bright Elementary School during the 2001-2002 school year','Bilingual Educator of the Year from the Florida Association for Bilingual Education','The City of Sweetwater proclaimed June 6, 2014 as Mrs. Leonor Lopetegui Day'],
    credits: [['Author','Leonor Lopetegui'],['Illustrator','Estela de Armas Plasencia'],['Contributors','Silvia Diez and Aída Fernández'],['Digital adaptation','Emilio José Novo'],['Imprint','Lanny Books']],
    formNote: 'This form is front-end only. It does not send or store information until a form service is connected.'
  },
  es: {
    nav: ['Inicio', 'Programa', 'Paquete', 'Autora', 'Libro', 'Contacto'],
    languageLabel: 'Idioma',
    eyebrow: 'Lanny Books presenta',
    title: 'La Cartilla de Gretel',
    subtitle: 'Un programa premium de lectura y escritura en español para Kindergarten, Primer Grado y Segundo Grado.',
    intro: [
      'La Cartilla de Gretel es un programa fácil de seguir que enfatiza la mecánica de la lectura y la escritura en español. Utiliza asociaciones de sonidos para ayudar al estudiante a recordar sonidos vocálicos y consonánticos.',
      'El método avanza de lo simple a lo complejo: sonidos de letras, sonidos silábicos, palabras, oraciones, párrafos y poemas.',
      'Es un método fonético controlado. No se usan letras ni sonidos hasta que han sido introducidos por completo.'
    ],
    componentsTitle: 'Qué incluye el paquete completo',
    componentsLead: 'Un sistema listo para el aula, para maestros, padres y primeros lectores en español.',
    components: ['Rotafolio de 17 pulgadas por 22 pulgadas con caballete','Carteles vocálicos y silábicos reproducibles','Clave de respuestas para los carteles silábicos','Libro del alumno de 92 páginas','Tareas reproducibles para la casa','CD de audio con todos los poemas incluidos en el rotafolio','Evaluaciones reproducibles','Clave de respuestas de las evaluaciones','Guía del maestro'],
    note: 'El rotafolio viene en su propio caballete, y todos los componentes vienen organizados en sus carpetas correspondientes dentro de una bolsa de lona duradera.',
    cards: [
      ['Libro del alumno','Libro de 92 páginas de lectura y escritura que refuerza la secuencia del programa.'],
      ['Rotafolio','Herramienta de presentación para introducir sonidos, sílabas, palabras, oraciones y poemas.'],
      ['Tareas','Páginas reproducibles de práctica en casa conectadas con las lecciones.'],
      ['Evaluaciones','Evaluaciones reproducibles con apoyo de claves de respuestas.'],
      ['Carteles silábicos','Carteles de práctica para vocales y combinaciones silábicas.']
    ],
    authorTitle: 'Acerca de Leonor Lopetegui',
    authorLead: 'La educadora detrás de La Cartilla de Gretel.',
    authorParagraphs: [
      'Leonor Lopetegui dedicó casi cincuenta años a la enseñanza del español con pasión y devoción en las Escuelas Públicas del Condado de Miami-Dade.',
      'Durante más de diez años lideró la División de Educación Bilingüe e Idiomas del Mundo para las Escuelas Públicas del Condado de Miami-Dade, ayudando a fortalecer el aprendizaje del español entre niños y adultos.',
      'Su trabajo incluye libros educativos para niños y presentaciones en eventos educativos nacionales e internacionales, incluyendo la Asociación Nacional de Educación Bilingüe y la Asociación Bilingüe de la Florida.'
    ],
    honors: ['Premio Cervantes de Nova Southeastern University por hacer una diferencia en la educación hispana','Maestra del Año en la Escuela Primaria James H. Bright durante el año escolar 2001-2002','Educadora Bilingüe del Año por la Asociación Bilingüe de la Florida','La Ciudad de Sweetwater proclamó el 6 de junio de 2014 como el Día de la Sra. Leonor Lopetegui'],
    credits: [['Autora','Leonor Lopetegui'],['Ilustradora','Estela de Armas Plasencia'],['Colaboradoras','Silvia Diez y Aída Fernández'],['Adaptación digital','Emilio José Novo'],['Sello','Lanny Books']],
    formNote: 'Este formulario es solo visual. No envía ni guarda información hasta que se conecte un servicio de formularios.'
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const copy = c[lang]
  return (
    <div className="site-shell" data-language={lang}>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="topbar">
        <a className="brand-lockup" href="#home"><span>Lanny</span><span>Books</span></a>
        <nav className="nav" aria-label="Main navigation">{copy.nav.map((item, i) => <a key={item} href={['#home','#program','#package','#author','#book','#contact'][i]}>{item}</a>)}</nav>
        <button id="language-toggle" data-testid="language-toggle" className="language-toggle" aria-label="Toggle language between English and Spanish" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>EN / ES</button>
      </header>
      <main id="main">
        <section id="home" className="hero-section"><div className="hero-copy"><p className="kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="hero-lead">{copy.subtitle}</p><div className="hero-actions"><a className="button primary" href="#program">{lang === 'en' ? 'View the Program' : 'Ver el programa'}</a><a className="button secondary" href="#contact">{lang === 'en' ? 'Request Information' : 'Solicitar información'}</a></div></div><div className="hero-visual"><div className="cover-frame"><img src="/book-samples/cover-stand-in.jpg" alt="La Cartilla de Gretel cover" /></div><img className="gretel-figure" src="/gretel/happy.webp" alt="Gretel character" /></div></section>
        <section id="program" className="section split-section"><div><p className="kicker">{lang === 'en' ? 'Program' : 'Programa'}</p><h2>{lang === 'en' ? 'A controlled phonetic path into Spanish literacy.' : 'Un camino fonético controlado hacia la lectoescritura.'}</h2></div><div className="text-stack">{copy.intro.map((p) => <p key={p}>{p}</p>)}</div></section>
        <section id="package" className="section package-section"><p className="kicker">{lang === 'en' ? 'Package' : 'Paquete'}</p><h2>{copy.componentsTitle}</h2><p className="section-lead">{copy.componentsLead}</p><ul className="component-list">{copy.components.map((x) => <li key={x}>{x}</li>)}</ul><p className="package-note">{copy.note}</p><div className="cards-grid">{copy.cards.map(([title,text]) => <article className="premium-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section id="author" className="section author-section"><div className="author-card"><p className="kicker">{lang === 'en' ? 'Author profile' : 'Perfil de la autora'}</p><h2>{copy.authorTitle}</h2><p className="section-lead">{copy.authorLead}</p><div className="text-stack">{copy.authorParagraphs.map((p) => <p key={p}>{p}</p>)}</div></div><div className="honors-panel"><h3>{lang === 'en' ? 'Recognitions and legacy' : 'Reconocimientos y legado'}</h3><ul>{copy.honors.map((h) => <li key={h}>{h}</li>)}</ul></div></section>
        <section id="book" className="section split-section"><div className="cover-frame"><img src="/book-samples/cover-stand-in.jpg" alt="La Cartilla de Gretel book" /></div><div><p className="kicker">{lang === 'en' ? 'Book and credits' : 'Libro y créditos'}</p><h2>La Cartilla de Gretel · Libro del alumno</h2><div className="credit-panel">{copy.credits.map(([label,value]) => <div className="credit-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>
        <section id="contact" className="section contact-section"><div><p className="kicker">Lanny Books</p><h2>{lang === 'en' ? 'Request information' : 'Solicitar información'}</h2><p className="section-lead">{copy.formNote}</p></div><form className="interest-form"><label>{lang === 'en' ? 'Name' : 'Nombre'}<input /></label><label>Email<input type="email" /></label><label>{lang === 'en' ? 'Interested as' : 'Interés como'}<select><option>{lang === 'en' ? 'Parent' : 'Padre o madre'}</option><option>{lang === 'en' ? 'Teacher' : 'Maestro'}</option><option>{lang === 'en' ? 'School' : 'Escuela'}</option></select></label><label>{lang === 'en' ? 'Message' : 'Mensaje'}<textarea /></label><button className="button primary" type="button">{lang === 'en' ? 'Request Information' : 'Solicitar información'}</button></form></section>
      </main>
      <footer className="footer"><strong>Lanny Books</strong><span>La Cartilla de Gretel · Emilio José Novo</span></footer>
    </div>
  )
}
