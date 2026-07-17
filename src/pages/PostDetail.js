import React from 'react';
import { Newspaper } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ArticleDetailPage from '../components/ArticleDetailPage';
import { fetchArticleBySlug } from '../services/api';

export default function PostDetail() {
  const { slug } = useParams();

  return (
    <ArticleDetailPage
      slug={slug}
      fetchItem={fetchArticleBySlug}
      listPath="/actualite"
      backLabel="Retour aux actualités"
      loadingLabel="Chargement de l'article"
      notFoundTitle="Article introuvable"
      notFoundText="L'article que vous recherchez n'existe pas ou n'est plus disponible."
      defaultCategory="Actualité"
      icon={Newspaper}
    />
  );
}
