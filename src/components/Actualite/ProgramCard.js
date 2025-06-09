import React from "react";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {program.title}
        </h3>
        <p className="text-sm text-gray-600">{program.description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
