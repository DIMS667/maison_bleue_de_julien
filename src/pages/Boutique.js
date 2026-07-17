import React, { useCallback, useEffect, useState } from 'react';
import {
  Eye,
  Grid,
  Heart,
  List,
  RefreshCw,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { articleImageUrl, fetchBoutiqueItems, fetchCategories } from '../services/api';
import { PageHero, PageState, Pagination, SectionHeading, cx } from '../components/DesignSystem';

const categoryIcons = {
  art: Star,
  bijoux: Heart,
  decoration: Eye,
  papeterie: Grid,
  accessoires: ShoppingBag,
};

const perPage = 9;

function ProductCard({ product, viewMode }) {
  const image = articleImageUrl(product);
  const listView = viewMode === 'list';

  return (
    <article className={cx('soft-card overflow-hidden', listView && 'md:flex')}>
      <div className={cx('bg-sky-50', listView ? 'md:w-72 md:shrink-0' : '')}>
        {image ? (
          <img
            src={image}
            alt={product.name}
            className={cx('h-full w-full object-cover', listView ? 'aspect-square md:aspect-auto' : 'aspect-square')}
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-square h-full min-h-56 w-full items-center justify-center text-blue-700">
            <ShoppingBag className="h-12 w-12" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {product.featured && (
            <span className="status-pill">
              <Star className="h-3.5 w-3.5" aria-hidden="true" />
              En vedette
            </span>
          )}
          <span className={cx('status-pill', !product.in_stock && 'border-slate-300 bg-slate-100 text-slate-600')}>
            {product.in_stock ? 'Disponible' : 'Épuisé'}
          </span>
        </div>

        <h2 className="text-xl font-extrabold text-blue-950">{product.name}</h2>
        <p className={cx('mt-3 text-sm leading-6 text-slate-600', !listView && 'line-clamp-3')}>
          {product.description}
        </p>

        <div className="mt-auto flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-extrabold text-blue-950">
            {Number(product.price).toLocaleString('fr-FR')} FCFA
          </p>
          {product.in_stock ? (
            <Link to="/contact" className="btn btn-primary" aria-label={`Commander ${product.name}`}>
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              <span>Commander</span>
            </Link>
          ) : (
            <button type="button" className="btn btn-secondary" disabled>
              Épuisé
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Boutique() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [viewMode, setViewMode] = useState('grid');
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories('boutique')
      .then((items) => setCategories(items))
      .catch(() => setCategories([]));
  }, []);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const { items, total: count, totalPages: pages } = await fetchBoutiqueItems({
        page,
        perPage,
        categorySlug: selectedCategory !== 'tous' ? selectedCategory : undefined,
        search: search || undefined,
      });
      setProducts(items);
      setTotal(count);
      setTotalPages(pages);
      setError(null);
    } catch (requestError) {
      console.error('Erreur chargement boutique:', requestError);
      setError('Impossible de charger les produits.');
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory, search]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const allCategories = [
    { id: 'tous', name: 'Tous les produits', icon: ShoppingBag },
    ...categories.map((category) => ({
      id: category.slug,
      name: category.name,
      icon: categoryIcons[category.slug] || ShoppingBag,
    })),
  ];

  const submitSearch = (event) => {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  };

  const clearSearch = () => {
    setSearch('');
    setSearchInput('');
    setPage(1);
  };

  return (
    <div className="page-surface min-h-screen">
      <PageHero compact eyebrow="Notre boutique" icon={ShoppingBag} title="Boutique solidaire">
        Découvrez les créations réalisées par les artistes de La Maison Bleue. Chaque
        achat contribue au financement de nos activités.
      </PageHero>

      <div>
        <section className="section-pad bg-white">
          <div className="site-container">
            <SectionHeading eyebrow="Créations solidaires" icon={ShoppingBag} title="Découvrir nos produits">
              Recherchez un article, filtrez par catégorie et choisissez la présentation
              la plus confortable pour vous.
            </SectionHeading>

            <div className="filter-panel mb-8">
              <form onSubmit={submitSearch} role="search">
                <label htmlFor="product-search" className="form-label">Rechercher un produit</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                    <input
                      id="product-search"
                      type="search"
                      value={searchInput}
                      onChange={(event) => setSearchInput(event.target.value)}
                      placeholder="Nom ou description du produit"
                      className="form-field form-field--icon"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <Search className="h-4 w-4" aria-hidden="true" />
                    <span>Rechercher</span>
                  </button>
                  {search && (
                    <button type="button" onClick={clearSearch} className="btn btn-secondary">
                      <X className="h-4 w-4" aria-hidden="true" />
                      <span>Effacer</span>
                    </button>
                  )}
                </div>
              </form>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="form-label">Catégories</p>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(({ id, name, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(id);
                        setPage(1);
                      }}
                      className={cx('btn', selectedCategory === id ? 'btn-primary' : 'btn-secondary')}
                      aria-pressed={selectedCategory === id}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-slate-600" aria-live="polite">
                  <strong className="text-blue-950">{total}</strong> produit{total > 1 ? 's' : ''} trouvé{total > 1 ? 's' : ''}
                </p>
                <div className="flex items-center gap-2" role="group" aria-label="Mode d'affichage">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={cx('icon-button', viewMode === 'grid' && 'border-blue-700 bg-blue-700 text-white')}
                    aria-pressed={viewMode === 'grid'}
                    aria-label="Afficher en grille"
                    title="Afficher en grille"
                  >
                    <Grid className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={cx('icon-button', viewMode === 'list' && 'border-blue-700 bg-blue-700 text-white')}
                    aria-pressed={viewMode === 'list'}
                    aria-label="Afficher en liste"
                    title="Afficher en liste"
                  >
                    <List className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {loading ? (
              <PageState title="Chargement de la boutique" loading>
                Nous récupérons les créations disponibles.
              </PageState>
            ) : error ? (
              <PageState
                icon={ShoppingBag}
                title="Boutique indisponible"
                action={(
                  <button type="button" onClick={loadProducts} className="btn btn-primary">
                    <RefreshCw className="h-4 w-4" aria-hidden="true" />
                    <span>Réessayer</span>
                  </button>
                )}
              >
                {error}
              </PageState>
            ) : products.length === 0 ? (
              <PageState
                icon={ShoppingBag}
                title={search ? `Aucun résultat pour « ${search} »` : 'Aucun produit disponible'}
                action={search ? <button type="button" onClick={clearSearch} className="btn btn-secondary">Effacer la recherche</button> : null}
              >
                {search ? 'Essayez un autre mot-clé ou consultez toutes les créations.' : 'De nouvelles créations seront bientôt proposées.'}
              </PageState>
            ) : (
              <>
                <div className={cx('grid gap-6', viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1')}>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPrevious={() => setPage((current) => Math.max(1, current - 1))}
                  onNext={() => setPage((current) => Math.min(totalPages, current + 1))}
                />
              </>
            )}
          </div>
        </section>

        <section className="section-pad bg-sky-50/70">
          <div className="site-container">
            <SectionHeading eyebrow="Impact" icon={Heart} title="Votre achat fait la différence">
              Les bénéfices de la boutique soutiennent directement nos ateliers et les
              personnes accompagnées par l'association.
            </SectionHeading>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="stat-tile"><div className="stat-tile__value">100%</div><div className="stat-tile__label">des bénéfices reversés</div></div>
              <div className="stat-tile"><div className="stat-tile__value">Fait main</div><div className="stat-tile__label">avec soin et passion</div></div>
              <div className="stat-tile"><div className="stat-tile__value">Unique</div><div className="stat-tile__label">chaque pièce est originale</div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
