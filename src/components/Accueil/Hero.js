import React from 'react';
import { FaDonate, FaUserPlus } from 'react-icons/fa';
import heroImage from '../../assets/images/hero.jpg';


export default function Hero() {
  return (
    <div className="relative bg-blue-10">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-70"
          src={heroImage}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex justify-end">
        <div className="text-right">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bienvenue à la Maison Bleue de Julien
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-blue-100">
          Notre association accompagne les personnes autistes et leurs familles en offrant un espace inclusif et chaleureux.
          </p>
          <div className="mt-10 flex justify-end space-x-4">
            <a
              href="/don"
              className="inline-flex items-center rounded-md bg-yellow-400 px-6 py-3 text-base font-medium text-blue-900 shadow hover:bg-yellow-500"
            >
              <FaDonate className="mr-2" /> Faire un Don
            </a>
            <a
              href="/adherer"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-700"
            >
              <FaUserPlus className="mr-2" /> Adhérer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
