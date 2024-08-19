'use client';

import { StaticBanner } from "@/components/StaticBanner";

export default function Services() {
  return (
    <>
      <StaticBanner 
        backgroundImage="../../../public/banner.png"
        subtitle="Servicios"
        title="Conoce nuestros servicios"
      />
      <div className="p-5">
      <div className="flex justify-between">
        {/* Primera Columna */}
        <div className="flex-1 mr-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Terapia Cognitivo-Conductual</h2>
            <p className="text-gray-700">La terapia cognitivo-conductual ayuda a los niños a identificar y cambiar patrones de pensamiento negativos y comportamientos problemáticos.</p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Terapia de Juego</h2>
            <p className="text-gray-700">La terapia de juego utiliza el juego para ayudar a los niños a expresar sus sentimientos, mejorar sus habilidades sociales y resolver conflictos.</p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Terapia Familiar</h2>
            <p className="text-gray-700">La terapia familiar involucra a los miembros de la familia en el proceso terapéutico para mejorar la comunicación y resolver problemas familiares.</p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Terapia de Arte</h2>
            <p className="text-gray-700">La terapia de arte permite a los niños usar el arte como una forma de expresión y una herramienta para explorar sus emociones y experiencias.</p>
          </div>
          <button className="px-5 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
            Agendar Cita
          </button>
        </div>
        {/* Segunda Columna */}
        <div className="flex-1">
          <div className="mb-5">
            <img src="https://via.placeholder.com/400x300?text=Terapia+Cognitivo-Conductual" alt="Terapia Cognitivo-Conductual" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="https://via.placeholder.com/400x300?text=Terapia+de+Juego" alt="Terapia de Juego" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="https://via.placeholder.com/400x300?text=Terapia+Familiar" alt="Terapia Familiar" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="https://via.placeholder.com/400x300?text=Terapia+de+Arte" alt="Terapia de Arte" className="w-full rounded shadow-lg" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}