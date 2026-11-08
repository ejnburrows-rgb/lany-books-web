import { useEffect, useState, type FormEvent } from 'react'
import { copy, type Lang } from './copy'
import { ImageFrame } from './components'
import { ProductCard } from './components/ProductCard'
import { ContactCard } from './components/ContactCard'
import { RetailerCard } from './components/RetailerCard'
import { CartillaBrochure } from './components/CartillaBrochure'
import { CrmPresentationDeck } from './components/CrmPresentationDeck'
import { ClientShareSession } from './components/ClientShareSession'
import { getProducts } from './config/products'
import { getRetailers, type RetailerLink } from './config/retailers'
import { GretelAssistant } from './components/GretelAssistant'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export const imagePaths = {
  cover: '/images/gretel/wb-cover-hd.webp',
  logoOpenBook: '/images/gretel/logo-open-book.png',
  bundleKit: '/assets/aistudio/colorized/kit-11-piece-authentic.jpg',
  studentBookSpread: '/assets/aistudio/colorized/student-book-pages-colorized.jpg',
  syllabicCharts: '/assets/aistudio/colorized/syllabic-charts-colorized.jpg',
  bilingualHomework: '/assets/aistudio/colorized/homework-rima3-colorized.jpg',
  evaluationsKey: '/assets/aistudio/colorized/evaluations-mm-colorized.jpg',
  heritageCoversPair: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
  heroPoster: '/assets/aistudio/image-gen-3_20261030-070235__9b3e6495.png',
  classroomWelcome: '/assets/aistudio/classroom-welcome-gretel.jpg',
  easelShowcase: '/assets/aistudio/image-gen-6_20261030-090159__c9217af0.png',
  libraryPortrait: '/assets/aistudio/colorized/heritage-covers-pair.jpg',
}

export type KitImagePaths = typeof imagePaths

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string) || ''

function getInitialLang(): Lang {
  try {
    const params = new URLSearchParams(window.location.search)
    if (params.get('lang') === 'es') return 'es'
    if (params.get('lang') === 'en') return 'en'
    const saved = localStorage.getItem('lany-lang')
    return saved === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [activeRetailerModal, setActiveRetailerModal] = useState<RetailerLink | null>(null)

  const t = copy[lang]
  const products = getProducts(lang)
  const classroomProducts = products.filter((product) => product.id !== 'combo-district')
  const districtProduct = products.find((product) => product.id === 'combo-district')
  const retailers = getRetailers(lang)
  const navTargets = [
    '#home',
    '#brochure',
    '#program',
    '#kits',
    '#package',
    '#retail',
    '#schools',
    '#author',
    '#crm',
    '#contact',
  ]
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    setActiveRetailerModal(null)
    try {
      localStorage.setItem('lany-lang', newLang)
    } catch {
      // Language still changes for this visit if storage is unavailable.
    }
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!formEndpoint) {
      setFormStatus('error')
      return
    }

    setFormStatus('sending')
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="site">
      <a className="skipLink" href="#main-content">Skip to content</a>

      <header className="topbar no-print">
        <a className="brand" href="#home" aria-label={t.brandAria}>
          <img
            src={imagePaths.logoOpenBook}
            alt="LANY Books Logo"
            className="brandLogoImg bookLogo"
          />
          <div className="brandText">
            <span className="brandMain">LANY Books</span>
            <span className="brandSub">{lang === 'es' ? 'Editorial y Educación' : 'Publishing House'}</span>
          </div>
        </a>

        <nav id="primaryNav" className={`primaryNav ${menuOpen ? 'open' : ''}`} aria-label={t.navAria}>
          {t.nav.map((item, index) => (
            <a key={item} href={navTargets[index]} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="mobileOnlyNavAction ctaMobileLink" href="#contact" onClick={() => setMenuOpen(false)}>
            {t.requestInfo}
          </a>
        </nav>

        <div className="headerActions">
          <a className="smallButton dark desktopOnlyCta" href="#brochure">
            {lang === 'es' ? 'Ver Folleto de 10 Páginas' : 'View 10-Page Brochure'}
          </a>
          <button
            className="smallButton gold"
            type="button"
            onClick={() => handleSetLang(lang === 'en' ? 'es' : 'en')}
          >
            {t.toggle}
          </button>
          <button
            className={`menuToggle ${menuOpen ? 'open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={t.menuToggleAria}
            aria-controls="primaryNav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero no-print">
          <div className="heroCopy">
            <div className="eyebrowPill">
              <img
                src={imagePaths.logoOpenBook}
                alt=""
                className="eyebrowMiniLogo"
              />
              <p className="eyebrow">{t.eyebrow}</p>
            </div>
            <h1>{t.title}</h1>
            <p className="heroSubtitle">{t.subtitle}</p>
            <p className="heroText">{t.heroText}</p>

            <div className="actions">
              <a className="button primary" href="#brochure">
                {lang === 'es'
                  ? 'Explorar el Folleto Físico (10 Páginas)'
                  : 'Explore 10-Page Physical Brochure'}
              </a>
              <a className="button secondary" href="#kits">
                {t.exploreMaterials}
              </a>
              <a className="button secondary" href="#contact">
                {t.requestInfo}
              </a>
            </div>

            <div className="heroPillsGrid">
              {t.heroPills.map(([pillTitle, pillDesc], idx) => (
                <div className={`heroPillCard accent-${idx + 1}`} key={pillTitle}>
                  <strong>{pillTitle}</strong>
                  <span>{pillDesc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upgraded Physical Product Hero Stage */}
          <div className="heroPublisherStage" aria-label={t.coverAlt}>
            <div className="heroBookShowcaseCard">
              <span className="heroEditionBadge">
                {lang === 'es' ? 'Edición Oficial · 92 Páginas' : 'Official Edition · 92 Pages'}
              </span>
              <ImageFrame
                src={imagePaths.cover}
                alt={t.coverAlt}
                label={t.coverLoading}
                className="heroBookCoverMain"
                aspect="3 / 4"
                priority
              />
              <div className="heroBookMeta">
                <strong>La Cartilla de Gretel — Libro del alumno</strong>
                <span>
                  {lang === 'es'
                    ? 'Autora: Leonor Lopetegui · Ilustraciones: Estela de Armas Plasencia'
                    : 'Author: Leonor Lopetegui · Illustrations: Estela de Armas Plasencia'}
                </span>
              </div>
            </div>

            <div className="heroLessonPreviewCard">
              <div className="heroLessonHeader">
                <span className="heroLessonTag">
                  {lang === 'es' ? 'Programa Físico Completo' : 'Complete Physical Program'}
                </span>
                <strong>
                  {lang === 'es'
                    ? 'Kit de 10 Componentes y Progresión Fonética'
                    : '10-Piece Kit & Phonetic Progression'}
                </strong>
              </div>

              <div className="heroBundlePreview">
                <img
                  src={imagePaths.bundleKit}
                  alt={t.kitAlt}
                  className="heroBundleImg"
                />
              </div>

              <div className="heroLessonStep">
                <span className="heroLessonStepLabel">
                  {lang === 'es' ? '1. Las Cinco Vocales Puras' : '1. The Five Pure Vowels'}
                </span>
                <div className="crm-vowel-pills">
                  <span className="crm-vowel-pill crm-vowel-pill--a">A a</span>
                  <span className="crm-vowel-pill crm-vowel-pill--e">E e</span>
                  <span className="crm-vowel-pill crm-vowel-pill--i">I i</span>
                  <span className="crm-vowel-pill crm-vowel-pill--o">O o</span>
                  <span className="crm-vowel-pill crm-vowel-pill--u">U u</span>
                </div>
              </div>

              <div className="heroLessonStep">
                <span className="heroLessonStepLabel">
                  {lang === 'es'
                    ? '2. Sílabas Directas → Palabras → Oraciones'
                    : '2. Direct Syllables → Words → Sentences'}
                </span>
                <div className="heroSyllableRow">
                  <span>ma</span>
                  <span>me</span>
                  <span>mi</span>
                  <span>mo</span>
                  <span>mu</span>
                </div>
                <p className="heroSampleSentence">“Mi mamá me ama.”</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trustStrip no-print" aria-label={t.trustAria}>
          {t.trust.map((item) => (
            <span className="trustItem" key={item}>{item}</span>
          ))}
        </section>

        {/* Redesigned 10-Page Physical-Product Marketing Document */}
        <CartillaBrochure lang={lang} />

        {/* Expanded Program Mechanics & 4-Pillar Differentiation Section */}
        <section id="program" className="section methodSection no-print">
          <div className="sectionIntro">
            <p className="eyebrow">{t.programLabel}</p>
            <h2>{t.methodTitle}</h2>
            <p className="lead">{t.methodText[0]}</p>
            <p className="methodSecondaryLead">{t.methodText[1]}</p>
            <div className="methodSideCard">
              <img
                src={imagePaths.classroomWelcome}
                alt={t.coverAlt}
                className="methodSideCover"
                loading="lazy"
              />
              <div>
                <strong>{lang === 'es' ? 'Secuencia Fonética 100% Controlada' : '100% Controlled Phonetic Sequence'}</strong>
                <p>{t.methodText[2]}</p>
              </div>
            </div>
          </div>

          <div className="methodFlow">
            {t.methodSteps.map(([title, description], index) => (
              <article className={`methodStep stepColor-${(index % 4) + 1}`} key={title}>
                <span className="methodNumber">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="programDiffBlock">
            <div className="programDiffHeader">
              <p className="eyebrow">{t.diffLabel}</p>
              <h3>{t.diffTitle}</h3>
              <p className="lead">{t.diffLead}</p>
            </div>
            <div className="programDiffGrid">
              {t.diffPillars.map(([pillarTitle, pillarDesc], idx) => (
                <article className={`programDiffCard diffTone-${idx + 1}`} key={pillarTitle}>
                  <span className="programDiffBadge">0{idx + 1}</span>
                  <h4>{pillarTitle}</h4>
                  <p>{pillarDesc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Print & Classroom Editions */}
        <section id="kits" className="section productSection no-print">
          <div className="buyTop">
            <div className="buyHeader">
              <p className="eyebrow">{t.buyLabel}</p>
              <h2>{t.buyTitle}</h2>
              <p className="lead">{t.buyLead}</p>
            </div>
            <div className="buyCover">
              <ImageFrame
                src={imagePaths.easelShowcase}
                alt={t.coverAlt}
                label={t.coverLoading}
                aspect="3 / 4"
              />
            </div>
          </div>

          <div className="routesGrid">
            {classroomProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={lang}
                highlighted={product.id === 'combo-classroom'}
              />
            ))}
          </div>
        </section>

        <section id="package" className="section packageSection no-print">
          <div className="packageSplitHeader">
            <div className="sectionIntro">
              <p className="eyebrow">{t.packageLabel}</p>
              <h2>{t.includedTitle}</h2>
              <p className="lead">{t.includedLead}</p>
            </div>
            <figure className="packageBundleShowcase">
              <img
                src={imagePaths.bundleKit}
                alt={t.kitAlt}
                className="kitImage"
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Paquete físico completo de 10 componentes con rotafolio de 17" × 22", Libro del Alumno de 92 páginas y hojas reproducibles en Blanco y Negro.'
                  : 'Complete 10-piece physical classroom package with 17" × 22" easel flipchart, 92-page Student Book, and Black & White reproducible sheets.'}
              </figcaption>
            </figure>
          </div>

          <div className="packageGroups">
            {t.packageGroups.map(([group, items], idx) => (
              <section className={`packageGroup groupAccent-${idx + 1}`} key={group}>
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="packageColorizedStrip" data-testid="package-colorized-strip">
            <figure className="packageColorizedItem">
              <img
                src={imagePaths.heritageCoversPair}
                alt={
                  lang === 'es'
                    ? 'Portadas a color: Guía del Maestro blanca clásica y Libro del Alumno azul rey de 92 páginas'
                    : 'Full-color covers: Classic white Teacher’s Guide cover and 92-page royal-blue Student Book'
                }
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Portadas a Color: Guía Blanca y Libro del Alumno (92 págs.)'
                  : 'Full-Color Covers: Classic White Guide & 92-Page Student Book'}
              </figcaption>
            </figure>
            <figure className="packageColorizedItem">
              <img
                src={imagePaths.studentBookSpread}
                alt={
                  lang === 'es'
                    ? 'Páginas interiores físicas en Blanco y Negro del Libro del Alumno (Vocal E e y asociación de vocales)'
                    : 'Authentic Black & White physical interior pages of the 92-page Student Book (Vowel E e grid and vowel matching)'
                }
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Libro del Alumno (Páginas en B/N): Cuadrícula E e y Asociación'
                  : 'Student Book (B&W Pages): Vowel E e Grid & Line Matching'}
              </figcaption>
            </figure>
            <figure className="packageColorizedItem">
              <img
                src={imagePaths.syllabicCharts}
                alt={
                  lang === 'es'
                    ? 'Tableros de vocales y sílabas reproducibles en Blanco y Negro (a, e, i, o, u / mamá, amo, Mumi)'
                    : 'Authentic Black & White reproducible vowel and syllabic blackline master charts (a, e, i, o, u / mamá, amo, Mumi)'
                }
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Originales Reproducibles (B/N): Tableros de Vocales y Sílabas'
                  : 'Reproducible Blackline Masters (B&W): Vowel & Syllabic Charts'}
              </figcaption>
            </figure>
            <figure className="packageColorizedItem">
              <img
                src={imagePaths.bilingualHomework}
                alt={
                  lang === 'es'
                    ? 'Tarea reproducible bilingüe en Blanco y Negro P p — Mi papá — Rima 3 y CD de audio'
                    : 'Authentic Black & White bilingual reproducible homework P p — Mi papá — Rima 3 and Audio CD'
                }
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Tarea Bilingüe Reproducible en B/N (P p · Mi papá · Rima 3) + CD'
                  : 'B&W Bilingual Reproducible Homework (P p · Mi papá · Rima 3) + CD'}
              </figcaption>
            </figure>
            <figure className="packageColorizedItem">
              <img
                src={imagePaths.evaluationsKey}
                alt={
                  lang === 'es'
                    ? 'Evaluación reproducible en Blanco y Negro M m y clave del maestro impresa en Blanco y Negro'
                    : 'Authentic Black & White reproducible Evaluación M m and B&W Teacher Answer Key'
                }
                loading="lazy"
              />
              <figcaption>
                {lang === 'es'
                  ? 'Evaluación Reproducible y Clave del Maestro (Impresas en B/N)'
                  : 'Reproducible Evaluation (M m) & Teacher Key (Printed in B&W)'}
              </figcaption>
            </figure>
          </div>

          <p className="packageNote">{t.packageNote}</p>
        </section>

        {/* Integrated Retailers: Amazon, Audible, Kindle, and Barnes & Noble */}
        {retailers.length > 0 ? (
          <section id="retail" className="section retailSection no-print">
            <div className="sectionIntro">
              <p className="eyebrow">{t.retailLabel}</p>
              <h2>{t.retailTitle}</h2>
              <p className="lead">{t.retailLead}</p>
            </div>

            <div className="retailerGrid">
              {retailers.map((retailer) => (
                <RetailerCard
                  key={retailer.id}
                  retailer={retailer}
                  lang={lang}
                  onComingSoon={(selected) => setActiveRetailerModal(selected)}
                />
              ))}
            </div>

            {activeRetailerModal ? (
              <div
                className="retailerComingSoonBanner"
                role="dialog"
                aria-labelledby="retailer-coming-soon-title"
                data-testid="retailer-coming-soon-dialog"
              >
                <div className="retailerComingSoonContent">
                  <span className="retailerComingSoonBadge">{t.comingSoonBadge}</span>
                  <h3 id="retailer-coming-soon-title">
                    {activeRetailerModal.name} — {lang === 'es' ? 'Próximamente' : 'Coming Soon'}
                  </h3>
                  <p>{activeRetailerModal.comingSoonNote}</p>
                </div>
                <div className="retailerComingSoonActions">
                  <a
                    href="#contact"
                    className="button primary"
                    onClick={() => setActiveRetailerModal(null)}
                  >
                    {t.comingSoonAction}
                  </a>
                  <button
                    type="button"
                    className="button secondary"
                    onClick={() => setActiveRetailerModal(null)}
                  >
                    {t.comingSoonClose}
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {/* LANY Books Publishing House & Ecosystem */}
        <section id="publishing" className="section publishingSection no-print">
          <div className="publishingHeader">
            <div>
              <p className="eyebrow">{t.publishingLabel}</p>
              <h2>{t.publishingTitle}</h2>
              <p className="lead">{t.publishingLead}</p>
            </div>
            <div className="publishingLogoShowcase">
              <img
                src={imagePaths.logoOpenBook}
                alt="LANY Books Official Logo"
                className="pubLogoCard selectedLogo"
              />
            </div>
          </div>

          <div className="publishingGrid">
            {t.publishingCards.map(([title, subtitle, description], index) => (
              <article className={`publishingCard pubTone-${index + 1}`} key={title}>
                <span className="pubCardNumber">0{index + 1}</span>
                <h3>{title}</h3>
                <p className="pubCardSub">{subtitle}</p>
                <p className="pubCardDesc">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schools" className="section schoolsSection no-print">
          <div className="schoolsCard">
            <div className="schoolsIntro">
              <p className="eyebrow">{t.schoolsLabel}</p>
              <h2>{t.schoolsTitle}</h2>
              <p className="lead">{t.schoolsLead}</p>
              {districtProduct ? (
                <div className="schoolInquirySummary">
                  <strong>{districtProduct.name}</strong>
                  <span>{districtProduct.description}</span>
                </div>
              ) : null}
              <div className="actions">
                <a className="button gold" href="#contact">{t.schoolsCta}</a>
              </div>
              <p className="schoolsNote">{t.schoolsNote}</p>
            </div>
            <div className="schoolsPanel">
              <ul className="schoolsList">
                {t.schoolsPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="author" className="section legacySection no-print">
          <div className="legacyCopy">
            <p className="eyebrow">{t.authorLegacyLabel}</p>
            <h2>{t.authorTitle}</h2>
            <p className="legacyLead">{t.authorLead}</p>
            <div className="legacyText">
              {t.authorText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="legacySide">
            <div className="legacyGretel" aria-hidden="true">
              <img
                src={imagePaths.libraryPortrait}
                alt=""
                loading="lazy"
                className="legacyBookCover"
              />
            </div>
            <div className="legacyFacts">
              <h3>{t.honorsTitle}</h3>
              {t.honors.map((honor) => (
                <p key={honor}>{honor}</p>
              ))}
            </div>
          </div>

          <div className="creditsBlock">
            <p className="eyebrow">{t.creditsLabel}</p>
            <h3>{t.creditsTitle}</h3>
            <div className="creditsGrid">
              {t.credits.map(([role, name]) => (
                <div className="creditItem" key={role}>
                  <span>{role}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Separate 9-Slide LANY Books CRM & Sales-Management Companion Presentation */}
        <CrmPresentationDeck lang={lang} />

        <section id="faq" className="section faqSection no-print">
          <p className="eyebrow">{t.faqLabel}</p>
          <h2>{t.faqTitle}</h2>
          <div className="faqList">
            {t.faqItems.map((item, index) => (
              <details className="faqItem" key={index}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Client Email, WhatsApp & SMS Sharing and Direct Inquiry Session */}
        <ClientShareSession
          lang={lang}
          contactEmail={contactEmail}
          formEndpoint={formEndpoint}
          kitAssets={imagePaths}
        />

        <section id="contact" className="section contactSection no-print">
          <div className="contactIntro">
            <p className="eyebrow">{t.interestFormLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="lead">{t.contactLead}</p>
            {contactEmail ? <ContactCard email={contactEmail} lang={lang} /> : null}
          </div>

          {formEndpoint ? (
            <form className="form" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />
              <label htmlFor="contact-name">
                {t.name}
                <input id="contact-name" type="text" name="name" required />
              </label>
              <label htmlFor="contact-email">
                {t.email}
                <input id="contact-email" type="email" name="email" required />
              </label>
              <label htmlFor="contact-organization">
                {t.organization}
                <input id="contact-organization" type="text" name="organization" />
              </label>
              <div className="formSplit">
                <label htmlFor="contact-grade">
                  {t.grade}
                  <input id="contact-grade" type="text" name="grade" />
                </label>
                <label htmlFor="contact-students">
                  {t.students}
                  <input id="contact-students" type="number" min="1" name="students" />
                </label>
              </div>
              <label htmlFor="contact-timeframe">
                {t.timeframe}
                <input id="contact-timeframe" type="text" name="timeframe" />
              </label>
              <label htmlFor="contact-role">
                {t.role}
                <select id="contact-role" name="role">
                  {t.roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <label htmlFor="contact-message">
                {t.message}
                <textarea id="contact-message" name="message" />
              </label>

              {formStatus === 'success' ? (
                <p className="formStatus success" role="status">{t.formSuccess}</p>
              ) : null}
              {formStatus === 'error' ? (
                <p className="formStatus error" role="alert">{t.formError}</p>
              ) : null}

              <button className="button primary" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? t.formSending : t.requestInfo}
              </button>
            </form>
          ) : (
            <div className="contactPending" role="status">
              <p>{t.contactPending}</p>
            </div>
          )}
        </section>
      </main>

      <footer className="no-print">
        <div className="footerBrand">
          <div className="footerLogoRow">
            <img
              src={imagePaths.logoOpenBook}
              alt="LANY Books"
              className="footerLogoImg"
            />
            <strong>LANY Books</strong>
          </div>
          <span>{t.footer}</span>
        </div>
        <a href="#home">{lang === 'es' ? 'Volver arriba ↑' : 'Back to top ↑'}</a>
      </footer>

      <GretelAssistant initialLang={lang} />
    </div>
  )
}
