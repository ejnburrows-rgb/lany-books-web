import { useState } from 'react'
import { getCrmPresentationSlides, type CrmSlide } from '../config/brochureData'

interface CrmPresentationDeckProps {
  lang: 'en' | 'es'
}

export function CrmPresentationDeck({ lang }: CrmPresentationDeckProps) {
  const slides = getCrmPresentationSlides(lang)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [showAllSlides, setShowAllSlides] = useState(false)

  const currentSlide = slides[activeSlideIndex] || slides[0]

  const renderSlideCard = (slide: CrmSlide, idx: number) => (
    <article
      key={slide.id}
      className="crm-deck-slide"
      data-testid={`crm-slide-${idx + 1}`}
    >
      <header className="crm-deck-slide__header">
        <div className="crm-deck-slide__brand">
          <img
            src="/images/gretel/logo-open-book.png"
            alt="LANY Books"
            className="crm-deck-slide__logo"
          />
          <div>
            <span className="crm-deck-slide__kicker">LANY Books · Operational Companion Deck</span>
            <strong>{slide.slideNumber}</strong>
          </div>
        </div>
        <span className="crm-deck-slide__badge">{slide.badge}</span>
      </header>

      <div className="crm-deck-slide__body">
        <div className="crm-deck-slide__main">
          <span className="crm-deck-sample-banner">{slide.sampleLabel}</span>
          <h3>{slide.title}</h3>
          <p className="crm-deck-slide__subtitle">{slide.subtitle}</p>
          <p className="crm-deck-slide__summary">{slide.summary}</p>

          <ul className="crm-deck-points">
            {slide.keyPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>

        <div className="crm-deck-slide__workspace">
          {/* Slide 3: 8-Field Contact & Organization Record */}
          {slide.recordFields ? (
            <div className="crm-record-card">
              <div className="crm-record-card__top">
                <strong>
                  {lang === 'es'
                    ? 'Ficha Estandarizada de Contacto y Organización'
                    : 'Standardized Contact & Organization Record'}
                </strong>
                <span className="crm-sample-tag">
                  {lang === 'es' ? 'DATOS DE DEMOSTRACIÓN' : 'SAMPLE DATA'}
                </span>
              </div>
              <dl className="crm-record-grid">
                {slide.recordFields.map((field) => (
                  <div key={field.label} className="crm-record-field">
                    <dt>{field.label}</dt>
                    <dd>{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          {/* Slide 4: 6-Stage Opportunity Pipeline */}
          {slide.pipelineStages ? (
            <div className="crm-pipeline-grid">
              {slide.pipelineStages.map((stageItem) => (
                <div key={stageItem.stage} className="crm-pipeline-stage">
                  <div className="crm-pipeline-stage__top">
                    <span className="crm-pipeline-num">{stageItem.countLabel}</span>
                    <strong>{stageItem.stage}</strong>
                  </div>
                  <p>{stageItem.desc}</p>
                </div>
              ))}
            </div>
          ) : null}

          {/* Slides 5, 6, 7: Operational Tables */}
          {slide.tableHeader && slide.tableRows ? (
            <div className="crm-operational-table-wrap">
              <table className="crm-operational-table">
                <thead>
                  <tr>
                    {slide.tableHeader.map((th) => (
                      <th key={th}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.tableRows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {/* Slides 1, 2, 8, 9: Operational Journey & Product Context Card */}
          {!slide.recordFields && !slide.pipelineStages && !slide.tableHeader ? (
            <div className="crm-journey-card">
              <div className="crm-journey-card__header">
                <img
                  src="/images/gretel/wb-cover-hd.webp"
                  alt="La Cartilla de Gretel"
                  className="crm-journey-cover"
                />
                <div>
                  <span className="crm-sample-tag">
                    {lang === 'es'
                      ? 'CONECTADO AL PRODUCTO FÍSICO'
                      : 'CONNECTED TO THE PHYSICAL PROGRAM'}
                  </span>
                  <h4>
                    {lang === 'es'
                      ? 'Recorrido Operativo de LANY Books'
                      : 'LANY Books Operational Customer Journey'}
                  </h4>
                  <p>
                    {lang === 'es'
                      ? 'Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship'
                      : 'Inquiry → Qualification → Demonstration → Follow-Up → Decision → Ongoing Relationship'}
                  </p>
                </div>
              </div>

              <div className="crm-journey-steps">
                {[
                  ['01', 'Inquiry', lang === 'es' ? 'Formulario web / Consulta directa' : 'Web interest form / Direct inquiry'],
                  ['02', 'Qualification', lang === 'es' ? 'Rol, grados (K–2) y número de alumnos' : 'Role, grades (K–2) & student count'],
                  ['03', 'Demonstration', lang === 'es' ? 'Rotafolio 17" × 22" y Libro de 92 págs.' : '17" × 22" Flipchart & 92-page Book'],
                  ['04', 'Follow-Up', lang === 'es' ? 'Muestras de láminas y evaluaciones' : 'Syllabic chart & evaluation samples'],
                  ['05', 'Decision', lang === 'es' ? 'Selección de edición física' : 'Physical edition selection'],
                  ['06', 'Ongoing Relationship', lang === 'es' ? 'Acompañamiento anual escolar' : 'Annual classroom continuity'],
                ].map(([num, label, detail]) => (
                  <div key={num} className="crm-journey-step-chip">
                    <span>{num}</span>
                    <div>
                      <strong>{label}</strong>
                      <small>{detail}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <footer className="crm-deck-slide__footer">
        <span>{slide.footerNote}</span>
        <a href="#contact" className="crm-deck-cta-link">
          {lang === 'es' ? 'Ir al formulario de consulta →' : 'Go to Inquiry Form →'}
        </a>
      </footer>
    </article>
  )

  return (
    <section
      id="crm"
      className="section crm-deck-section no-print"
      aria-labelledby="crm-deck-heading"
    >
      <div className="crm-deck-top">
        <div className="crm-deck-intro">
          <p className="eyebrow">
            {lang === 'es'
              ? 'Presentación Ejecutiva Separada · 9 Diapositivas'
              : 'Separate Executive Companion Presentation · 9 Slides'}
          </p>
          <h2 id="crm-deck-heading">
            {lang === 'es'
              ? 'LANY Books CRM — Presentación de Gestión Comercial y Relaciones Escolares'
              : 'LANY Books CRM — Sales & Relationship Management Presentation'}
          </h2>
          <p className="lead">
            {lang === 'es'
              ? 'Presentación operativa independiente de 9 diapositivas con estética ejecutiva de LANY Books para mostrar cómo se organizan los contactos, oportunidades, demostraciones y seguimientos escolares.'
              : 'A separate, structured 9-slide operational presentation designed in a restrained LANY Books executive style to demonstrate how contacts, opportunities, classroom demonstrations, and follow-ups are managed.'}
          </p>
        </div>

        <div className="crm-deck-view-toggle">
          <button
            type="button"
            className={`button ${!showAllSlides ? 'primary' : 'secondary'}`}
            onClick={() => setShowAllSlides(false)}
          >
            {lang === 'es' ? 'Vista por Diapositiva (1–9)' : 'Slide-by-Slide View (1–9)'}
          </button>
          <button
            type="button"
            className={`button ${showAllSlides ? 'primary' : 'secondary'}`}
            onClick={() => setShowAllSlides(true)}
          >
            {lang === 'es' ? 'Ver las 9 Diapositivas Completas' : 'View All 9 Slides'}
          </button>
        </div>
      </div>

      {!showAllSlides ? (
        <div className="crm-deck-interactive">
          <div className="crm-slide-Minimal-nav" role="tablist" aria-label="CRM Presentation Slides">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={idx === activeSlideIndex}
                className={`crm-slide-pill ${idx === activeSlideIndex ? 'active' : ''}`}
                onClick={() => setActiveSlideIndex(idx)}
                data-testid={`select-crm-slide-${idx + 1}`}
              >
                <span>0{idx + 1}</span>
                <strong>{slide.title.split('—')[0].trim()}</strong>
              </button>
            ))}
          </div>

          {renderSlideCard(currentSlide, activeSlideIndex)}

          <div className="brochure-pagination-bar">
            <button
              type="button"
              className="button secondary"
              disabled={activeSlideIndex === 0}
              onClick={() => setActiveSlideIndex((c) => Math.max(0, c - 1))}
            >
              {lang === 'es' ? '← Diapositiva anterior' : '← Previous Slide'}
            </button>
            <span className="brochure-pagination-status">
              {currentSlide.slideNumber}
            </span>
            <button
              type="button"
              className="button primary"
              disabled={activeSlideIndex === slides.length - 1}
              onClick={() => setActiveSlideIndex((c) => Math.min(slides.length - 1, c + 1))}
            >
              {lang === 'es' ? 'Siguiente diapositiva →' : 'Next Slide →'}
            </button>
          </div>
        </div>
      ) : (
        <div className="crm-deck-all-slides">
          {slides.map((slide, idx) => renderSlideCard(slide, idx))}
        </div>
      )}
    </section>
  )
}
