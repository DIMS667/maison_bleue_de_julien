import React from 'react';
import { BookOpen } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ArticleDetailPage from '../components/ArticleDetailPage';
import { fetchPublicationBySlug } from '../services/api';

export default function PublicationDetail() {
  const { slug } = useParams();

  return (
    <ArticleDetailPage
      slug={slug}
      fetchItem={fetchPublicationBySlug}
      listPath="/publications"
      backLabel="Retour aux publications"
      loadingLabel="Chargement de la publication"
      notFoundTitle="Publication introuvable"
      notFoundText="La publication que vous recherchez n'existe pas ou n'est plus disponible."
      defaultCategory="Publication"
      icon={BookOpen}
    />
  );
}
