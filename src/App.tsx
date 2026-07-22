import { useState } from 'react'
import { copy, type Lang } from './copy'
import { BrandLogo, ImageFrame } from './components'

const imagePaths = {
  kit: '/images/gretel/Cartilla Bundle.png',
  cover: '/images/gretel/WB Cover HD.png'
}

const flipchartPages = [
  '/images/gretel/Pose 7.png'
]

const formats = [
  { id: 'kindle', name: 'Kindle', className: 'kindle', price: '$9.99' },
  { id: 'epub', name: 'EPUB', className: 'epub', price: '$9.99' },
  { id: 'pdf', name: 'PDF', className: 'pdf', price: '$12.99' },
  { id: 'audible', name: 'Audible', className: 'audible', price: '$14.95' }
] as const

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const navTargets = ['#home', '#program', '#materials', '#package', '#schools', '#author', '#contact']

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
              alt="La Cartilla de Gretel — Libro del alumno cover"
              label="Cover photo loading"
              className="heroImage"
              aspect="3 / 4"
            />
          </div>
        </section>

        <section className="trustStrip" aria-label="Why families and teachers choose La Cartilla de Gretel">
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
              alt="The complete La Cartilla de Gretel kit: flipchart, student book, syllabic charts, homework, evaluations, audio CD, felt vowel dolls, teacher's guide, and canvas carrying bag"
              label="Full kit photo loading"
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
                    label="Flipchart page loading"
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
              <h2>{t.buyTitle}</h2>
              <p className="lead">{t.buyLead}</p>
            </div>
            <div className="buyCover">
              <ImageFrame
                src={imagePaths.cover}
                alt="La Cartilla de Gretel cover"
                label="Cover photo loading"
                aspect="3 / 4"
              />
            </div>
          </div>

          <div className="routesGrid">
            {t.routes.map((route) => (
              <article className={`routeCard ${route.variant}`} key={route.name}>
                {route.variant === 'package' ? (
                  <span className="routeBadge">{t.bestValue}</span>
                ) : null}
                <h3>{route.name}</h3>
                {route.price ? (
                  <div className="price">{route.price}</div>
                ) : (
                  <div className="contactPrice">{t.contactCta}</div>
                )}
                <p className="routeDesc">{route.desc}</p>
                {route.price ? (
                  <a className="button primary" href="#contact">
                    {t.orderCta}
                  </a>
                ) : (
                  <a className="button secondary" href="#contact">
                    {t.contactCta}
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="formatBox">
            <h3>{t.formatsTitle}</h3>
            <div className="formatLinks">
              {formats.map((format, index) => (
                <a
                  key={format.id}
                  className={`formatLink ${format.className}`}
                  href="#contact"
                  aria-label={`${format.name} — ${format.price}`}
                >
                  <BrandLogo id={format.id} name={format.name} tag={t.formatTags[index]} />
                  <span className="formatPrice">{format.price}</span>
                </a>
              ))}
            </div>
            <p>{t.formatsNote}</p>
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
