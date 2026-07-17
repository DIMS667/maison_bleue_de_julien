import React from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function PageHero({
  eyebrow,
  title,
  children,
  icon: Icon,
  image,
  imageAlt = '',
  actions,
  compact = false,
  align = 'left',
}) {
  const centered = align === 'center';

  return (
    <section
      className={cx(
        'page-hero',
        compact && 'page-hero--compact',
        image && 'page-hero--with-media'
      )}
    >
      <div className="site-container page-hero__inner">
        <div className={cx('page-hero__content', centered && 'page-hero__content--center')}>
          {eyebrow && (
            <p className="page-kicker">
              {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
              <span>{eyebrow}</span>
            </p>
          )}
          <h1 className="page-hero__title">{title}</h1>
          {children && <div className="page-hero__text">{children}</div>}
          {actions && <div className="hero-actions">{actions}</div>}
        </div>

        {image && (
          <figure className="page-hero__figure">
            <img src={image} alt={imageAlt} className="page-hero__media" />
          </figure>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, icon: Icon, align = 'left' }) {
  const centered = align === 'center';

  return (
    <div className={cx('section-heading', centered && 'section-heading--center')}>
      {eyebrow && (
        <p className="section-kicker">
          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
          <span>{eyebrow}</span>
        </p>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {children && <p className="section-heading__text">{children}</p>}
    </div>
  );
}

export function ButtonLink({
  to,
  href,
  children,
  icon: Icon,
  iconPosition = 'start',
  variant = 'primary',
  className,
  external = false,
  ...props
}) {
  const classes = cx('btn', `btn-${variant}`, className);
  const content = (
    <>
      {Icon && iconPosition === 'start' && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {content}
    </a>
  );
}

export function IconCard({ icon: Icon, title, children, tone = 'blue', className }) {
  const toneClass =
    tone === 'coral' ? 'icon-box--coral' : tone === 'soft' ? 'icon-box--soft' : '';

  return (
    <article className={cx('soft-card p-6', className)}>
      <div className={cx('icon-box mb-5', toneClass)}>
        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
      </div>
      <h3 className="text-xl font-bold text-blue-950">{title}</h3>
      {children && <div className="mt-3 leading-7 text-slate-600">{children}</div>}
    </article>
  );
}

export function PageState({
  icon: Icon,
  title,
  children,
  action,
  loading = false,
  compact = false,
}) {
  return (
    <div
      className={cx('page-state', compact && 'page-state--compact')}
      role={loading ? 'status' : undefined}
      aria-live={loading ? 'polite' : undefined}
    >
      {loading ? (
        <LoaderCircle className="page-state__icon animate-spin" aria-hidden="true" />
      ) : (
        Icon && <Icon className="page-state__icon" aria-hidden="true" />
      )}
      <h2 className="page-state__title">{title}</h2>
      {children && <div className="page-state__text">{children}</div>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function BackLink({ to, children, className }) {
  return (
    <Link to={to} className={cx('back-link', className)}>
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      <span>{children}</span>
    </Link>
  );
}

export function Pagination({ page, totalPages, onPrevious, onNext }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        onClick={onPrevious}
        disabled={page === 1}
        className="btn btn-secondary"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span>Précédent</span>
      </button>
      <span className="pagination__status" aria-current="page">
        Page {page} sur {totalPages}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={page === totalPages}
        className="btn btn-secondary"
      >
        <span>Suivant</span>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}

export function InternalLinkButton({ to, children, icon: Icon, variant = 'primary', className }) {
  return (
    <ButtonLink to={to} icon={Icon} variant={variant} className={className}>
      {children}
    </ButtonLink>
  );
}
