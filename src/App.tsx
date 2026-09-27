import { useEffect, useState, type FormEvent } from 'react'
import { copy, type Lang } from './copy'
import { ImageFrame } from './components'
import { ProductCard } from './components/ProductCard'
import { ContactCard } from './components/ContactCard'
import { getProducts } from './config/products'
import { getRetailers } from './config/retailers'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const imagePaths = {
  kit: '/images/gretel/cartilla-bundle.webp',
  cover: '/images/gretel/wb-cover-hd.webp',
  gretel: '/images/gretel/pose-7.webp',
}

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string) || ''

function getInitialLang(): Lang {
  try {
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
  const t = copy[lang]
  const products = getProducts(lang)
  const classroomProducts = products.filter((product) => product.id !== 'combo-district')
  const districtProduct = products.find((product) => product.id === 'combo-district')
  const retailers = getRetailers(lang)
  const navTargets = ['#home','#program','#materials','#package','#schools','#author','#contact']
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
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
            <a key={item} href={navTargets[index]} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="mobileOnlyNavAction" href="#contact" onClick={() => setMenuOpen(false)}>{t.requestInfo}</a>
          <button
            className="mobileOnlyNavAction langBtn"
            type="button"
            onClick={() => {
              handleSetLang(lang === 'en' ? 'es' : 'en')
              setMenuOpen(false)
            }}
          >
            {t.toggle}
          </button>
        </nav>

        <div className="headerActions">
          <a className="smallButton dark" href="#contact">{t.requestInfo}</a>
          <button className="smallButton gold" type="button" onClick={() => handleSetLang(lang === 'en' ? 'es' : 'en')}>
            {t.toggle}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="heroCopy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="heroSubtitle">{t.subtitle}</p>
            <p className="heroText">{t.heroText}</p>
            <div className="actions">
              <a className="button primary" href="#contact">{t.requestInfo}</a>
              <a className="textAction" href="#materials">{t.exploreMaterials}</a>
            </div>
          </div>

          <div className="heroStage" aria-label={t.kitAlt}>
            <div className="heroKit">
              <ImageFrame src={imagePaths.kit} alt={t.kitAlt} label={t.kitLoading} priority />
            </div>
            <div className="heroBook">
              <ImageFrame src={imagePaths.cover} alt={t.coverAlt} label={t.coverLoading} className="heroImage" aspect="3 / 4" priority />
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label={t.trustAria}>
          {t.trust.map((item) => <span className="trustItem" key={item}>{item}</span>)}
        </section>

        <section id="program" className="section methodSection">
          <div className="sectionIntro">
            <p className="eyebrow">{t.programLabel}</p>
            <h2>{t.methodTitle}</h2>
            <p className="lead">{t.methodText[1]}</p>
          </div>

          <div className="methodFlow">
            {t.methodSteps.map(([title, description], index) => (
              <article className="methodStep" key={title}>
                <span className="methodNumber">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="materials" className="section showcase">
          <div className="showcaseHeader">
            <p className="eyebrow">{t.presentationLabel}</p>
            <h2>{t.showcaseTitle}</h2>
            <p className="lead">{t.showcaseLead}</p>
          </div>

          <div className="materialsMosaic">
            <figure className="materialHero">
              <ImageFrame src={imagePaths.kit} alt={t.kitAlt} label={t.kitLoading} className="kitImage" />
            </figure>
            <figure className="materialCover">
              <ImageFrame src={imagePaths.cover} alt={t.coverAlt} label={t.coverLoading} aspect="3 / 4" />
            </figure>
            <div className="materialIndex">
              {t.gallery.map(([title, description]) => (
                <div className="materialLine" key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {retailers.length > 0 ? (
          <section id="retail" className="section retailSection">
            <div className="sectionIntro">
              <p className="eyebrow">{t.retailLabel}</p>
              <h2>{t.retailTitle}</h2>
              <p className="lead">{t.retailLead}</p>
            </div>

            <div className="retailerGrid">
              {retailers.map((retailer) => (
                <a
                  className={`retailerLink retailer-${retailer.id}`}
                  href={retailer.url}
                  key={retailer.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <strong>{retailer.name}</strong>
                    <small>{retailer.format}</small>
                  </span>
                  <span className="retailerCta">{retailer.cta} ↗</span>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <section id="buy" className="section productSection">
          <div className="buyTop">
            <div className="buyHeader">
              <p className="eyebrow">{t.buyLabel}</p>
              <h2>{t.buyTitle}</h2>
              <p className="lead">{t.buyLead}</p>
            </div>
            <div className="buyCover">
              <ImageFrame src={imagePaths.cover} alt={t.coverAlt} label={t.coverLoading} aspect="3 / 4" />
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
            {t.packageGroups.map(([group, items]) => (
              <section className="packageGroup" key={group}>
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <p className="packageNote">{t.packageNote}</p>
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
              <ul className="schoolsList">{t.schoolsPoints.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="author" className="section legacySection">
          <div className="legacyCopy">
            <p className="eyebrow">{t.authorLegacyLabel}</p>
            <h2>{t.authorTitle}</h2>
            <p className="legacyLead">{t.authorLead}</p>
            <div className="legacyText">{t.authorText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>

            <figure className="dedication">
              <p className="dedicationLabel">{t.dedicationLabel}</p>
              <blockquote>{t.dedicationParas.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote>
              <figcaption>{t.dedicationAttribution}</figcaption>
            </figure>
          </div>

          <div className="legacySide">
            <div className="legacyGretel" aria-hidden="true">
              <img src={imagePaths.gretel} alt="" loading="lazy" />
            </div>
            <div className="legacyFacts">
              <h3>{t.honorsTitle}</h3>
              {t.honors.map((honor) => <p key={honor}>{honor}</p>)}
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
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:'none'}} />
              <label htmlFor="contact-name">{t.name}<input id="contact-name" type="text" name="name" required /></label>
              <label htmlFor="contact-email">{t.email}<input id="contact-email" type="email" name="email" required /></label>
              <label htmlFor="contact-organization">{t.organization}<input id="contact-organization" type="text" name="organization" /></label>
              <div className="formSplit">
                <label htmlFor="contact-grade">{t.grade}<input id="contact-grade" type="text" name="grade" /></label>
                <label htmlFor="contact-students">{t.students}<input id="contact-students" type="number" min="1" name="students" /></label>
              </div>
              <label htmlFor="contact-timeframe">{t.timeframe}<input id="contact-timeframe" type="text" name="timeframe" /></label>
              <label htmlFor="contact-role">{t.role}<select id="contact-role" name="role">{t.roles.map((role) => <option key={role}>{role}</option>)}</select></label>
              <label htmlFor="contact-message">{t.message}<textarea id="contact-message" name="message" /></label>

              {formStatus === 'success' ? <p className="formStatus success" role="status">{t.formSuccess}</p> : null}
              {formStatus === 'error' ? <p className="formStatus error" role="alert">{t.formError}</p> : null}

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
        <div className="footerBrand"><strong>LANY Books</strong><span>{t.footer}</span></div>
        <a href="#home">{lang === 'es' ? 'Volver arriba' : 'Back to top'}</a>
      </footer>
    </div>
  )
}
