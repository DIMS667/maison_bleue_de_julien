// src/pages/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { fetchPostBySlug, featuredImageUrl, postDateLabel } from '../services/wp';

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    fetchPostBySlug(slug)
      .then(p => { if (!cancel) setPost(p); })
      .finally(() => !cancel && setLoading(false));
    return () => { cancel = true; };
  }, [slug]);

  if (loading) return <div className="container mx-auto px-4 py-12">Chargement…</div>;
  if (!post) return (
    <div className="container mx-auto px-4 py-12">
      Article introuvable.{' '}
      <button onClick={() => navigate(-1)} className="text-blue-600 underline">Retour</button>
    </div>
  );

  const img = featuredImageUrl(post);
  const cleanHtml = DOMPurify.sanitize(post.content?.rendered || '');

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/actualite" className="text-sm text-blue-600 hover:underline">← Retour aux actualités</Link>

      <h1
        className="text-3xl font-bold mt-3 mb-2"
        dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
      />
      <p className="text-gray-600 mb-6">{postDateLabel(post)}</p>

      {img && <img src={img} alt="" className="w-full rounded-2xl mb-8" />}

      <div className="wp-content prose max-w-none" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </article>
  );
}
