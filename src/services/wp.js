// src/services/wp.js
// Mini SDK pour l’API WordPress (headless)

const CMS_BASE = 'https://cms.maisonbleudejulien.org/wp-json/wp/v2';

function toUrl(path) {
  return new URL(path, CMS_BASE.replace('/wp-json/wp/v2', ''));
}

// ---- Catégories ----
export async function fetchCategories() {
  const url = new URL(`${CMS_BASE}/categories`);
  url.searchParams.set('per_page', '100');
  const res = await fetch(url.toString(), { mode: 'cors' });
  if (!res.ok) throw new Error(`WP categories error ${res.status}`);
  return res.json();
}

export async function getCategoryBySlug(slug) {
  const url = new URL(`${CMS_BASE}/categories`);
  url.searchParams.set('slug', slug);
  const res = await fetch(url.toString(), { mode: 'cors' });
  if (!res.ok) throw new Error(`WP cat by slug error ${res.status}`);
  const arr = await res.json();
  return arr[0] || null;
}

// ---- Posts ----
export async function fetchPosts({
  page = 1,
  perPage = 9,
  categoryId,          // number
  categoryIds,         // number[] (OU)
  excludeCategoryIds,  // number[] (exclure)
  search,              // string
} = {}) {
  const url = new URL(`${CMS_BASE}/posts`);
  url.searchParams.set('page', String(page));
  url.searchParams.set('per_page', String(perPage));
  url.searchParams.set('_embed', '1');

  if (categoryId) url.searchParams.set('categories', String(categoryId));
  if (categoryIds?.length) url.searchParams.set('categories', categoryIds.join(','));
  if (excludeCategoryIds?.length) url.searchParams.set('categories_exclude', excludeCategoryIds.join(','));
  if (search) url.searchParams.set('search', search);

  const res = await fetch(url.toString(), { mode: 'cors' });
  if (!res.ok) throw new Error(`WP posts error ${res.status}`);
  const items = await res.json();
  const total = Number(res.headers.get('X-WP-Total') || items.length);
  const totalPages = Number(res.headers.get('X-WP-TotalPages') || 1);
  return { items, total, totalPages };
}

export async function fetchPostBySlug(slug) {
  const url = new URL(`${CMS_BASE}/posts`);
  url.searchParams.set('slug', slug);
  url.searchParams.set('_embed', '1');
  const res = await fetch(url.toString(), { mode: 'cors' });
  if (!res.ok) throw new Error(`WP post by slug error ${res.status}`);
  const arr = await res.json();
  return arr[0] || null;
}

// ---- Helpers d’affichage ----
export function featuredImageUrl(post) {
  const media = post?._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url || null;
}
export function postDate(post) {
  return new Date(post.date);
}
export function postDateLabel(post) {
  const d = postDate(post);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: '2-digit' });
}
export function wpSiteUrl() {
  return toUrl('/').toString();
}
