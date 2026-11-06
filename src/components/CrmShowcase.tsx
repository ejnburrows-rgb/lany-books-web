import { useState } from 'react'
import { getCrmModules, type CrmModuleId } from '../config/crmData'

interface CrmShowcaseProps {
  lang: 'en' | 'es'
  eyebrow: string
  title: string
  intro: string
  ctaLabel: string
  secondaryCtaLabel: string
  ecosystemBadge: string
}

export function CrmShowcase({
  lang,
  eyebrow,
  title,
  intro,
  ctaLabel,
  secondaryCtaLabel,
  ecosystemBadge,
}: CrmShowcaseProps) {
  const modules = getCrmModules(lang)
  const [activeId, setActiveId] = useState<CrmModuleId>('portal')
  const activeModule = modules.find((m) => m.id === activeId) ?? modules[0]

  return (
    <section id="crm" className="section crm-section">
      <div className="container">
        <div className="section-heading crm-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        <div className="crm-tabs" role="tablist" aria-label={title}>
          {modules.map((mod, index) => {
            const isSelected = mod.id === activeModule.id
            return (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                data-testid={`crm-tab-${mod.id}`}
                className={`crm-tab-btn ${isSelected ? 'crm-tab-btn--active' : ''}`}
                onClick={() => setActiveId(mod.id)}
              >
                <span className="crm-tab-btn__num">0{index + 1}</span>
                <span className="crm-tab-btn__text">{mod.tabTitle}</span>
              </button>
            )
          })}
        </div>

        <div className="crm-showcase-grid">
          <div className="crm-feature-panel">
            <span className="crm-badge">{activeModule.badge}</span>
            <h3>{activeModule.headline}</h3>
            <p className="crm-summary">{activeModule.summary}</p>

            <ul className="crm-checklist">
              {activeModule.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="crm-callout">
              <img
                src="/images/gretel/wb-cover-hd.webp"
                alt="La Cartilla de Gretel"
                className="crm-callout__cover"
              />
              <div>
                <strong>{ecosystemBadge}</strong>
                <p>{activeModule.highlightCallout}</p>
              </div>
            </div>

            <div className="crm-actions">
              <a className="button primary" href="#contact">
                {ctaLabel}
              </a>
              <a className="button secondary" href="#kits">
                {secondaryCtaLabel}
              </a>
            </div>
          </div>

          <div className="crm-preview-window" aria-live="polite">
            <div className="crm-window-bar">
              <div className="crm-window-dots" aria-hidden="true">
                <span className="crm-dot crm-dot--red" />
                <span className="crm-dot crm-dot--gold" />
                <span className="crm-dot crm-dot--green" />
              </div>
              <div className="crm-window-brand">
                <img
                  src="/images/gretel/logo-open-book.png"
                  alt=""
                  className="crm-window-logo"
                />
                <span>La Cartilla de Gretel · CRM &amp; Digital Platform</span>
              </div>
              <span className="crm-window-pill">K · 1º · 2º</span>
            </div>

            <div className="crm-window-body">
              <div className="crm-window-header">
                <div>
                  <h4>{activeModule.previewTitle}</h4>
                  <p>{activeModule.previewSubtitle}</p>
                </div>
              </div>

              <div className="crm-stats-row">
                {activeModule.previewStats.map((stat) => (
                  <div key={stat.label} className="crm-stat-card">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>

              <div className="crm-vowel-ribbon" aria-label="Las Cinco Vocales">
                <span className="crm-vowel-ribbon__label">
                  {lang === 'es' ? 'Secuencia Fonética Activa:' : 'Active Phonetic Sequence:'}
                </span>
                <div className="crm-vowel-pills">
                  <span className="crm-vowel-pill crm-vowel-pill--a">A a</span>
                  <span className="crm-vowel-pill crm-vowel-pill--e">E e</span>
                  <span className="crm-vowel-pill crm-vowel-pill--i">I i</span>
                  <span className="crm-vowel-pill crm-vowel-pill--o">O o</span>
                  <span className="crm-vowel-pill crm-vowel-pill--u">U u</span>
                </div>
              </div>

              <div className="crm-table" role="region" aria-label={activeModule.previewTitle}>
                {activeModule.studentRows.map((row) => (
                  <div key={row.name} className="crm-table-row">
                    <div className="crm-table-row__main">
                      <strong>{row.name}</strong>
                      <span className="crm-table-row__grade">{row.grade}</span>
                      <p>{row.currentLesson}</p>
                    </div>
                    <div className="crm-table-row__meta">
                      <span className="crm-table-row__mastery">{row.mastery}</span>
                      <span className="crm-table-row__status">{row.statusLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
