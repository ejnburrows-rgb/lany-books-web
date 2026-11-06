import { useEffect, useState, type FormEvent } from 'react'
import { copy, type Lang } from './copy'
import { ImageFrame } from './components'
import { ProductCard } from './components/ProductCard'
import { ContactCard } from './components/ContactCard'
import { RetailerCard } from './components/RetailerCard'
import { CrmShowcase } from './components/CrmShowcase'
import { getProducts } from './config/products'
import { getRetailers, type RetailerLink } from './config/retailers'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const imagePaths = {
  cover: '/images/gretel/wb-cover-hd.webp',
  logoOpenBook: '/images/gretel/logo-open-book.png',
}

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
    '#program',
    '#crm',
    '#retail',
    '#kits',
    '#publishing',
    '#schools',
    '#author',
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

      <header className="topbar">
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
          <a className="smallButton dark desktopOnlyCta" href="#contact">
            {t.requestInfo}
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
        <section id="home" className="hero">
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
              <a className="button primary" href="#retail">
                {lang === 'es' ? 'Dónde Comprar' : 'Where to Buy'}
              </a>
              <a className="button secondary" href="#kits">
                {t.exploreMaterials}
              </a>
              <a className="button secondary" href="#crm">
                {lang === 'es' ? 'Ver CRM y Plataforma Digital' : 'Explore CRM & Digital'}
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

          {/* Clean Publisher Hero Stage: Authentic Book Cover + Inside Curriculum Lesson Card (Zero AI Stock Photos) */}
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
                <span>{lang === 'es' ? 'Autora: Leonor Lopetegui · Ilustraciones: Estela de Armas Plasencia' : 'Author: Leonor Lopetegui · Illustrations: Estela de Armas Plasencia'}</span>
              </div>
            </div>

            <div className="heroLessonPreviewCard">
              <div className="heroLessonHeader">
                <span className="heroLessonTag">
                  {lang === 'es' ? 'Vista Interior del Método' : 'Inside the Phonetic Method'}
                </span>
                <strong>{lang === 'es' ? 'Progresión Controlada (24 Lecciones)' : 'Controlled Progression (24 Lessons)'}</strong>
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
                  {lang === 'es' ? '2. Sílabas Directas Controladas' : '2. Controlled Direct Syllables'}
                </span>
                <div className="heroSyllableRow">
                  <span>ma</span>
                  <span>me</span>
                  <span>mi</span>
                  <span>mo</span>
                  <span>mu</span>
                </div>
              </div>

              <div className="heroLessonStep">
                <span className="heroLessonStepLabel">
                  {lang === 'es' ? '3. Palabras y Oraciones Decodificables' : '3. Decodable Words & Sentences'}
                </span>
                <p className="heroSampleWords">mamá · mimo · mapa · Ema · Mimi</p>
                <p className="heroSampleSentence">“Mi mamá me ama.”</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label={t.trustAria}>
          {t.trust.map((item) => (
            <span className="trustItem" key={item}>{item}</span>
          ))}
        </section>

        {/* Expanded Program Mechanics & 4-Pillar Differentiation Section */}
        <section id="program" className="section methodSection">
          <div className="sectionIntro">
            <p className="eyebrow">{t.programLabel}</p>
            <h2>{t.methodTitle}</h2>
            <p className="lead">{t.methodText[0]}</p>
            <p className="methodSecondaryLead">{t.methodText[1]}</p>
            <div className="methodSideCard">
              <img
                src={imagePaths.cover}
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

        {/* Dedicated La Cartilla de Gretel CRM & Digital Platform Presentation */}
        <CrmShowcase
          lang={lang}
          eyebrow={t.crmLabel}
          title={t.crmTitle}
          intro={t.crmLead}
          ctaLabel={t.crmCta}
          secondaryCtaLabel={t.crmSecondaryCta}
          ecosystemBadge={t.crmEcosystemBadge}
        />

        {/* Integrated Retailers: Amazon, Audible, Kindle, and Barnes & Noble */}
        {retailers.length > 0 ? (
          <section id="retail" className="section retailSection">
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

        {/* Transparent Print & Classroom Editions (No Misleading AI Packet Image) */}
        <section id="kits" className="section productSection">
          <div className="buyTop">
            <div className="buyHeader">
              <p className="eyebrow">{t.buyLabel}</p>
              <h2>{t.buyTitle}</h2>
              <p className="lead">{t.buyLead}</p>
            </div>
            <div className="buyCover">
              <ImageFrame
                src={imagePaths.cover}
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

        <section id="package" className="section packageSection">
          <div className="sectionIntro">
            <p className="eyebrow">{t.packageLabel}</p>
            <h2>{t.includedTitle}</h2>
            <p className="lead">{t.includedLead}</p>
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
          <p className="packageNote">{t.packageNote}</p>
        </section>

        {/* LANY Books Publishing House, Digital CRM Platform & Upcoming Books */}
        <section id="publishing" className="section publishingSection">
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

        <section id="schools" className="section schoolsSection">
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

        <section id="author" className="section legacySection">
          <div className="legacyCopy">
            <p className="eyebrow">{t.authorLegacyLabel}</p>
            <h2>{t.authorTitle}</h2>
            <p className="legacyLead">{t.authorLead}</p>
            <div className="legacyText">
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

          <div className="legacySide">
            <div className="legacyGretel" aria-hidden="true">
              <img
                src={imagePaths.cover}
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

        <section id="faq" className="section faqSection">
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

        <section id="contact" className="section contactSection">
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

      <footer>
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
    </div>
  )
}
