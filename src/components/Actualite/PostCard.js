// src/components/Actualite/PostCard.js

import React from 'react';
import { FaCalendarAlt, FaHeart, FaUsers, FaPalette, FaCampground, FaNewspaper } from 'react-icons/fa';
import { articleImageUrl, articleDateLabel } from '../../services/api';

function getCategoryStyle(categoryName = '') {
  const name = categoryName.toLowerCase();

  if (name.includes('sensibilisation') || name.includes('social')) {
    return {
      icon: FaUsers,
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      iconGradient: 'from-blue-500 to-cyan-500',
      hover: 'group-hover:from-blue-400 group-hover:to-cyan-400',
    };
  }
  if (name.includes('famille') || name.includes('parent')) {
    return {
      icon: FaHeart,
      badge: 'bg-red-100 text-red-800 border-red-200',
      iconGradient: 'from-red-500 to-pink-500',
      hover: 'group-hover:from-red-400 group-hover:to-pink-400',
    };
  }
  if (name.includes('créat') || name.includes('art') || name.includes('atelier')) {
    return {
      icon: FaPalette,
      badge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      iconGradient: 'from-cyan-500 to-blue-500',
      hover: 'group-hover:from-cyan-400 group-hover:to-blue-400',
    };
  }
  if (name.includes('camp') || name.includes('vacances')) {
    return {
      icon: FaCampground,
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      iconGradient: 'from-blue-500 to-cyan-500',
      hover: 'group-hover:from-blue-400 group-hover:to-cyan-400',
    };
  }

  return {
    icon: FaNewspaper,
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    iconGradient: 'from-blue-500 to-cyan-500',
    hover: 'group-hover:from-blue-400 group-hover:to-cyan-400',
  };
}

export default function PostCard({ article, onClick }) {
  const style = getCategoryStyle(article?.category?.name);
  const IconComponent = style.icon;
  const imgSrc = articleImageUrl(article); // plus de fallback
  const dateLabel = articleDateLabel(article);
  const categoryName = article?.category?.name || 'Actualité';

  const getExcerpt = () => {
    if (article?.excerpt) return article.excerpt;
    if (!article?.content) return '';
    const div = document.createElement('div');
    div.innerHTML = article.content;
    const text = div.textContent || div.innerText || '';
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onClick?.(article)}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />

      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-blue-100 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">

        {/* Badge catégorie + icône */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${style.badge}`}>
            {categoryName}
          </span>
          <div className={`w-10 h-10 bg-gradient-to-br ${style.iconGradient} ${style.hover} rounded-full flex items-center justify-center transition-all duration-300`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Image — affichée seulement si elle existe */}
        {imgSrc && (
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <img
              src={imgSrc}
              alt={article?.title || ''}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Contenu */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {article?.title}
          </h3>

          <p className="text-gray-600 leading-relaxed flex-1 text-sm mb-4 line-clamp-3">
            {getExcerpt()}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <FaHeart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-600 font-medium">Maison Bleue de Julien</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <FaCalendarAlt className="w-3 h-3" />
              <span>{dateLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}