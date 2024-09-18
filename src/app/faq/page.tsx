'use client';

import { useState } from 'react';
import { StaticBanner } from "@/components/StaticBanner";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "¿QUÉ ES EL TDAH?", answer: "El trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del desarrollo de la habilidad para regular el propio comportamiento y para prever el futuro (Rusel Barkley) (enviar al enlace: https://www.russellbarkley.org/). Afecta a millones de niños y a menudo continúa en la edad adulta.Para Barkley es un trastorno del desarrollo del autocontrol, englobando los problemas para mantener la atención y para controlar los impulsos y el nivel de actividad. Estos problemas se reflejarán en el deterioro de la voluntad, en el control de la conducta a lo largo del tiempo y para mantener en la memoria las metas y consecuencias futuros.Este trastorno no se debe a un fracaso de los padres en la crianza de su hijo(a).En el Manual Diagnóstico y Estadístico (DSM-5) se define como un patrón persistente de inatención y/o hiperactividad-impulsividad que interfiere con el funcionamiento o el desarrollo" },
    { question: "¿CÚALES SON LOS SÍNTOMAS DEL TDAH?", answer: "La terapia de juego utiliza el juego para ayudar a los niños a expresar sus sentimientos, mejorar sus habilidades sociales y resolver conflictos." },
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
        backgroundImage="/ask.jpg"
        subtitle="Frequently Asked Questions"
        title="¿Qué preguntas tienes?"
      />
      <FAQAccordion />
    </>
  )
}