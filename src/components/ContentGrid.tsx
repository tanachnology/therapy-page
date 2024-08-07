import React from "react";
import { ContactForm } from "./ContactForm";

export const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-bold">Terapia psicológica para adultos y niños(as) con Trastorno por Déficit de Atención e Hiperactividad (TDAH)):</h2>
      <p>
        Donde cada persona puede aprender a:
        Gestionar sus emociones de manera efectiva.
        Reconocer y comprender sus dificultades.
        Autocontrolar los impulsos y manejar la frustración.
        Afrontar los problemas con mayor asertividad.
        Aliviar la ansiedad, el estrés y la tristeza.
        Descubrir y aprovechar sus recursos personales.
        Mejorar la autoestima y el autoaprecio.
        Fortalecer las relaciones consigo mismo y con los demás.
      </p>
      </div>
      <div className="bg-gray-200 p-4">
        <img
          src="../../public/imagen2_grilla.png"
          alt="Imagen 2"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-gray-200 p-4">
        <h3>Atención a Niños y Adolescentes</h3>
        <p>
          El tratamiento de niños y adolescentes, requiere la participación activa de los padres. Por eso, ofrezco entrenamiento especializado para promover el bienestar psicoemocional y el adecuado desarrollo de sus hijos, previniendo problemas futuros. Además, coordino actividades con centros escolares y otros profesionales (psiquiatras, neuropediatras, logopedas, etc.).

          En este espacio terapéutico se fomenta una comprensión profunda de sí mismo(a) y/o de su hijo(a), facilitando un avance continuo en su desarrollo personal.
        </p>
      </div>
      <div className="bg-gray-200 p-4">
        <img
          src="../../public/imagen4_grilla.png"
          alt="Imagen 4"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-gray-200 p-4">
        <h2 className="text-xl font-bold">Aquí, cada persona puede aprender a:</h2>
        <ul className="list-disc pl-5">
          <li>Gestionar sus emociones con mayor facilidad.</li>
          <li>Ser mas consciente de sus dificultades.</li>
          <li>Aprender a autocrontolar los impulsos y manejar la frusración.</li>
          <li>Afrontar los problemas con mayor asertividad.</li>
          <li>Aliviar la ansiedad, el estrés y la tristeza.</li>
          <li>Conocer y utilizar sus recursos personales.</li>
          <li>Mejorar la percepción y el aprecio por sí mismo</li>
          <li>Fortalecer las relaciones consigo mismo y con los demás.</li>
        </ul>
      </div>
      <div className="bg-gray-200 p-4">
        <img
          src="../../public/imagen6_grilla.png"
          alt="Imagen 6"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
