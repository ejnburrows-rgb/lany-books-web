import { useState, type FormEvent } from 'react'
import { copy, type Lang } from './copy'
import { BrandLogo, ImageFrame } from './components'
import { ProductCard } from './components/ProductCard'
import { ContactCard } from './components/ContactCard'
import { products } from './config/products'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const imagePaths = {
  kit: '/images/gretel/cartilla-bundle.webp',
  cover: '/images/gretel/wb-cover-hd.webp'
}

const flipchartPages = [
  '/images/gretel/pose-7.webp'
]

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string) || 'hello@lanybooks.com'
const contactPhone = (import.meta.env.VITE_CONTACT_PHONE as string) || '(555) 123-4567'
const bookingHref = (import.meta.env.VITE_BOOKING_HREF as string) || undefined

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const t = copy[lang]
  const navTargets = ['#home', '#program', '#materials', '#package', '#schools', '#author', '#contact']

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

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
        body: new FormData(form)
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
      <header className="topbar">
        <a className="brand" href="#home" aria-label={t.brandAria}>
          <span>LANY</span>
          <span>Books</span>
        </a>

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

        <nav id="primaryNav" className={`primaryNav ${menuOpen ? 'open' : ''}`} aria-label={t.navAria}>
          {t.nav.map((item, index) => (
            <a key={item} href={navTargets[index]} onClick={() => setMenuOpen(false)}>
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
              src={imagePaths.cover}
              alt={t.coverAlt}
              label={t.coverLoading}
              className="heroImage"
              aspect="3 / 4"
            />
          </div>
        </section>

        <section className="trustStrip" aria-label={t.trustAria}>
          {t.trust.map((item) => (
            <span className="trustItem" key={item}>
              {item}
            </span>
          ))}
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

        <section id="materials" className="section showcase">
          <div className="showcaseHeader">
            <p className="eyebrow">{t.presentationLabel}</p>
            <h2>{t.showcaseTitle}</h2>
            <p className="lead">{t.showcaseLead}</p>
          </div>

          <div className="kitShowcase">
            <ImageFrame
              src={imagePaths.kit}
              alt={t.kitAlt}
              label={t.kitLoading}
              className="kitImage"
            />
          </div>

          <div className="flipchartBlock">
            <p className="flipchartLabel">{t.flipchartLabel}</p>
            <div className="flipchartGrid">
              {flipchartPages.map((src, index) => (
                <figure className="flipchartCard" key={src}>
                  <ImageFrame
                    src={src}
                    alt={t.flipchartCaptions[index]}
                    label={t.flipchartLoading}
                    className="flipchartImg"
                    aspect="3 / 4"
                  />
                  <figcaption>{t.flipchartCaptions[index]}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="galleryGrid textOnly">
            {t.gallery.map(([title, body]) => (
              <figure className="galleryCard" key={title}>
                <figcaption>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="buy" className="section productSection">
          <div className="buyTop">
            <div className="buyHeader">
              <p className="eyebrow">{t.buyLabel}</p>
              <h2>Choose your package</h2>
              <p className="lead">
                All orders go through our contact form for now. Stripe activation is a future step.
              </p>
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
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} highlighted={index === 3} />
            ))}
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

        <section id="schools" className="section schoolsSection">
          <div className="schoolsCard">
            <div className="schoolsIntro">
              <p className="eyebrow">{t.schoolsLabel}</p>
              <h2>{t.schoolsTitle}</h2>
              <p className="lead">{t.schoolsLead}</p>
              <div className="actions">
                <a className="button gold" href="#contact">
                  {t.schoolsCta}
                </a>
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

        <section id="contact" className="section split contact">
          <div>
            <p className="eyebrow">{t.interestFormLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="lead">{t.contactLead}</p>
            <ContactCard email={contactEmail} phone={contactPhone} bookingHref={bookingHref} />
          </div>

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
              <p className="formStatus success" role="status">
                {t.formSuccess}
              </p>
            ) : null}
            {formStatus === 'error' ? (
              <p className="formStatus error" role="alert">
                {t.formError}
              </p>
            ) : null}

            <button className="button primary" type="submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? t.formSending : t.requestInfo}
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
