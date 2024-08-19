'use client';

import { useState } from 'react';
import { StaticBanner } from "@/components/StaticBanner";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "¿Qué es la terapia cognitivo-conductual?", answer: "La terapia cognitivo-conductual es un tipo de terapia que ayuda a los individuos a identificar y cambiar patrones de pensamiento negativos y comportamientos problemáticos." },
    { question: "¿Cómo puede ayudar la terapia de juego a mi hijo?", answer: "La terapia de juego utiliza el juego para ayudar a los niños a expresar sus sentimientos, mejorar sus habilidades sociales y resolver conflictos." },
    { question: "¿Qué implica la terapia familiar?", answer: "La terapia familiar involucra a los miembros de la familia en el proceso terapéutico para mejorar la comunicación y resolver problemas familiares." },
    { question: "¿Qué es la terapia de arte?", answer: "La terapia de arte permite a los niños usar el arte como una forma de expresión y una herramienta para explorar sus emociones y experiencias." },
    { question: "¿Cuánto tiempo dura cada sesión de terapia?", answer: "Cada sesión de terapia generalmente dura entre 45 y 60 minutos, dependiendo de las necesidades del paciente." },
    { question: "¿Con qué frecuencia debo llevar a mi hijo a terapia?", answer: "La frecuencia de las sesiones de terapia depende de las necesidades individuales del niño y las recomendaciones del terapeuta." },
    { question: "¿Qué debo esperar en la primera sesión de terapia?", answer: "En la primera sesión de terapia, el terapeuta generalmente realiza una evaluación inicial para comprender las necesidades y objetivos del paciente." }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-5">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            className="w-full text-left text-xl font-semibold text-blue-700 py-2 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Faq() {
  return (
    <>
      <StaticBanner
        backgroundImage="../../../public/banner.png"
        subtitle="Frequently Asked Questions"
        title="¿Qué preguntas tienes?"
      />
      <FAQAccordion />
    </>
  )
}