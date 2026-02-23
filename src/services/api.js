// src/services/api.js
// Client API pour le backend FastAPI — 3 rubriques : actualités, publications, boutique

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';
console.log('API BASE:', process.env.REACT_APP_API_URL);
async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || `Erreur API ${res.status}`);
  }
  return res.json();
}

// ---- Articles ----

/**
 * Récupérer la liste paginée des articles publiés
 * @param {object} params
 * @param {number} params.page        - numéro de page (défaut : 1)
 * @param {number} params.perPage     - articles par page (défaut : 9)
 * @param {string} params.categorySlug - filtrer par catégorie
 * @param {string} params.search      - recherche textuelle
 * @returns {{ items: Article[], total: number, totalPages: number }}
 */
export async function fetchArticles({ page = 1, perPage = 9, categorySlug, search } = {}) {
  const params = new URLSearchParams();
  params.set('page', String(page));
  params.set('per_page', String(perPage));
  if (categorySlug) params.set('category', categorySlug);
  if (search)       params.set('search', search);

  const data = await apiFetch(`/api/articles?${params.toString()}`);
  // Réponse attendue : { items: [...], total: number, total_pages: number }
  return {
    items:      data.items,
    total:      data.total,
    totalPages: data.total_pages,
  };
}

/**
 * Récupérer un article par son slug
 * @param {string} slug
 * @returns {Article | null}
 */
export async function fetchArticleBySlug(slug) {
  try {
    return await apiFetch(`/api/articles/${slug}`);
  } catch {
    return null;
  }
}

// ---- Catégories ----

/**
 * Récupérer toutes les catégories
 * @returns {Category[]}
 */
export async function fetchCategories() {
  return apiFetch('/api/categories');
}

// ---- Helpers d'affichage ----

/**
 * URL de l'image mise en avant d'un article
 * Si l'image est une URL absolue (hébergée sur le serveur FastAPI), on la retourne telle quelle.
 * @param {Article} article
 * @returns {string | null}
 */
export function articleImageUrl(article) {
  if (!article?.image_url) return null;
  if (article.image_url.startsWith('http')) return article.image_url;
  return `${API_BASE}${article.image_url}`;
}

/**
 * Formater la date d'un article en français
 * @param {Article} article
 * @returns {string}
 */
export function articleDateLabel(article) {
  if (!article?.published_at && !article?.created_at) return '';
  const d = new Date(article.published_at || article.created_at);
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' });
}

/**
 * Extraire un extrait texte brut depuis du HTML
 * @param {string} html
 * @param {number} maxLength
 * @returns {string}
 */
export function extractExcerpt(html, maxLength = 150) {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  const text = div.textContent || div.innerText || '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}


// ════════════════════════════════════════════════════════
//  PUBLICATIONS — BLOG / PRESSE / COMMUNIQUÉS
// ════════════════════════════════════════════════════════

export async function fetchPublications({ page = 1, perPage = 9, categorySlug, search } = {}) {
  const params = new URLSearchParams();
  params.set('page', String(page));
  params.set('per_page', String(perPage));
  if (categorySlug) params.set('category', categorySlug);
  if (search)       params.set('search', search);
  const data = await apiFetch(`/api/publications?${params.toString()}`);
  return { items: data.items, total: data.total, totalPages: data.total_pages };
}

export async function fetchPublicationBySlug(slug) {
  try { return await apiFetch(`/api/publications/${slug}`); }
  catch { return null; }
}

// ════════════════════════════════════════════════════════
//  BOUTIQUE — ARTICLES / PRODUITS
// ════════════════════════════════════════════════════════

export async function fetchBoutiqueItems({ page = 1, perPage = 12, categorySlug, search } = {}) {
  const params = new URLSearchParams();
  params.set('page', String(page));
  params.set('per_page', String(perPage));
  if (categorySlug) params.set('category', categorySlug);
  if (search)       params.set('search', search);
  const data = await apiFetch(`/api/boutique?${params.toString()}`);
  return { items: data.items, total: data.total, totalPages: data.total_pages };
}

export async function fetchBoutiqueItemBySlug(slug) {
  try { return await apiFetch(`/api/boutique/${slug}`); }
  catch { return null; }
}