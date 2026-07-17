import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  RotateCw,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { ButtonLink, PageState } from '../components/DesignSystem';
import { getReportById } from '../data/reports';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

const MIN_ZOOM = 0.65;
const MAX_ZOOM = 1.6;
const ZOOM_STEP = 0.15;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function ReaderLoading() {
  return (
    <div className="pdf-reader__loading" role="status" aria-live="polite">
      <span className="pdf-reader__loader" aria-hidden="true" />
      <strong>Préparation du rapport</strong>
      <span>Le document est chargé et mis en page pour la lecture.</span>
    </div>
  );
}

export default function PdfReaderPage() {
  const { reportId } = useParams();
  const report = getReportById(reportId);
  const readerRef = useRef(null);
  const stageRef = useRef(null);
  const [numPages, setNumPages] = useState(report?.pages || 0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [viewMode, setViewMode] = useState('single');
  const [stageWidth, setStageWidth] = useState(900);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [documentReady, setDocumentReady] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const updateWidth = () => setStageWidth(stage.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [documentReady, report]);

  useEffect(() => {
    setNumPages(report?.pages || 0);
    setPageNumber(1);
    setPageInput('1');
    setZoom(1);
    setRotation(0);
    setViewMode('single');
    setDocumentReady(false);
  }, [report]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === readerRef.current);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const effectiveSpread = viewMode === 'spread' && stageWidth >= 860;

  const goToPage = useCallback(
    (nextPage) => {
      if (!numPages) return;
      const safePage = clamp(Number(nextPage) || 1, 1, numPages);
      setPageNumber(safePage);
      setPageInput(String(safePage));
    },
    [numPages]
  );

  const goPrevious = useCallback(() => {
    if (effectiveSpread) {
      goToPage(pageNumber <= 2 ? 1 : pageNumber - 2);
    } else {
      goToPage(pageNumber - 1);
    }
  }, [effectiveSpread, goToPage, pageNumber]);

  const goNext = useCallback(() => {
    if (effectiveSpread) {
      goToPage(pageNumber === 1 ? 2 : pageNumber + 2);
    } else {
      goToPage(pageNumber + 1);
    }
  }, [effectiveSpread, goToPage, pageNumber]);

  const changeZoom = useCallback((delta) => {
    setZoom((current) => clamp(Number((current + delta).toFixed(2)), MIN_ZOOM, MAX_ZOOM));
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (readerRef.current?.requestFullscreen) {
        await readerRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error('Impossible de changer le mode plein écran :', error);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tagName = event.target?.tagName?.toLowerCase();
      if (['input', 'textarea', 'select'].includes(tagName)) return;

      if (event.key === 'ArrowLeft') goPrevious();
      if (event.key === 'ArrowRight') goNext();
      if (event.key === '+' || event.key === '=') changeZoom(ZOOM_STEP);
      if (event.key === '-') changeZoom(-ZOOM_STEP);
      if (event.key === '0') setZoom(1);
      if (event.key.toLowerCase() === 'f') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeZoom, goNext, goPrevious, toggleFullscreen]);

  const visiblePages = useMemo(() => {
    if (!effectiveSpread || pageNumber === 1 || !numPages) return [pageNumber];
    return [pageNumber, pageNumber + 1].filter((page) => page <= numPages);
  }, [effectiveSpread, numPages, pageNumber]);

  const basePageWidth = effectiveSpread
    ? Math.min(Math.max((stageWidth - 96) / 2, 320), 720)
    : Math.min(Math.max(stageWidth - 48, 280), 900);
  const renderedPageWidth = Math.round(basePageWidth * zoom);

  if (!report) {
    return (
      <div className="page-surface min-h-[65vh] bg-sky-50/70 py-16">
        <div className="site-container">
          <PageState
            icon={FileText}
            title="Rapport introuvable"
            action={<ButtonLink to="/mbj#rapports">Retour aux rapports</ButtonLink>}
          >
            Ce rapport n'existe pas ou n'est plus disponible.
          </PageState>
        </div>
      </div>
    );
  }

  const onDocumentLoadSuccess = ({ numPages: loadedPages }) => {
    setNumPages(loadedPages);
    setDocumentReady(true);
    goToPage(1);
  };

  const submitPage = (event) => {
    event.preventDefault();
    goToPage(pageInput);
  };

  return (
    <div ref={readerRef} className="pdf-reader">
      <header className="pdf-reader__header">
        <div className="pdf-reader__identity">
          <Link to="/mbj#rapports" className="pdf-reader__back" aria-label="Retour aux rapports" title="Retour aux rapports">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </Link>
          <div className="min-w-0">
            <p>{report.label} · {report.year}</p>
            <h1>{report.title}</h1>
          </div>
        </div>

        <div className="pdf-reader__header-actions">
          <a href={report.file} download className="btn btn-warm">
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="pdf-reader__action-label">Télécharger</span>
          </a>
          <a
            href={report.file}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-reader__icon-button pdf-reader__external-action"
            aria-label="Ouvrir le PDF dans un nouvel onglet"
            title="Ouvrir dans un nouvel onglet"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="pdf-reader__icon-button"
            aria-label={isFullscreen ? 'Quitter le plein écran' : 'Lire en plein écran'}
            title={isFullscreen ? 'Quitter le plein écran' : 'Lire en plein écran'}
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" aria-hidden="true" /> : <Maximize2 className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className="pdf-reader__toolbar" aria-label="Outils du lecteur PDF">
        <div className="pdf-reader__tool-group">
          <button type="button" onClick={goPrevious} disabled={pageNumber <= 1} className="pdf-reader__icon-button pdf-reader__icon-button--light" aria-label="Page précédente" title="Page précédente">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <form onSubmit={submitPage} className="pdf-reader__page-form">
            <label htmlFor="pdf-page" className="sr-only">Numéro de page</label>
            <input
              id="pdf-page"
              type="number"
              min="1"
              max={numPages || undefined}
              value={pageInput}
              onChange={(event) => setPageInput(event.target.value)}
              onBlur={() => goToPage(pageInput)}
            />
            <span>/ {numPages || '—'}</span>
          </form>
          <button type="button" onClick={goNext} disabled={!numPages || pageNumber >= numPages} className="pdf-reader__icon-button pdf-reader__icon-button--light" aria-label="Page suivante" title="Page suivante">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="pdf-reader__tool-group">
          <button type="button" onClick={() => changeZoom(-ZOOM_STEP)} disabled={zoom <= MIN_ZOOM} className="pdf-reader__icon-button pdf-reader__icon-button--light" aria-label="Réduire le zoom" title="Réduire le zoom">
            <Minus className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setZoom(1)} className="pdf-reader__zoom-value" title="Réinitialiser le zoom">
            {Math.round(zoom * 100)}%
          </button>
          <button type="button" onClick={() => changeZoom(ZOOM_STEP)} disabled={zoom >= MAX_ZOOM} className="pdf-reader__icon-button pdf-reader__icon-button--light" aria-label="Augmenter le zoom" title="Augmenter le zoom">
            <Plus className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setRotation((current) => (current + 90) % 360)} className="pdf-reader__icon-button pdf-reader__icon-button--light" aria-label="Faire pivoter la page" title="Faire pivoter la page">
            <RotateCw className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="pdf-reader__view-switch" role="group" aria-label="Mode d'affichage">
          <button type="button" onClick={() => setViewMode('single')} className={viewMode === 'single' ? 'is-active' : ''} aria-pressed={viewMode === 'single'} title="Une page">
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span>Une page</span>
          </button>
          <button type="button" onClick={() => setViewMode('spread')} className={viewMode === 'spread' ? 'is-active' : ''} aria-pressed={viewMode === 'spread'} title="Double page">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Double page</span>
          </button>
        </div>
      </div>

      <Document
        file={report.file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<ReaderLoading />}
        error={(
          <div className="pdf-reader__error">
            <FileText className="h-10 w-10" aria-hidden="true" />
            <h2>Le rapport ne peut pas être affiché</h2>
            <p>Vous pouvez toujours le télécharger ou l'ouvrir dans votre navigateur.</p>
            <a href={report.file} download className="btn btn-warm">
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger le PDF
            </a>
          </div>
        )}
        className="pdf-reader__document"
      >
        <div className="pdf-reader__workspace">
          <aside className="pdf-reader__sidebar" aria-label="Navigation dans le rapport">
            <p className="pdf-reader__sidebar-title">Aperçu de la page</p>
            <button type="button" onClick={() => goToPage(pageNumber)} className="pdf-reader__thumbnail" aria-current="page">
              <Page
                pageNumber={pageNumber}
                width={148}
                rotate={rotation}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<span className="pdf-reader__thumbnail-loading">Chargement</span>}
              />
              <span>Page {pageNumber}</span>
            </button>
            <nav className="pdf-reader__page-grid" aria-label="Accès rapide aux pages">
              {Array.from({ length: numPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={page === pageNumber ? 'is-active' : ''}
                  aria-current={page === pageNumber ? 'page' : undefined}
                  aria-label={`Aller à la page ${page}`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </aside>

          <div ref={stageRef} className="pdf-reader__stage" aria-label={`Lecture de ${report.title}`}>
            <div className={`pdf-reader__pages ${effectiveSpread ? 'pdf-reader__pages--spread' : ''}`}>
              {visiblePages.map((page) => (
                <Page
                  key={`${page}-${rotation}-${renderedPageWidth}`}
                  pageNumber={page}
                  width={renderedPageWidth}
                  rotate={rotation}
                  renderTextLayer
                  renderAnnotationLayer
                  loading={<div className="pdf-reader__page-loading">Chargement de la page {page}</div>}
                  className="pdf-reader__page"
                />
              ))}
            </div>
          </div>
        </div>
      </Document>
    </div>
  );
}
