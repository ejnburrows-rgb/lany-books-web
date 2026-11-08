import { useState } from 'react'
import {
  copyVerificationList,
  getBrochureSpreads,
  gretelReferenceSamples,
  physicalKitComponents,
  promptStudioRecipes,
  replacementMapData,
  reviewRequiredItems,
  upgradedGalleryItems,
  type BrochureSpread,
  type GalleryItem,
} from '../config/brochureData'

interface CartillaBrochureProps {
  lang: 'en' | 'es'
}

type BrochureTab =
  | 'interactive'
  | 'all-pages'
  | 'prompt-studio'
  | 'replacement-map'
  | 'gallery'
  | 'design-audit'
type GalleryFilter = 'all' | 'posters' | 'classroom' | 'kit'

export function CartillaBrochure({ lang }: CartillaBrochureProps) {
  const spreads = getBrochureSpreads(lang)
  const kitItems = physicalKitComponents[lang]
  const verifications = copyVerificationList[lang]
  const reviewItems = reviewRequiredItems[lang]

  const [activeTab, setActiveTab] = useState<BrochureTab>('interactive')
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null)

  const handleCopyPrompt = async (id: string, promptText: string) => {
    try {
      await navigator.clipboard.writeText(promptText)
      setCopiedPromptId(id)
      setTimeout(() => setCopiedPromptId(null), 2400)
    } catch {
      setCopiedPromptId(id)
      setTimeout(() => setCopiedPromptId(null), 2400)
    }
  }

  const currentSpread = spreads[activeSpreadIndex] || spreads[0]

  const filteredGallery =
    galleryFilter === 'all'
      ? upgradedGalleryItems
      : upgradedGalleryItems.filter((item) => item.category === galleryFilter)

  const handlePrintBrochure = () => {
    setActiveTab('all-pages')
    setTimeout(() => {
      window.print()
    }, 120)
  }

  const openImageInLightbox = (src: string, title: string, caption: string) => {
    const existing = upgradedGalleryItems.find((item) => item.src === src)
    if (existing) {
      setLightboxItem(existing)
      return
    }
    setLightboxItem({
      id: 'custom-preview',
      src,
      category: 'posters',
      aspect: '3 / 4',
      usedOnPage: currentSpread.pageNumber,
      approvalStatus: 'APPROVED',
      tag: { en: 'Official Brochure Asset', es: 'Imagen Oficial del Folleto' },
      title: { en: title, es: title },
      caption: { en: caption, es: caption },
    })
  }

  const renderSpreadPage = (spread: BrochureSpread, index: number, isFullView = false) => (
    <article
      key={spread.id}
      className={`brochure-page-sheet ${isFullView ? 'brochure-page-sheet--print' : ''}`}
      data-testid={`brochure-page-${index + 1}`}
    >
      {/* Top Editorial Running Header */}
      <header className="brochure-sheet-header">
        <div className="brochure-sheet-brand">
          <img
            src="/images/gretel/logo-open-book.png"
            alt="LANY Books"
            className="brochure-sheet-logo"
          />
          <div>
            <span className="brochure-sheet-imprint">LANY Books Publishing · La Cartilla de Gretel</span>
            <strong className="brochure-sheet-folio">{spread.pageNumber}</strong>
          </div>
        </div>
        <span className="brochure-sheet-badge">{spread.badge}</span>
      </header>

      {/* Main Editorial Spread Body */}
      <div className="brochure-sheet-grid">
        {/* Left Column: Narrative, Pedagogical Sequence, Highlights & Specimen Box */}
        <div className="brochure-sheet-narrative">
          <div className="brochure-sheet-title-group">
            <span className="brochure-page-pill">
              {lang === 'es'
                ? `Página ${String(spread.pageIndex).padStart(2, '0')} de 10`
                : `Page ${String(spread.pageIndex).padStart(2, '0')} of 10`}
            </span>
            <h3 className="brochure-sheet-title">{spread.title}</h3>
            <p className="brochure-sheet-subtitle">{spread.subtitle}</p>
          </div>

          <p className="brochure-sheet-desc">{spread.description}</p>

          <div className="brochure-highlights-card">
            <h4>{spread.highlightsTitle}</h4>
            <ul className="brochure-highlights-list">
              {spread.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          {spread.ecosystemTags ? (
            <div className="brochure-ecosystem-tags">
              {spread.ecosystemTags.map((tagItem) => (
                <div key={tagItem.label} className="brochure-eco-row">
                  <div className="brochure-eco-row__top">
                    <strong>{tagItem.label}</strong>
                    <span
                      className={`brochure-status-tag brochure-status-tag--${tagItem.status
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      {tagItem.status}
                    </span>
                  </div>
                  <p>{tagItem.detail}</p>
                </div>
              ))}
            </div>
          ) : null}

          {spread.sampleBox ? (
            <div className="brochure-specimen-box">
              <div className="brochure-specimen-header">
                <span className="brochure-specimen-kicker">{spread.sampleBox.kicker}</span>
                <strong>{spread.sampleBox.heading}</strong>
              </div>
              <div className="brochure-specimen-lines">
                {spread.sampleBox.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              {spread.sampleBox.vocab ? (
                <div className="brochure-specimen-vocab">
                  {spread.sampleBox.vocab.map((word) => (
                    <span key={word} className="brochure-vocab-chip">
                      {word}
                    </span>
                  ))}
                </div>
              ) : null}
              <p className="brochure-specimen-footer">{spread.sampleBox.footerNote}</p>
            </div>
          ) : null}
        </div>

        {/* Right Column: Upgraded Approved Visual Assets with Layered Presentation */}
        <div className="brochure-sheet-visuals">
          <figure className="brochure-visual-card brochure-visual-card--primary">
            <div className="brochure-visual-frame">
              <img
                src={spread.primaryImage}
                alt={spread.primaryImageAlt}
                loading={index === 0 ? 'eager' : 'lazy'}
                onClick={() =>
                  openImageInLightbox(spread.primaryImage, spread.title, spread.primaryImageCaption)
                }
              />
              <button
                type="button"
                className="brochure-zoom-btn no-print"
                onClick={() =>
                  openImageInLightbox(spread.primaryImage, spread.title, spread.primaryImageCaption)
                }
              >
                {lang === 'es' ? 'Ampliar imagen ↗' : 'Enlarge image ↗'}
              </button>
            </div>
            <figcaption>{spread.primaryImageCaption}</figcaption>
          </figure>

          <figure className="brochure-visual-card brochure-visual-card--secondary">
            <div className="brochure-visual-frame brochure-visual-frame--secondary">
              <img
                src={spread.secondaryImage}
                alt={spread.secondaryImageAlt}
                loading="lazy"
                onClick={() =>
                  openImageInLightbox(
                    spread.secondaryImage,
                    spread.title,
                    spread.secondaryImageCaption
                  )
                }
              />
            </div>
            <figcaption>{spread.secondaryImageCaption}</figcaption>
          </figure>
        </div>
      </div>

      {/* Consistent Editorial Page Footer */}
      <footer className="brochure-sheet-footer">
        <span>
          {lang === 'es'
            ? 'La Cartilla de Gretel · Autora: Leonor Lopetegui · Ilustraciones: Estela de Armas Plasencia'
            : 'La Cartilla de Gretel · Author: Leonor Lopetegui · Illustrations: Estela de Armas Plasencia'}
        </span>
        <strong>
          LANY Books LLC ·{' '}
          {lang === 'es'
            ? `Página ${String(spread.pageIndex).padStart(2, '0')} / 10`
            : `Page ${String(spread.pageIndex).padStart(2, '0')} / 10`}
        </strong>
      </footer>
    </article>
  )

  return (
    <section
      id="brochure"
      className="section brochure-section"
      aria-labelledby="brochure-section-title"
    >
      {/* Top Header & Navigation Controls */}
      <div className="brochure-top-bar no-print">
        <div className="brochure-top-intro">
          <div className="eyebrowPill">
            <img
              src="/images/gretel/logo-open-book.png"
              alt=""
              className="eyebrowMiniLogo"
            />
            <p className="eyebrow">
              {lang === 'es'
                ? 'Documento de Marketing del Producto Físico · 10 Páginas'
                : 'Redesigned Physical-Product Marketing Document · 10 Pages'}
            </p>
          </div>
          <h2 id="brochure-section-title">
            {lang === 'es'
              ? 'Folleto Oficial Rediseñado: La Cartilla de Gretel (Edición Física)'
              : 'Redesigned Official Brochure: La Cartilla de Gretel (Physical Edition)'}
          </h2>
          <p className="lead">
            {lang === 'es'
              ? 'Una edición editorial cálida, colorida y fiel a la estética de LANY Books que reemplaza el folleto PDF antiguo con todas las fotografías e ilustraciones mejoradas y aprobadas.'
              : 'An editorial-quality, warm, colorful marketing brochure matching LANY Books aesthetics — replacing the legacy PDF with your upgraded, owner-approved product and classroom imagery.'}
          </p>
        </div>

        <div className="brochure-export-actions">
          <button
            type="button"
            className="button primary"
            onClick={handlePrintBrochure}
            data-testid="print-brochure-btn"
          >
            {lang === 'es' ? 'Imprimir / Guardar PDF (10 Páginas)' : 'Print / Save 10-Page PDF'}
          </button>
          <a
            href="/exports/la-cartilla-de-gretel-brochure-screen.pdf"
            download="La-Cartilla-de-Gretel-LANY-Books-Brochure.pdf"
            className="button secondary"
          >
            {lang === 'es' ? 'Descargar PDF listo para pantalla' : 'Download Screen-Ready PDF'}
          </a>
          <a
            href="#client-session"
            className="button gold"
            data-testid="brochure-share-session-link"
          >
            {lang === 'es'
              ? 'Enviar a Clientes (Correo / WhatsApp / SMS)'
              : 'Share with Clients (Email / WhatsApp / SMS)'}
          </a>
        </div>
      </div>

      {/* Main Workspace Mode Tabs */}
      <div className="brochure-mode-tabs no-print" role="tablist" aria-label="Brochure Views">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'interactive'}
          className={`brochure-mode-tab ${activeTab === 'interactive' ? 'active' : ''}`}
          onClick={() => setActiveTab('interactive')}
        >
          {lang === 'es' ? '1. Folleto Interactivo (10 Páginas)' : '1. Interactive 10-Page Brochure'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'all-pages'}
          className={`brochure-mode-tab ${activeTab === 'all-pages' ? 'active' : ''}`}
          onClick={() => setActiveTab('all-pages')}
        >
          {lang === 'es'
            ? '2. Vista Completa de Impresión (10 Páginas + Kit)'
            : '2. Full 10-Page Print View (+ 10-Piece Kit)'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'prompt-studio'}
          className={`brochure-mode-tab ${activeTab === 'prompt-studio' ? 'active' : ''}`}
          onClick={() => setActiveTab('prompt-studio')}
          data-testid="tab-prompt-studio"
        >
          {lang === 'es'
            ? '3. Prompts y Kit Coloreado (Referencias Gretel + eBay/ep_42)'
            : '3. Prompt Studio & Colorized Kit (Gretel Refs + eBay/ep_42)'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'replacement-map'}
          className={`brochure-mode-tab ${activeTab === 'replacement-map' ? 'active' : ''}`}
          onClick={() => setActiveTab('replacement-map')}
        >
          {lang === 'es'
            ? '4. Mapa de Reemplazo (PDF Antiguo → Nuevo)'
            : '4. Image Replacement Map (Old PDF → Upgraded)'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'gallery'}
          className={`brochure-mode-tab ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          {lang === 'es'
            ? `5. Galería de Arte Aprobado (${upgradedGalleryItems.length})`
            : `5. Upgraded Asset Gallery (${upgradedGalleryItems.length})`}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'design-audit'}
          className={`brochure-mode-tab ${activeTab === 'design-audit' ? 'active' : ''}`}
          onClick={() => setActiveTab('design-audit')}
        >
          {lang === 'es'
            ? '6. Sistema de Diseño y Verificación'
            : '6. Design System & Copy Verification'}
        </button>
      </div>

      {/* TAB 1: Interactive 10-Page Brochure Inspector */}
      {activeTab === 'interactive' ? (
        <div className="brochure-interactive-view">
          {/* 10-Page Selector Strip */}
          <div className="brochure-page-selector no-print" role="navigation" aria-label="Brochure Page Selector">
            {spreads.map((spread, idx) => (
              <button
                key={spread.id}
                type="button"
                className={`brochure-page-btn ${idx === activeSpreadIndex ? 'active' : ''}`}
                onClick={() => setActiveSpreadIndex(idx)}
                data-testid={`select-brochure-page-${idx + 1}`}
              >
                <span className="brochure-page-btn__num">P.{String(idx + 1).padStart(2, '0')}</span>
                <span className="brochure-page-btn__label">
                  {spread.pageNumber.split('·')[1]?.trim() || spread.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Spread Sheet */}
          {renderSpreadPage(currentSpread, activeSpreadIndex, false)}

          {/* Bottom Prev / Next Page Bar */}
          <div className="brochure-pagination-bar no-print">
            <button
              type="button"
              className="button secondary"
              disabled={activeSpreadIndex === 0}
              onClick={() => setActiveSpreadIndex((current) => Math.max(0, current - 1))}
            >
              {lang === 'es' ? '← Página anterior' : '← Previous Page'}
            </button>
            <span className="brochure-pagination-status">
              {lang === 'es'
                ? `Mostrando Página ${activeSpreadIndex + 1} de ${spreads.length}`
                : `Viewing Page ${activeSpreadIndex + 1} of ${spreads.length}`}
            </span>
            <button
              type="button"
              className="button primary"
              disabled={activeSpreadIndex === spreads.length - 1}
              onClick={() =>
                setActiveSpreadIndex((current) => Math.min(spreads.length - 1, current + 1))
              }
            >
              {lang === 'es' ? 'Página siguiente →' : 'Next Page →'}
            </button>
          </div>
        </div>
      ) : null}

      {/* TAB 2: Full 10-Page Print / PDF View + Complete 10-Piece Kit Inventory */}
      {activeTab === 'all-pages' ? (
        <div className="brochure-all-pages-stack">
          {spreads.map((spread, idx) => renderSpreadPage(spread, idx, true))}

          {/* Complete 10-Piece Kit Reference Sheet */}
          <div className="brochure-kit-inventory-card">
            <div className="brochure-kit-inventory-header">
              <div>
                <p className="eyebrow">
                  {lang === 'es'
                    ? 'Inventario Físico Verificado (10 Componentes)'
                    : 'Verified Physical Kit Inventory (10 Components)'}
                </p>
                <h3>
                  {lang === 'es'
                    ? 'Componentes Incluidos en el Paquete Físico Completo'
                    : 'Components Included in the Complete Physical Package'}
                </h3>
              </div>
              <img
                src="/images/gretel/logo-open-book.png"
                alt="LANY Books"
                className="brochure-sheet-logo"
              />
            </div>

            <div className="brochure-kit-grid">
              {kitItems.map((item) => (
                <div key={item.num} className="brochure-kit-item">
                  <div className="brochure-kit-item__top">
                    <span className="brochure-kit-num">{item.num}</span>
                    <span className="brochure-kit-cat">{item.category}</span>
                  </div>
                  <strong>{item.name}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* TAB 3: Prompt Studio & Colorized Authentic Kit (3 Gretel References + eBay/ep_42 Crops) */}
      {activeTab === 'prompt-studio' ? (
        <div className="brochure-audit-panel" data-testid="prompt-studio-view">
          <div className="brochure-audit-header">
            <h3>
              {lang === 'es'
                ? 'Estudio de Prompts y Kit Coloreado: 3 Referencias Maestras de Gretel + Originales de eBay / La-Cartilla_ep_42'
                : 'Gretel Reference & Prompt Studio: 3 Master Samples + Authentic eBay / La-Cartilla_ep_42 Colorizations'}
            </h3>
            <p>
              {lang === 'es'
                ? 'Cómo reemplazar la imagen sintética del kit y colorear las láminas originales de La-Cartilla_ep_42.html y eBay (ebay.com/itm/227292617053) adjuntando las 3 imágenes de referencia aprobadas de Gretel.'
                : 'How we replaced the synthetic kit image and colorized the authentic sheets from La-Cartilla_ep_42.html and eBay (ebay.com/itm/227292617053) by anchoring every generation to your 3 approved Gretel sample images.'}
            </p>
            <div className="prompt-source-links">
              <a
                href="https://www.ebay.com/itm/227292617053"
                target="_blank"
                rel="noopener noreferrer"
                className="smallButton gold"
              >
                {lang === 'es'
                  ? 'Ver Publicación de Referencia en eBay ↗'
                  : 'View Official eBay Reference Listing (227292617053) ↗'}
              </a>
              <a
                href="https://doublermuybien-com.3dcartstores.com/La-Cartilla_ep_42.html"
                target="_blank"
                rel="noopener noreferrer"
                className="smallButton dark"
              >
                {lang === 'es'
                  ? 'Ver Página Histórica La-Cartilla_ep_42 ↗'
                  : 'View Historical Webpage (La-Cartilla_ep_42) ↗'}
              </a>
            </div>
          </div>

          {/* 3 Master Gretel Reference Samples */}
          <div className="prompt-refs-grid">
            {gretelReferenceSamples.map((ref) => (
              <article key={ref.id} className="prompt-ref-card">
                <div
                  className="prompt-ref-thumb"
                  onClick={() => openImageInLightbox(ref.src, ref.title[lang], ref.whyUseIt[lang])}
                >
                  <img src={ref.src} alt={ref.title[lang]} loading="lazy" />
                  <span className="prompt-ref-code">{ref.code}</span>
                </div>
                <div className="prompt-ref-body">
                  <span className="prompt-ref-role">{ref.role[lang]}</span>
                  <h4>{ref.title[lang]}</h4>
                  <p>{ref.whyUseIt[lang]}</p>
                  <code className="brochure-asset-path">{ref.src}</code>
                </div>
              </article>
            ))}
          </div>

          {/* 6 Reference-Anchored Prompts + Before/After Comparison */}
          <div className="prompt-recipes-list">
            {promptStudioRecipes.map((recipe) => (
              <article key={recipe.id} className="prompt-recipe-card">
                <div className="prompt-recipe-top">
                  <div>
                    <span className="brochure-page-pill">{recipe.number}</span>
                    <h4>{recipe.title[lang]}</h4>
                    <p className="prompt-recipe-target">
                      {lang === 'es' ? 'Ubicación en el folleto: ' : 'Brochure placement: '}
                      <strong>{recipe.targetBrochurePage[lang]}</strong>
                    </p>
                  </div>
                  <div className="prompt-ref-badges">
                    {recipe.referenceCodes.map((code) => (
                      <span key={code} className="brochure-vocab-chip">
                        + {code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prompt-comparison-grid">
                  <figure
                    className="prompt-compare-box"
                    onClick={() =>
                      openImageInLightbox(
                        recipe.originalEp42Crop,
                        recipe.originalEp42Label[lang],
                        recipe.whatChanged[lang]
                      )
                    }
                  >
                    <span className="prompt-compare-tag">
                      {lang === 'es'
                        ? '1. Original Extraído (ep_42 / eBay)'
                        : '1. Extracted Original (ep_42 / eBay)'}
                    </span>
                    <img
                      src={recipe.originalEp42Crop}
                      alt={recipe.originalEp42Label[lang]}
                      loading="lazy"
                    />
                    <figcaption>{recipe.originalEp42Label[lang]}</figcaption>
                  </figure>

                  <figure
                    className="prompt-compare-box prompt-compare-box--upgraded"
                    onClick={() =>
                      openImageInLightbox(
                        recipe.colorizedResult,
                        recipe.title[lang],
                        recipe.whatChanged[lang]
                      )
                    }
                  >
                    <span className="prompt-compare-tag upgraded">
                      {lang === 'es'
                        ? '2. Reemplazo Coloreado de Alta Resolución'
                        : '2. High-Res Colorized Replacement'}
                    </span>
                    <img
                      src={recipe.colorizedResult}
                      alt={recipe.title[lang]}
                      loading="lazy"
                    />
                    <figcaption>{recipe.whatChanged[lang]}</figcaption>
                  </figure>
                </div>

                <div className="prompt-code-block">
                  <div className="prompt-code-header">
                    <span>
                      {lang === 'es'
                        ? 'Prompt Maestro Anclado a las Referencias de Gretel:'
                        : 'Reference-Anchored Master Prompt:'}
                    </span>
                    <button
                      type="button"
                      className="smallButton dark"
                      onClick={() => handleCopyPrompt(recipe.id, recipe.promptText)}
                      data-testid={`copy-${recipe.id}`}
                    >
                      {copiedPromptId === recipe.id
                        ? lang === 'es'
                          ? '✓ Prompt Copiado'
                          : '✓ Prompt Copied'
                        : lang === 'es'
                        ? 'Copiar Prompt'
                        : 'Copy Prompt'}
                    </button>
                  </div>
                  <p className="prompt-text-content">{recipe.promptText}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {/* TAB 4: Old PDF Audit & Image Replacement Map */}
      {activeTab === 'replacement-map' ? (
        <div className="brochure-audit-panel" data-testid="replacement-map-view">
          <div className="brochure-audit-header">
            <h3>
              {lang === 'es'
                ? 'Auditoría del PDF Antiguo y Mapa de Reemplazo de Imágenes'
                : 'Legacy PDF Audit & Upgraded Image Replacement Map'}
            </h3>
            <p>
              {lang === 'es'
                ? 'Comparación directa entre el folleto antiguo (la_cartilla_de_Gretel2.pdf / 3dcart) y los nuevos activos aprobados de alta resolución, incluyendo la auditoría de duplicados.'
                : 'Direct mapping from the legacy brochure (la_cartilla_de_Gretel2.pdf / 3dcart) to the newest owner-approved high-resolution assets, including duplicate comparison notes.'}
            </p>
          </div>

          <div className="brochure-replacement-list">
            {replacementMapData.map((row) => (
              <article key={row.id} className="brochure-replacement-card">
                <div className="brochure-replacement-thumb">
                  <img src={row.upgradedAsset} alt={row.upgradedTitle[lang]} loading="lazy" />
                  <span
                    className={`brochure-approval-pill ${
                      row.approvalStatus === 'APPROVED'
                        ? 'approved'
                        : row.approvalStatus === 'REVIEW REQUIRED'
                        ? 'review'
                        : 'superseded'
                    }`}
                  >
                    {row.approvalStatus}
                  </span>
                </div>
                <div className="brochure-replacement-body">
                  <div className="brochure-replacement-meta">
                    <span className="brochure-legacy-tag">{row.legacyPage}</span>
                    <span className="brochure-target-tag">→ {row.targetBrochurePage}</span>
                  </div>
                  <h4>{row.upgradedTitle[lang]}</h4>
                  <p className="brochure-replacement-issue">
                    <strong>{lang === 'es' ? 'Problema en el PDF antiguo: ' : 'Legacy PDF Issue: '}</strong>
                    {row.legacyIssue[lang]}
                  </p>
                  <p className="brochure-replacement-audit">
                    <strong>{lang === 'es' ? 'Selección y Auditoría de Duplicados: ' : 'Duplicate Comparison & Selection: '}</strong>
                    {row.duplicateAuditNote[lang]}
                  </p>
                  <code className="brochure-asset-path">{row.upgradedAsset}</code>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {/* TAB 4: Upgraded Asset Gallery with Category Filters & Lightbox */}
      {activeTab === 'gallery' ? (
        <div className="brochure-gallery-panel" data-testid="upgraded-gallery-view">
          <div className="brochure-gallery-controls">
            <div className="brochure-filter-pills">
              <button
                type="button"
                className={`brochure-filter-pill ${galleryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setGalleryFilter('all')}
              >
                {lang === 'es'
                  ? `Todas las Imágenes (${upgradedGalleryItems.length})`
                  : `All Assets (${upgradedGalleryItems.length})`}
              </button>
              <button
                type="button"
                className={`brochure-filter-pill ${galleryFilter === 'posters' ? 'active' : ''}`}
                onClick={() => setGalleryFilter('posters')}
              >
                {lang === 'es' ? 'Pósters Editoriales LANY Books' : 'LANY Books Editorial Posters'}
              </button>
              <button
                type="button"
                className={`brochure-filter-pill ${galleryFilter === 'classroom' ? 'active' : ''}`}
                onClick={() => setGalleryFilter('classroom')}
              >
                {lang === 'es' ? 'Fotografía en el Salón de Clases' : 'Classroom Use Photographs'}
              </button>
              <button
                type="button"
                className={`brochure-filter-pill ${galleryFilter === 'kit' ? 'active' : ''}`}
                onClick={() => setGalleryFilter('kit')}
              >
                {lang === 'es' ? 'Kit Físico y Portada Oficial' : 'Physical Kit & Official Cover'}
              </button>
            </div>
          </div>

          <div className="brochure-gallery-grid">
            {filteredGallery.map((item) => (
              <figure
                key={item.id}
                className="brochure-gallery-card"
                onClick={() => setLightboxItem(item)}
              >
                <div className="brochure-gallery-img-wrap">
                  <img src={item.src} alt={item.title[lang]} loading="lazy" />
                  <span
                    className={`brochure-gallery-status ${
                      item.approvalStatus === 'APPROVED' ? 'approved' : 'review'
                    }`}
                  >
                    {item.approvalStatus}
                  </span>
                </div>
                <figcaption className="brochure-gallery-caption">
                  <span className="brochure-gallery-page">{item.usedOnPage}</span>
                  <strong>{item.title[lang]}</strong>
                  <p>{item.caption[lang]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      {/* TAB 5: Design System, Copy Verification & REVIEW REQUIRED List */}
      {activeTab === 'design-audit' ? (
        <div className="brochure-design-system-panel" data-testid="design-system-view">
          {/* Design System Section */}
          <div className="brochure-ds-card">
            <p className="eyebrow">
              {lang === 'es' ? 'Sistema de Diseño Editorial LANY Books' : 'LANY Books Editorial Design System'}
            </p>
            <h3>
              {lang === 'es'
                ? 'Paleta de Color, Tipografía (2 Familias) y Reglas de Arte'
                : 'Color Palette, Two-Family Typography & Critical Artwork Rules'}
            </h3>

            <div className="brochure-ds-swatches">
              <div className="brochure-swatch">
                <div className="brochure-swatch__color" style={{ background: '#0b3270' }} />
                <strong>Deep Royal Navy</strong>
                <code>#0B3270</code>
                <span>Headings & Imprint Authority</span>
              </div>
              <div className="brochure-swatch">
                <div className="brochure-swatch__color" style={{ background: '#12489c' }} />
                <strong>LANY Cobalt Blue</strong>
                <code>#12489C</code>
                <span>Open-Book Logo & Primary Accents</span>
              </div>
              <div className="brochure-swatch">
                <div className="brochure-swatch__color" style={{ background: '#f8c630' }} />
                <strong>Sunny Butterfly Gold</strong>
                <code>#F8C630</code>
                <span>Cover Frame & Editorial Ribbons</span>
              </div>
              <div className="brochure-swatch">
                <div className="brochure-swatch__color" style={{ background: '#df2c27' }} />
                <strong>Gretel Ribbon Coral</strong>
                <code>#DF2C27</code>
                <span>Call-to-Action & Vowel Highlights</span>
              </div>
              <div className="brochure-swatch">
                <div className="brochure-swatch__color" style={{ background: '#268d44' }} />
                <strong>Meadow Leaf Green</strong>
                <code>#268D44</code>
                <span>Classroom & Available-Now Badges</span>
              </div>
              <div className="brochure-swatch">
                <div
                  className="brochure-swatch__color"
                  style={{ background: '#fffdf8', border: '1px solid #cbd5e1' }}
                />
                <strong>Warm Storybook Cream</strong>
                <code>#FFFDF8 / #FEF6DB</code>
                <span>Tactile Paper Background</span>
              </div>
            </div>

            <div className="brochure-ds-type-grid">
              <div className="brochure-ds-type-box">
                <span className="brochure-ds-label">
                  {lang === 'es' ? 'Familia Tipográfica 1 · Títulos' : 'Type Family 1 · Display & Headings'}
                </span>
                <h4 className="brochure-serif-sample">Fraunces Editorial Serif — La Cartilla de Gretel</h4>
                <p>
                  {lang === 'es'
                    ? 'Serif cálida y literaria que conecta la tradición del libro escolar con una casa editorial moderna.'
                    : 'Warm literary serif used for brochure cover titles, page headers, and author pull quotes.'}
                </p>
              </div>
              <div className="brochure-ds-type-box">
                <span className="brochure-ds-label">
                  {lang === 'es' ? 'Familia Tipográfica 2 · Cuerpo y Tablas' : 'Type Family 2 · Body, Labels & Tables'}
                </span>
                <h4>Plus Jakarta Sans — Sonidos · Sílabas · Palabras · Oraciones</h4>
                <p>
                  {lang === 'es'
                    ? 'Sans-serif limpia y altamente legible para descripciones de componentes, listas de aula y tablas CRM.'
                    : 'Clean, humanist sans-serif for effortless reading by educators, parents, school leaders, and partners.'}
                </p>
              </div>
            </div>
          </div>

          {/* Copy Verification List */}
          <div className="brochure-ds-card">
            <p className="eyebrow">
              {lang === 'es' ? 'Lista de Verificación de Textos' : 'Copy-Verification List'}
            </p>
            <h3>
              {lang === 'es'
                ? 'Cada Afirmación Respaldada por Fuentes Verificadas'
                : 'Every Claim Grounded in Verified Source Material'}
            </h3>
            <div className="brochure-verification-list">
              {verifications.map((v) => (
                <div key={v.claim} className="brochure-verification-item">
                  <strong>{v.claim}</strong>
                  <p>{v.text}</p>
                  <span className="brochure-source-cite">{v.source}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEW REQUIRED List */}
          <div className="brochure-ds-card brochure-ds-card--review">
            <p className="eyebrow">
              {lang === 'es'
                ? 'Elementos Marcados como REVIEW REQUIRED'
                : 'Items Flagged as REVIEW REQUIRED'}
            </p>
            <h3>
              {lang === 'es'
                ? 'Decisiones Comerciales y Archivos que Requieren Confirmación del Propietario'
                : 'Business Decisions & Assets Requiring Owner Confirmation'}
            </h3>
            <div className="brochure-verification-list">
              {reviewItems.map((rev) => (
                <div key={rev.id} className="brochure-verification-item">
                  <div className="brochure-rev-top">
                    <strong>{rev.item}</strong>
                    <span className="brochure-approval-pill review">{rev.status}</span>
                  </div>
                  <p>{rev.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* Lightbox Modal for High-Resolution Inspection */}
      {lightboxItem ? (
        <div
          className="brochure-lightbox no-print"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title[lang]}
          onClick={() => setLightboxItem(null)}
        >
          <div className="brochure-lightbox__card" onClick={(e) => e.stopPropagation()}>
            <div className="brochure-lightbox__top">
              <div>
                <span className="brochure-lightbox__tag">{lightboxItem.usedOnPage}</span>
                <h4>{lightboxItem.title[lang]}</h4>
              </div>
              <button
                type="button"
                className="smallButton dark"
                onClick={() => setLightboxItem(null)}
              >
                {lang === 'es' ? 'Cerrar ✕' : 'Close ✕'}
              </button>
            </div>
            <div className="brochure-lightbox__img-box">
              <img src={lightboxItem.src} alt={lightboxItem.title[lang]} />
            </div>
            <p className="brochure-lightbox__caption">{lightboxItem.caption[lang]}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
