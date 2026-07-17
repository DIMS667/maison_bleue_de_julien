import React from 'react';

const ProgramCard = ({ program }) => {
  return (
    <article className="soft-card overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="aspect-[16/10] w-full object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-950">{program.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
      </div>
    </article>
  );
};

export default ProgramCard;
