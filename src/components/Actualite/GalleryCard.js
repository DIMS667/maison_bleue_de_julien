import React from "react";

const GalleryCard = ({ activity }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <img
        src={activity}
        alt="Activité"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 border-4 border-transparent"></div>
    </div>
  );
};

export default GalleryCard;
// utilise ce composant pour les animation lie au images de la mbj