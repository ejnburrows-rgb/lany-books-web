import { useState } from 'react'
import {
  AUTHENTICITY_COMPARISONS,
  BROCHURE_STYLES,
  OFFICIAL_LOGO_PATH,
  RESTORED_BLUE_COVER_PATH,
  SEVEN_PAGE_BROCHURE,
  WEBSITE_CONCEPTS,
  type ApprovalStatus,
  type BrochureStyleId,
} from '../config/masterHandoffData'
import type { Lang } from '../copy'

interface MasterVisualApprovalBoardProps {
  lang: Lang
  onLanguageChange?: (lang: Lang) => void
}

type ReviewTab = 'styles' | 'concepts' | 'authenticity' | 'recommendation' | 'full-brochure'
type ViewportPreviewMode = 'desktop' | 'mobile'

export function MasterVisualApprovalBoard({
  lang: initialLang,
  onLanguageChange,
}: MasterVisualApprovalBoardProps) {
  const [editionLang, setEditionLang] = useState<Lang>(initialLang)
  const [activeTab, setActiveTab] = useState<ReviewTab>('styles')
  const [selectedStyleId, setSelectedStyleId] = useState<BrochureStyleId>('editorial-classic')
  const [viewportMode, setViewportMode] = useState<ViewportPreviewMode>('desktop')

  const [styleDecisions, setStyleDecisions] = useState<Record<BrochureStyleId, ApprovalStatus>>({
    'editorial-classic': 'approved',
    'gallery-crisp': 'pending',
    'classroom-heritage': 'pending',
  })

  const [conceptDecisions, setConceptDecisions] = useState<Record<string, ApprovalStatus>>({
    'concept-1-joy-of-reading': 'pending',
    'concept-2-sounds-to-stories': 'pending',
    'concept-3-classroom-discovery': 'pending',
    'concept-4-learning-at-home': 'pending',
    'concept-5-traditional-contemporary': 'pending',
  })

  const [overallDecision, setOverallDecision] = useState<'none' | 'approved' | 'changes'>('none')
  const [ownerNotes, setOwnerNotes] = useState('')

  const activeStyle =
    BROCHURE_STYLES.find((s) => s.id === selectedStyleId) ?? BROCHURE_STYLES[0]

  const switchEditionLang = (next: Lang) => {
    setEditionLang(next)
    onLanguageChange?.(next)
  }

  const setStyleDecision = (id: BrochureStyleId, status: ApprovalStatus) => {
    setStyleDecisions((prev) => ({ ...prev, [id]: status }))
    if (status === 'approved') {
      setSelectedStyleId(id)
    }
  }

  const setConceptDecision = (id: string, status: ApprovalStatus) => {
    setConceptDecisions((prev) => ({ ...prev, [id]: status }))
  }

  const handlePrint7PageBrochure = (targetLang: Lang) => {
    setEditionLang(targetLang)
    setActiveTab('full-brochure')
    setTimeout(() => {
      window.print()
    }, 180)
  }

  const statusLabel = (status: ApprovalStatus) => {
    if (editionLang === 'es') {
      if (status === 'approved') return 'Aprobado'
      if (status === 'changes-requested') return 'Cambios solicitados'
      if (status === 'rejected') return 'Descartado'
      return 'Pendiente de revisión'
    }
    if (status === 'approved') return 'Approved'
    if (status === 'changes-requested') return 'Changes Requested'
    if (status === 'rejected') return 'Rejected'
    return 'Awaiting Review'
  }

  const sampleThreePages = SEVEN_PAGE_BROCHURE.slice(0, 3)

  return (
    <section
      id="visual-approval-board"
      className="masterApprovalSection"
      data-testid="master-visual-approval-board"
      aria-label={
        editionLang === 'es'
          ? 'Tablero de Aprobación Visual y Folleto de 7 Páginas'
          : 'Master Visual Approval Board & 7-Page Brochure Studio'
      }
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        padding: '3rem 1rem',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header Banner */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.75rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid #F1F5F9',
              paddingBottom: '1.25rem',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={OFFICIAL_LOGO_PATH}
                alt="LANY Books"
                referrerPolicy="no-referrer"
                style={{
                  height: '54px',
                  width: 'auto',
                  objectFit: 'contain',
                  background: '#FFFFFF',
                  padding: '4px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                }}
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#12489C',
                  }}
                >
                  {editionLang === 'es'
                    ? 'ETAPA DE REVISIÓN Y APROBACIÓN DEL PROPIETARIO · CERO FALSIFICACIÓN DE PRODUCTO'
                    : 'OWNER VISUAL APPROVAL & REVIEW STAGE · 100% AUTHENTIC PRODUCT FIDELITY'}
                </p>
                <h2
                  style={{
                    margin: '0.25rem 0 0',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)',
                    fontFamily: 'Fraunces, Georgia, serif',
                    color: '#0F172A',
                  }}
                >
                  {editionLang === 'es'
                    ? 'Rediseño del Folleto de 7 Páginas y 5 Conceptos Visuales para LANY Books'
                    : '7-Page Marketing Brochure Redesign & 5 Website Visual Concepts'}
                </h2>
              </div>
            </div>

            {/* Language Edition & Quick Print Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
              <div
                role="group"
                aria-label={editionLang === 'es' ? 'Idioma de la edición' : 'Brochure language edition'}
                style={{
                  display: 'inline-flex',
                  background: '#F1F5F9',
                  padding: '4px',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                }}
              >
                <button
                  type="button"
                  data-testid="approval-lang-en"
                  onClick={() => switchEditionLang('en')}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '7px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    background: editionLang === 'en' ? '#12489C' : 'transparent',
                    color: editionLang === 'en' ? '#FFFFFF' : '#334155',
                  }}
                >
                  English Edition
                </button>
                <button
                  type="button"
                  data-testid="approval-lang-es"
                  onClick={() => switchEditionLang('es')}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '7px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    background: editionLang === 'es' ? '#12489C' : 'transparent',
                    color: editionLang === 'es' ? '#FFFFFF' : '#334155',
                  }}
                >
                  Edición en Español
                </button>
              </div>

              <button
                type="button"
                data-testid="print-7page-en-btn"
                onClick={() => handlePrint7PageBrochure('en')}
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid #12489C',
                  background: '#EFF6FF',
                  color: '#12489C',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                {editionLang === 'es' ? 'Imprimir PDF 7 Págs. (Inglés)' : 'Print / Save 7-Page English PDF'}
              </button>

              <button
                type="button"
                data-testid="print-7page-es-btn"
                onClick={() => handlePrint7PageBrochure('es')}
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#12489C',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                {editionLang === 'es' ? 'Imprimir PDF 7 Págs. (Español)' : 'Print / Save 7-Page Spanish PDF'}
              </button>
            </div>
          </div>

          {/* Navigation Tabs for Sections A, B, C, D, E */}
          <div
            role="tablist"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {[
              {
                id: 'styles' as ReviewTab,
                labelEn: 'A. 3 Brochure Styles (Sample Pages)',
                labelEs: 'A. 3 Estilos de Folleto (Muestras)',
              },
              {
                id: 'concepts' as ReviewTab,
                labelEn: 'B. 5 Website Visual Concepts',
                labelEs: 'B. 5 Conceptos Visuales Web',
              },
              {
                id: 'authenticity' as ReviewTab,
                labelEn: 'C. Original vs. Restored Proof',
                labelEs: 'C. Comparación Original vs. Restaurado',
              },
              {
                id: 'full-brochure' as ReviewTab,
                labelEn: 'D. Complete 7-Page Brochure (EN & ES)',
                labelEs: 'D. Folleto Completo de 7 Páginas (EN y ES)',
              },
              {
                id: 'recommendation' as ReviewTab,
                labelEn: 'E. Recommended Direction & Approval',
                labelEs: 'E. Dirección Recomendada y Aprobación',
              },
            ].map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  data-testid={`approval-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: '10px',
                    border: isActive ? '2px solid #12489C' : '1px solid #CBD5E1',
                    background: isActive ? '#12489C' : '#F8FAFC',
                    color: isActive ? '#FFFFFF' : '#1E293B',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                  }}
                >
                  {editionLang === 'es' ? tab.labelEs : tab.labelEn}
                </button>
              )
            })}
          </div>
        </div>

        {/* =====================================================================
            TAB A: THREE PROPOSED BROCHURE DESIGN STYLES (2-3 POLISHED PAGES EACH)
            ===================================================================== */}
        {activeTab === 'styles' && (
          <div data-testid="panel-brochure-styles">
            {/* Style Selector Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem',
                marginBottom: '1.75rem',
              }}
            >
              {BROCHURE_STYLES.map((style) => {
                const isSelected = style.id === selectedStyleId
                const decision = styleDecisions[style.id]
                return (
                  <div
                    key={style.id}
                    data-testid={`brochure-style-card-${style.id}`}
                    style={{
                      background: '#FFFFFF',
                      border: isSelected ? '2px solid #12489C' : '1px solid #CBD5E1',
                      borderRadius: '14px',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      boxShadow: isSelected
                        ? '0 10px 25px rgba(18, 72, 156, 0.12)'
                        : '0 2px 8px rgba(15, 23, 42, 0.04)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: style.recommended ? '#12489C' : '#64748B',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {style.recommended
                            ? editionLang === 'es'
                              ? '★ DIRECCIÓN RECOMENDADA'
                              : '★ RECOMMENDED DIRECTION'
                            : editionLang === 'es'
                              ? 'OPCIÓN DE ESTILO EDITORIAL'
                              : 'EDITORIAL STYLE OPTION'}
                        </span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color:
                              decision === 'approved'
                                ? '#059669'
                                : decision === 'changes-requested'
                                  ? '#D97706'
                                  : '#64748B',
                          }}
                        >
                          {statusLabel(decision)}
                        </span>
                      </div>

                      <h3
                        style={{
                          margin: '0 0 0.35rem',
                          fontSize: '1.1rem',
                          fontFamily: 'Fraunces, Georgia, serif',
                          color: '#0F172A',
                        }}
                      >
                        {style.name[editionLang]}
                      </h3>
                      <p style={{ margin: '0 0 0.75rem', fontSize: '0.84rem', color: '#475569' }}>
                        {style.subtitle[editionLang]}
                      </p>

                      {/* Color Swatch Strip */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {[
                          { hex: style.palette.canvas, label: 'Canvas' },
                          { hex: style.palette.primary, label: 'Primary' },
                          { hex: style.palette.accent, label: 'Accent' },
                          { hex: style.palette.ink, label: 'Ink' },
                        ].map((swatch) => (
                          <div
                            key={swatch.label}
                            title={`${swatch.label}: ${swatch.hex}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              fontSize: '0.72rem',
                              color: '#475569',
                            }}
                          >
                            <span
                              style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '4px',
                                background: swatch.hex,
                                border: '1px solid #CBD5E1',
                                display: 'inline-block',
                              }}
                            />
                            <span>{swatch.hex}</span>
                          </div>
                        ))}
                      </div>

                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155', lineHeight: 1.5 }}>
                        {style.rationale[editionLang]}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid #F1F5F9',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedStyleId(style.id)}
                        style={{
                          flex: 1,
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #12489C',
                          background: isSelected ? '#12489C' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#12489C',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                        }}
                      >
                        {isSelected
                          ? editionLang === 'es'
                            ? 'Viendo 3 Páginas de Muestra'
                            : 'Viewing 3 Sample Pages'
                          : editionLang === 'es'
                            ? 'Previsualizar Estilo'
                            : 'Preview 3 Sample Pages'}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStyleDecision(style.id, 'approved')}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #059669',
                          background: decision === 'approved' ? '#059669' : '#ECFDF5',
                          color: decision === 'approved' ? '#FFFFFF' : '#065F46',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                        }}
                      >
                        {editionLang === 'es' ? 'Aprobar' : 'Approve'}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStyleDecision(style.id, 'changes-requested')}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #D97706',
                          background: decision === 'changes-requested' ? '#D97706' : '#FFFBEB',
                          color: decision === 'changes-requested' ? '#FFFFFF' : '#92400E',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                        }}
                      >
                        {editionLang === 'es' ? 'Cambios' : 'Changes'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 3 Sample Polished Pages for the Active Style (Page 1 Cover, Page 2 Method, Page 3 Flipchart) */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      color: activeStyle.palette.primary,
                    }}
                  >
                    {editionLang === 'es'
                      ? 'VISTA PREVIA DE 3 PÁGINAS (PORTADA, MÉTODO Y ROTAFOLIO FÍSICO)'
                      : '3-PAGE SAMPLE PREVIEW (COVER, READING METHOD & PHYSICAL FLIPCHART)'}
                  </span>
                  <h3
                    style={{
                      margin: '0.2rem 0 0',
                      fontSize: '1.3rem',
                      fontFamily: 'Fraunces, Georgia, serif',
                      color: '#0F172A',
                    }}
                  >
                    {activeStyle.name[editionLang]}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('full-brochure')}
                  style={{
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#12489C',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  {editionLang === 'es'
                    ? 'Ver las 7 Páginas Completas en este Estilo →'
                    : 'Inspect All 7 Pages in This Style →'}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {sampleThreePages.map((page) => (
                  <BrochurePageSheet
                    key={page.pageNumber}
                    page={page}
                    styleOption={activeStyle}
                    lang={editionLang}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB B: FIVE PREMIUM WEBSITE VISUAL CONCEPTS (DESKTOP & MOBILE PREVIEWS)
            ===================================================================== */}
        {activeTab === 'concepts' && (
          <div data-testid="panel-website-concepts">
            {/* Desktop (1366x768) vs Mobile (390x844) Preview Switcher */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                padding: '1rem 1.25rem',
                marginBottom: '1.25rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0F172A' }}>
                  {editionLang === 'es'
                    ? '5 Conceptos Visuales para el Sitio Web de LANY Books'
                    : '5 Premium Website Visual Concepts for LANY Books'}
                </h3>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.84rem', color: '#475569' }}>
                  {editionLang === 'es'
                    ? 'Cada concepto usa exclusivamente el logotipo oficial de LANY Books y recortes auténticos del Libro del alumno azul y del rotafolio físico.'
                    : 'Every concept uses exclusively the official LANY Books logo and authentic cutouts of the cobalt-blue Student Book and physical Flipchart.'}
                </p>
              </div>

              <div
                role="group"
                aria-label="Viewport preview mode"
                style={{
                  display: 'inline-flex',
                  background: '#F1F5F9',
                  padding: '4px',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                }}
              >
                <button
                  type="button"
                  data-testid="viewport-desktop-btn"
                  onClick={() => setViewportMode('desktop')}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '7px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    background: viewportMode === 'desktop' ? '#0F172A' : 'transparent',
                    color: viewportMode === 'desktop' ? '#FFFFFF' : '#334155',
                  }}
                >
                  {editionLang === 'es' ? 'Vista Escritorio (1366×768)' : 'Desktop View (1366×768)'}
                </button>
                <button
                  type="button"
                  data-testid="viewport-mobile-btn"
                  onClick={() => setViewportMode('mobile')}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '7px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    background: viewportMode === 'mobile' ? '#0F172A' : 'transparent',
                    color: viewportMode === 'mobile' ? '#FFFFFF' : '#334155',
                  }}
                >
                  {editionLang === 'es' ? 'Vista Móvil (390×844)' : 'Mobile View (390×844)'}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {WEBSITE_CONCEPTS.map((concept) => {
                const decision = conceptDecisions[concept.id] ?? 'pending'
                return (
                  <article
                    key={concept.id}
                    data-testid={`website-concept-${concept.number}`}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)',
                    }}
                  >
                    {/* Top Concept Metadata Bar */}
                    <div
                      style={{
                        padding: '1rem 1.5rem',
                        background: '#F8FAFC',
                        borderBottom: '1px solid #E2E8F0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#12489C',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {concept.title[editionLang]} ·{' '}
                          {editionLang === 'es' ? 'Ubicación propuesta:' : 'Proposed placement:'}{' '}
                          {concept.proposedPlacement.sectionName[editionLang]}
                        </span>
                      </div>

                      {/* Approve / Request Change / Reject Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span
                          style={{
                            fontSize: '0.76rem',
                            fontWeight: 700,
                            marginRight: '0.35rem',
                            color:
                              decision === 'approved'
                                ? '#059669'
                                : decision === 'changes-requested'
                                  ? '#D97706'
                                  : decision === 'rejected'
                                    ? '#DC2626'
                                    : '#64748B',
                          }}
                        >
                          {statusLabel(decision)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setConceptDecision(concept.id, 'approved')}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '7px',
                            border: '1px solid #059669',
                            background: decision === 'approved' ? '#059669' : '#ECFDF5',
                            color: decision === 'approved' ? '#FFFFFF' : '#065F46',
                            fontWeight: 700,
                            fontSize: '0.76rem',
                            cursor: 'pointer',
                          }}
                        >
                          {editionLang === 'es' ? 'Aprobar' : 'Approve'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConceptDecision(concept.id, 'changes-requested')}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '7px',
                            border: '1px solid #D97706',
                            background: decision === 'changes-requested' ? '#D97706' : '#FFFBEB',
                            color: decision === 'changes-requested' ? '#FFFFFF' : '#92400E',
                            fontWeight: 700,
                            fontSize: '0.76rem',
                            cursor: 'pointer',
                          }}
                        >
                          {editionLang === 'es' ? 'Solicitar Cambios' : 'Request Change'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setConceptDecision(concept.id, 'rejected')}
                          style={{
                            padding: '0.4rem 0.75rem',
                            borderRadius: '7px',
                            border: '1px solid #DC2626',
                            background: decision === 'rejected' ? '#DC2626' : '#FEF2F2',
                            color: decision === 'rejected' ? '#FFFFFF' : '#991B1B',
                            fontWeight: 700,
                            fontSize: '0.76rem',
                            cursor: 'pointer',
                          }}
                        >
                          {editionLang === 'es' ? 'Descartar' : 'Reject'}
                        </button>
                      </div>
                    </div>

                    {/* Concept Visual Frame (Desktop 1366x768 vs Mobile 390x844 simulation) */}
                    <div
                      style={{
                        padding: '1.5rem',
                        background: '#F1F5F9',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: viewportMode === 'mobile' ? '390px' : '100%',
                          maxWidth: viewportMode === 'mobile' ? '390px' : '1140px',
                          background: '#FBF9F5',
                          borderRadius: viewportMode === 'mobile' ? '24px' : '14px',
                          border:
                            viewportMode === 'mobile'
                              ? '6px solid #1E293B'
                              : '1px solid #CBD5E1',
                          overflow: 'hidden',
                          boxShadow: '0 16px 36px rgba(15, 23, 42, 0.12)',
                        }}
                      >
                        {/* Top Brand Bar inside Concept Preview */}
                        <div
                          style={{
                            padding: '0.85rem 1.25rem',
                            background: '#FFFFFF',
                            borderBottom: '1px solid #E2E8F0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <img
                              src={OFFICIAL_LOGO_PATH}
                              alt="LANY Books Official Logo"
                              referrerPolicy="no-referrer"
                              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
                            />
                            <span
                              style={{
                                fontWeight: 800,
                                fontSize: '0.9rem',
                                color: '#12489C',
                              }}
                            >
                              LANY Books
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              color: '#475569',
                            }}
                          >
                            La Cartilla de Gretel · Leonor Lopetegui
                          </span>
                        </div>

                        {/* Concept Main Split Grid */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns:
                              viewportMode === 'mobile'
                                ? '1fr'
                                : 'minmax(320px, 1.05fr) minmax(320px, 0.95fr)',
                            alignItems: 'stretch',
                          }}
                        >
                          {/* Editorial Story & Bilingual Copy */}
                          <div
                            style={{
                              padding: viewportMode === 'mobile' ? '1.25rem' : '2.25rem',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              gap: '0.9rem',
                            }}
                          >
                            {concept.isConceptualDigitalPreview && concept.conceptDisclaimer && (
                              <div
                                style={{
                                  padding: '0.55rem 0.75rem',
                                  background: '#FEF3C7',
                                  border: '1px solid #F59E0B',
                                  borderRadius: '8px',
                                  fontSize: '0.74rem',
                                  fontWeight: 700,
                                  color: '#92400E',
                                }}
                              >
                                {concept.conceptDisclaimer[editionLang]}
                              </div>
                            )}

                            <p
                              style={{
                                margin: 0,
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                color: '#12489C',
                              }}
                            >
                              {concept.emphasis[editionLang]}
                            </p>

                            <h4
                              style={{
                                margin: 0,
                                fontSize: viewportMode === 'mobile' ? '1.4rem' : '1.85rem',
                                lineHeight: 1.2,
                                fontFamily: 'Fraunces, Georgia, serif',
                                color: '#0F172A',
                              }}
                            >
                              “{concept.proposedHeadlineEs}”
                            </h4>

                            <p
                              style={{
                                margin: 0,
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                fontStyle: 'italic',
                                color: '#1E3A8A',
                              }}
                            >
                              “{concept.proposedHeadlineEn}”
                            </p>

                            <p
                              style={{
                                margin: 0,
                                fontSize: '0.88rem',
                                lineHeight: 1.6,
                                color: '#334155',
                              }}
                            >
                              {concept.supportingCopy[editionLang]}
                            </p>

                            {/* Integration Recommendation Note */}
                            <div
                              style={{
                                marginTop: '0.5rem',
                                paddingTop: '0.75rem',
                                borderTop: '1px solid #E2E8F0',
                                fontSize: '0.78rem',
                                color: '#475569',
                              }}
                            >
                              <strong>
                                {editionLang === 'es'
                                  ? 'Integración recomendada en el sitio: '
                                  : 'Recommended website placement: '}
                              </strong>
                              {concept.proposedPlacement.integrationStrategy[editionLang]}
                            </div>
                          </div>

                          {/* Lifestyle Backdrop + Separately Composited 100% Authentic Product Assets */}
                          <div
                            style={{
                              position: 'relative',
                              minHeight: viewportMode === 'mobile' ? '340px' : '390px',
                              background: '#0F172A',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-end',
                              padding: '1.25rem',
                              overflow: 'hidden',
                            }}
                          >
                            <img
                              src={concept.lifestyleBackdropSrc}
                              alt={concept.title[editionLang]}
                              referrerPolicy="no-referrer"
                              style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.82,
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                  'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.35) 55%, rgba(15, 23, 42, 0.1) 100%)',
                              }}
                            />

                            {/* Verified Authentic Product Cutouts Stage */}
                            <div
                              style={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                gap: '0.85rem',
                                padding: '0.9rem',
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '12px',
                                border: '1px solid #E2E8F0',
                                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
                              }}
                            >
                              {concept.authenticProductAssets.map((asset) => (
                                <div
                                  key={asset.src}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    maxWidth: '135px',
                                  }}
                                >
                                  <img
                                    src={asset.src}
                                    alt={asset.label[editionLang]}
                                    referrerPolicy="no-referrer"
                                    style={{
                                      height: viewportMode === 'mobile' ? '92px' : '118px',
                                      width: 'auto',
                                      objectFit: 'contain',
                                      borderRadius: '4px',
                                      filter: 'drop-shadow(0 4px 8px rgba(15,23,42,0.18))',
                                    }}
                                  />
                                  <span
                                    style={{
                                      marginTop: '0.35rem',
                                      fontSize: '0.68rem',
                                      fontWeight: 700,
                                      color: '#0F172A',
                                      lineHeight: 1.25,
                                    }}
                                  >
                                    {asset.label[editionLang]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB C: SIDE-BY-SIDE AUTHENTICITY COMPARISON (ORIGINAL VS. RESTORED)
            ===================================================================== */}
        {activeTab === 'authenticity' && (
          <div data-testid="panel-authenticity-comparison">
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.2rem',
                  fontFamily: 'Fraunces, Georgia, serif',
                  color: '#0F172A',
                }}
              >
                {editionLang === 'es'
                  ? 'Comparación Lado a Lado: Original de Fuente vs. Restauración Fiel (100 % Píxeles Reales)'
                  : 'Side-by-Side Authenticity Proof: Raw Source vs. Restored Product Cutouts'}
              </h3>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.86rem', color: '#475569' }}>
                {editionLang === 'es'
                  ? 'Siguiendo la Regla 1 y la Sección 9: se eliminó únicamente la suciedad de escaneo, el tinte gris del papel y los bordes exteriores verde oliva, preservando el 100 % de las letras, sílabas, poemas e ilustraciones originales.'
                  : 'Per Section 1 and Section 9: only scanning discoloration, gray paper tint, and outer olive-green thumbnail frames were removed—100% of the printed typography, syllables, poems, and illustrations remain untouched.'}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {AUTHENTICITY_COMPARISONS.map((item) => (
                <div
                  key={item.id}
                  data-testid={`authenticity-card-${item.id}`}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '14px',
                    padding: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid #F1F5F9',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#12489C',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.category[editionLang]} · {item.originalPdfPage}
                      </span>
                      <h4
                        style={{
                          margin: '0.2rem 0 0',
                          fontSize: '1.1rem',
                          fontFamily: 'Fraunces, Georgia, serif',
                          color: '#0F172A',
                        }}
                      >
                        {item.title[editionLang]}
                      </h4>
                    </div>
                    <span style={{ fontSize: '0.76rem', color: '#64748B', fontFamily: 'monospace' }}>
                      {item.sourceFileRecord}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '1.25rem',
                      alignItems: 'stretch',
                    }}
                  >
                    {/* Raw Source Capture */}
                    <div
                      style={{
                        background: '#F1F5F9',
                        border: '1px solid #CBD5E1',
                        borderRadius: '10px',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          alignSelf: 'flex-start',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#475569',
                          textTransform: 'uppercase',
                          marginBottom: '0.6rem',
                        }}
                      >
                        {editionLang === 'es'
                          ? 'ANTES — Archivo Fuente Original sin Procesar'
                          : 'BEFORE — Unedited Original Source File'}
                      </span>
                      <img
                        src={item.originalSrc}
                        alt={`Original ${item.title[editionLang]}`}
                        referrerPolicy="no-referrer"
                        style={{
                          maxHeight: '260px',
                          width: 'auto',
                          objectFit: 'contain',
                          borderRadius: '6px',
                        }}
                      />
                    </div>

                    {/* Restored Product Cutout */}
                    <div
                      style={{
                        background: '#FBF9F5',
                        border: '2px solid #059669',
                        borderRadius: '10px',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          alignSelf: 'flex-start',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#059669',
                          textTransform: 'uppercase',
                          marginBottom: '0.6rem',
                        }}
                      >
                        {editionLang === 'es'
                          ? 'DESPUÉS — Papel Blanco Restaurado (100 % Texto y Arte Intactos)'
                          : 'AFTER — Restored Neutral White Paper (100% Text & Art Intact)'}
                      </span>
                      <img
                        src={item.restoredSrc}
                        alt={`Restored ${item.title[editionLang]}`}
                        referrerPolicy="no-referrer"
                        style={{
                          maxHeight: '260px',
                          width: 'auto',
                          objectFit: 'contain',
                          borderRadius: '6px',
                          filter: 'drop-shadow(0 8px 18px rgba(15, 23, 42, 0.14))',
                        }}
                      />
                    </div>

                    {/* Restoration Notes */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        fontSize: '0.84rem',
                        color: '#334155',
                      }}
                    >
                      <div>
                        <strong style={{ color: '#0F172A', display: 'block', marginBottom: '0.3rem' }}>
                          {editionLang === 'es'
                            ? 'Restauración autorizada aplicada:'
                            : 'Permitted restoration applied:'}
                        </strong>
                        <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.55 }}>
                          {item.restorationActions[editionLang].map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        style={{
                          padding: '0.65rem 0.8rem',
                          background: '#F8FAFC',
                          borderRadius: '8px',
                          border: '1px solid #E2E8F0',
                          fontSize: '0.8rem',
                        }}
                      >
                        <strong>
                          {editionLang === 'es' ? 'Elementos 100 % preservados: ' : '100% preserved elements: '}
                        </strong>
                        {item.preservedElements[editionLang]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB D: COMPLETE 7-PAGE REDESIGNED MARKETING BROCHURE (ENGLISH & SPANISH)
            ===================================================================== */}
        {activeTab === 'full-brochure' && (
          <div data-testid="panel-full-7page-brochure" className="printableSevenPageBrochure">
            <div
              className="noPrintBar"
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '14px',
                padding: '1rem 1.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#0F172A' }}>
                  {editionLang === 'es'
                    ? 'Folleto Completo Rediseñado de 7 Páginas — Edición en Español'
                    : 'Complete 7-Page Redesigned Marketing Brochure — English Edition'}
                </h3>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: '#475569' }}>
                  {editionLang === 'es'
                    ? `Mostrando las 7 secciones originales de la_cartilla_de_Gretel2(1).pdf con texto seleccionable y fotografías restauradas en ${activeStyle.name.es}.`
                    : `Showing all 7 historical sections of la_cartilla_de_Gretel2(1).pdf with selectable text and restored product visuals in ${activeStyle.name.en}.`}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {BROCHURE_STYLES.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStyleId(st.id)}
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '7px',
                      border: selectedStyleId === st.id ? '2px solid #12489C' : '1px solid #CBD5E1',
                      background: selectedStyleId === st.id ? '#EFF6FF' : '#FFFFFF',
                      color: '#0F172A',
                      fontWeight: 700,
                      fontSize: '0.76rem',
                      cursor: 'pointer',
                    }}
                  >
                    {st.id === 'editorial-classic'
                      ? 'Style A (Classic)'
                      : st.id === 'gallery-crisp'
                        ? 'Style B (Crisp)'
                        : 'Style C (Heritage)'}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {SEVEN_PAGE_BROCHURE.map((page) => (
                <BrochurePageSheet
                  key={page.pageNumber}
                  page={page}
                  styleOption={activeStyle}
                  lang={editionLang}
                />
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB E: RECOMMENDED DIRECTION, WEBSITE INTEGRATION & OWNER APPROVAL
            ===================================================================== */}
        {activeTab === 'recommendation' && (
          <div
            data-testid="panel-recommended-direction"
            style={{
              background: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <span
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#12489C',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
              }}
            >
              {editionLang === 'es'
                ? 'RECOMENDACIÓN DE DIRECCIÓN CREATIVA E INTEGRACIÓN EN EL SITIO WEB'
                : 'CREATIVE DIRECTOR RECOMMENDATION & WEBSITE INTEGRATION PLAN'}
            </span>
            <h3
              style={{
                margin: '0.35rem 0 1rem',
                fontSize: '1.5rem',
                fontFamily: 'Fraunces, Georgia, serif',
                color: '#0F172A',
              }}
            >
              {editionLang === 'es'
                ? 'Por qué recomendamos el Estilo A («Clásico Editorial LANY») + Integración por Secciones'
                : 'Why We Recommend Style A (“LANY Editorial Classic”) + Section-by-Section Integration'}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  padding: '1.25rem',
                  background: '#FBF9F5',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem', color: '#12489C', fontSize: '1rem' }}>
                  {editionLang === 'es'
                    ? '1. Mejor estilo de folleto: Estilo A (Clásico Editorial LANY)'
                    : '1. Best Brochure Direction: Style A (LANY Editorial Classic)'}
                </h4>
                <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.6, color: '#334155' }}>
                  {editionLang === 'es'
                    ? 'El fondo crema de archivo (#FBF9F5) con titulares en azul cobalto (#12489C) armoniza con la portada azul real del Libro del alumno y el logotipo de LANY Books. Además, permite que las hojas interiores en blanco y negro (restauradas a blanco puro #FFFFFF) destaquen con máxima legibilidad tanto en pantalla móvil (390×844) como en impresión física.'
                    : 'The warm archival paper field (#FBF9F5) with cobalt-blue headings (#12489C) harmonizes directly with the real blue Student Workbook cover and the LANY Books open-book logo, while making the restored white-paper (#FFFFFF) blackline worksheets stand out with crisp contrast on both phone screens (390×844) and printed pages.'}
                </p>
              </div>

              <div
                style={{
                  padding: '1.25rem',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem', color: '#12489C', fontSize: '1rem' }}>
                  {editionLang === 'es'
                    ? '2. Cómo se integran los 5 conceptos sin recargar el sitio actual'
                    : '2. How the 5 Concepts Fit the Existing Website Without Clutter'}
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.1rem',
                    fontSize: '0.84rem',
                    lineHeight: 1.6,
                    color: '#334155',
                  }}
                >
                  <li>
                    <strong>#home:</strong> Concept 1 (<em>“Grandes historias comienzan con las primeras letras”</em>)
                  </li>
                  <li>
                    <strong>#program:</strong> Concept 2 (<em>“De los primeros sonidos a las primeras historias”</em>)
                  </li>
                  <li>
                    <strong>#materials:</strong> Concept 3 (<em>“Una experiencia de lectura para compartir en el aula”</em>)
                  </li>
                  <li>
                    <strong>#package:</strong> Concept 4 (<em>“Cada página, una oportunidad para aprender juntos”</em>)
                  </li>
                  <li>
                    <strong>#schools:</strong> Concept 5 (<em>“Una tradición de aprendizaje que mira hacia el futuro”</em>)
                  </li>
                </ul>
              </div>
            </div>

            {/* Two Clear Owner Choices Box */}
            <div
              data-testid="owner-final-decision-box"
              style={{
                padding: '1.5rem',
                background: '#EFF6FF',
                border: '2px solid #12489C',
                borderRadius: '14px',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#0F172A' }}>
                {editionLang === 'es'
                  ? 'Decisión del Propietario (Emilio)'
                  : 'Owner Approval Decision (Emilio)'}
              </h4>
              <p style={{ margin: '0 0 1rem', fontSize: '0.86rem', color: '#334155' }}>
                {editionLang === 'es'
                  ? 'Ninguna sección existente del sitio en producción ha sido reemplazada automáticamente. Selecciona una opción:'
                  : 'No existing production website sections have been automatically replaced. Choose how you would like to proceed:'}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                <button
                  type="button"
                  data-testid="decision-option-a"
                  onClick={() => setOverallDecision('approved')}
                  style={{
                    padding: '0.7rem 1.25rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: overallDecision === 'approved' ? '#059669' : '#12489C',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {editionLang === 'es'
                    ? 'A. Aprobar diseño seleccionado y publicar'
                    : 'A. Approve selected design direction & publish'}
                </button>

                <button
                  type="button"
                  data-testid="decision-option-b"
                  onClick={() => setOverallDecision('changes')}
                  style={{
                    padding: '0.7rem 1.25rem',
                    borderRadius: '10px',
                    border: '1px solid #1E293B',
                    background: overallDecision === 'changes' ? '#D97706' : '#FFFFFF',
                    color: overallDecision === 'changes' ? '#FFFFFF' : '#0F172A',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {editionLang === 'es' ? 'B. Solicitar cambios' : 'B. Request changes'}
                </button>
              </div>

              {overallDecision !== 'none' && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.85rem',
                    color: '#0F172A',
                  }}
                >
                  {overallDecision === 'approved' ? (
                    <span>
                      <strong>
                        {editionLang === 'es' ? 'Opción A seleccionada: ' : 'Option A selected: '}
                      </strong>
                      {editionLang === 'es'
                        ? `Estilo activo: ${activeStyle.name.es}. Confirma "A" en el chat para autorizar el despliegue final.`
                        : `Active style: ${activeStyle.name.en}. Reply "A" in chat to authorize final integration and deployment.`}
                    </span>
                  ) : (
                    <div>
                      <label
                        htmlFor="owner-change-notes"
                        style={{ display: 'block', fontWeight: 700, marginBottom: '0.35rem' }}
                      >
                        {editionLang === 'es'
                          ? 'Indica qué ajustes deseas en las páginas o conceptos:'
                          : 'Note any adjustments you want on the pages or concepts:'}
                      </label>
                      <textarea
                        id="owner-change-notes"
                        rows={2}
                        value={ownerNotes}
                        onChange={(e) => setOwnerNotes(e.target.value)}
                        placeholder={
                          editionLang === 'es'
                            ? 'Escribe tus comentarios aquí...'
                            : 'Write your change notes here...'
                        }
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.84rem',
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ============================================================================
   INDIVIDUAL REDESIGNED BROCHURE PAGE COMPONENT (USED IN TAB A & TAB D)
   ============================================================================ */
function BrochurePageSheet({
  page,
  styleOption,
  lang,
}: {
  page: (typeof SEVEN_PAGE_BROCHURE)[number]
  styleOption: (typeof BROCHURE_STYLES)[number]
  lang: Lang
}) {
  return (
    <article
      data-testid={`brochure-7page-sheet-${page.pageNumber}`}
      style={{
        background: styleOption.palette.canvas,
        color: styleOption.palette.ink,
        border: `1px solid ${styleOption.palette.border}`,
        borderRadius: '14px',
        padding: 'clamp(1.25rem, 3vw, 2.5rem)',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
        pageBreakAfter: 'always',
      }}
    >
      {/* Top Running Header */}
      <header
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          paddingBottom: '1rem',
          marginBottom: '1.5rem',
          borderBottom: `1px solid ${styleOption.palette.border}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={OFFICIAL_LOGO_PATH}
            alt="LANY Books Official Logo"
            referrerPolicy="no-referrer"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              background: '#FFFFFF',
              padding: '3px 6px',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
            }}
          />
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: styleOption.palette.primary,
              }}
            >
              {page.kicker[lang]}
            </span>
            <span style={{ fontSize: '0.78rem', color: styleOption.palette.muted }}>
              LANY Books LLC · Autora: Leonor Lopetegui
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: styleOption.palette.primary,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {lang === 'es' ? `Página ${page.pageNumber} de 7` : `Page ${page.pageNumber} of 7`}
        </span>
      </header>

      {/* Main 2-Column Editorial Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Editorial Narrative & Curriculum Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4
              style={{
                margin: 0,
                fontSize: 'clamp(1.45rem, 2.4vw, 2rem)',
                fontFamily: 'Fraunces, Georgia, serif',
                color: styleOption.palette.ink,
                lineHeight: 1.2,
              }}
            >
              {page.title[lang]}
            </h4>
            <p
              style={{
                margin: '0.4rem 0 0',
                fontSize: '0.96rem',
                fontWeight: 600,
                color: styleOption.palette.primary,
                lineHeight: 1.45,
              }}
            >
              {page.subtitle[lang]}
            </p>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              fontWeight: 600,
              lineHeight: 1.65,
              color: styleOption.palette.ink,
            }}
          >
            {page.lead[lang]}
          </p>

          {page.bodyParagraphs[lang].map((para, idx) => (
            <p
              key={idx}
              style={{
                margin: 0,
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: styleOption.palette.muted,
              }}
            >
              {para}
            </p>
          ))}

          {/* Authentic Curriculum Sequence / Verbatim Text Box */}
          {page.curriculumExamples && (
            <div
              style={{
                background: styleOption.palette.surface,
                border: `1px solid ${styleOption.palette.border}`,
                borderRadius: '10px',
                padding: '1rem 1.15rem',
              }}
            >
              <strong
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: styleOption.palette.primary,
                  marginBottom: '0.5rem',
                }}
              >
                {page.curriculumExamples.title[lang]}
              </strong>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  color: styleOption.palette.ink,
                }}
              >
                {page.curriculumExamples.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p
                style={{
                  margin: '0.5rem 0 0',
                  fontSize: '0.76rem',
                  fontStyle: 'italic',
                  color: styleOption.palette.muted,
                }}
              >
                {page.curriculumExamples.note[lang]}
              </p>
            </div>
          )}

          {/* Key Specifications List */}
          <dl
            style={{
              margin: 0,
              display: 'grid',
              gap: '0.65rem',
              paddingTop: '0.5rem',
              borderTop: `1px solid ${styleOption.palette.border}`,
            }}
          >
            {page.keyPoints.map((kp, idx) => (
              <div key={idx}>
                <dt
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: styleOption.palette.ink,
                  }}
                >
                  {kp.label[lang]}
                </dt>
                <dd
                  style={{
                    margin: '0.15rem 0 0',
                    fontSize: '0.82rem',
                    lineHeight: 1.5,
                    color: styleOption.palette.muted,
                  }}
                >
                  {kp.detail[lang]}
                </dd>
              </div>
            ))}
          </dl>

          {page.availabilityNote && (
            <p
              style={{
                margin: 0,
                padding: '0.65rem 0.85rem',
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '8px',
                fontSize: '0.76rem',
                lineHeight: 1.5,
                color: '#92400E',
              }}
            >
              {page.availabilityNote[lang]}
            </p>
          )}
        </div>

        {/* Right Column: Large Authentic Product Photograph / Restored Cutout Plate */}
        <figure
          style={{
            margin: 0,
            background: styleOption.palette.surface,
            border: `1px solid ${styleOption.palette.border}`,
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              width: '100%',
            }}
          >
            <img
              src={page.primaryImage.src}
              alt={page.primaryImage.alt[lang]}
              referrerPolicy="no-referrer"
              style={{
                maxHeight: '340px',
                maxWidth: page.primaryImage.secondarySrc ? '46%' : '100%',
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '6px',
                filter: 'drop-shadow(0 10px 20px rgba(15, 23, 42, 0.14))',
              }}
            />
            {page.primaryImage.secondarySrc && (
              <img
                src={page.primaryImage.secondarySrc}
                alt={page.primaryImage.alt[lang]}
                referrerPolicy="no-referrer"
                style={{
                  maxHeight: '340px',
                  maxWidth: '46%',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  filter: 'drop-shadow(0 10px 20px rgba(15, 23, 42, 0.14))',
                }}
              />
            )}
          </div>

          <figcaption
            style={{
              width: '100%',
              paddingTop: '0.75rem',
              borderTop: `1px solid ${styleOption.palette.border}`,
              fontSize: '0.78rem',
              lineHeight: 1.5,
              color: styleOption.palette.muted,
            }}
          >
            <div style={{ fontWeight: 600, color: styleOption.palette.ink }}>
              {page.primaryImage.caption[lang]}
            </div>
            <div style={{ marginTop: '0.25rem', fontSize: '0.7rem', fontFamily: 'monospace' }}>
              Source: {page.primaryImage.sourceRecord}
            </div>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
