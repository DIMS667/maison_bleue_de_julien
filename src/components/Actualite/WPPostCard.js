// src/components/Actualite/WPPostCard.js
import React from 'react';
import { featuredImageUrl, postDateLabel } from '../../services/wp';

export default function WPPostCard({ post, onClick }) {
  const img = featuredImageUrl(post);
  const dateLabel = postDateLabel(post);

  return (
    <article
      className="rounded-2xl shadow p-4 cursor-pointer hover:shadow-md transition bg-white"
      onClick={() => onClick?.(post)}
    >
      {img && (
        <img
          src={img}
          alt=""
          className="w-full h-48 object-cover rounded-xl mb-3"
          loading="lazy"
        />
      )}
      <h3
        className="text-lg font-semibold mb-2"
        dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
      />
      <p className="text-sm text-gray-600 mb-2">{dateLabel}</p>
      <div
        className="text-gray-700 text-sm line-clamp-4"
        dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
      />
    </article>
  );
}
