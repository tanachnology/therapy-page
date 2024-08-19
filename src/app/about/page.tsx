"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaBrain,
  FaChild,
  FaUserGraduate,
  FaUserTie,
  FaCheck,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

interface SpecializationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TimelineItemProps {
  year: string;
  description: string;
}


const SpecializationCard: React.FC<SpecializationCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ year, description }) => (
  <div className="flex items-center mb-4">
    <div className="bg-[#46617e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
      {year}
    </div>
    <p>{description}</p>
  </div>
);

const About = () => {
  const [content, setContent] = useState("");

  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <div
            className="font-sans text-gray-800 p-6 bg-cover bg-center"
            style={{ backgroundImage: "url(/blueBg.jpg)" }}
          >
            {/* Áreas de Especialización */}
            <section className="py-10">
              <h2 className="text-3xl font-bold text-center mb-6">
                Áreas de Especialización
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SpecializationCard
                  icon={<FaBrain />}
                  title="Ansiedad"
                  description="Tratamiento especializado para la ansiedad."
                />
                <SpecializationCard
                  icon={<FaChild />}
                  title="Depresión"
                  description="Apoyo y tratamiento para la depresión."
                />
                <SpecializationCard
                  icon={<FaUserGraduate />}
                  title="Autoestima"
                  description="Fortalecimiento de la autoestima."
                />
                <SpecializationCard
                  icon={<FaUserTie />}
                  title="Problemas Escolares"
                  description="Intervención en problemas escolares."
                />
                <SpecializationCard
                  icon={<FaBrain />}
                  title="Experiencias Traumáticas"
                  description="Tratamiento de experiencias traumáticas."
                />
                <SpecializationCard
                  icon={<FaChild />}
                  title="Acoso"
                  description="Apoyo en casos de acoso."
                />
              </div>
            </section>

            {/* Experiencia en Terapia Psicológica */}
            <section className="py-10 bg-gray-100">
              <h2 className="text-3xl font-bold text-center mb-6">
                Experiencia en Terapia Psicológica
              </h2>
              <div className="flex flex-col items-center">
                <TimelineItem
                  year="2000"
                  description="Inicio de la carrera en psicología."
                />
                <TimelineItem
                  year="2005"
                  description="Especialización en TDAH."
                />
                <TimelineItem
                  year="2010"
                  description="Trabajo en hospitales y clínicas."
                />
                <TimelineItem
                  year="2015"
                  description="Fundación de consulta privada."
                />
                <TimelineItem
                  year="2020"
                  description="Más de 20 años de experiencia."
                />
              </div>
            </section>

            {/* Enfoque Personalizado y Desarrollo de Terapia */}
            <section className="py-10">
              <h2 className="text-3xl font-bold text-center mb-6">
                Enfoque Personalizado y Desarrollo de Terapia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Enfoque Personalizado
                  </h3>
                  <p>
                    Mi enfoque se basa en una conexión sencilla con cada
                    paciente y una convicción profunda en el poder curativo que
                    reside en cada uno.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Desarrollo de Terapia
                  </h3>
                  <p>
                    Desarrollamos las mejores estrategias para cada situación,
                    explorando diferentes perspectivas para dar nuevos
                    significados a las dificultades y lograr transformaciones.
                  </p>
                </div>
              </div>
            </section>

            {/* Cómo Saber si Soy la Psicóloga Adecuada */}
            <section className="py-10 bg-gray-100 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Cómo Saber si Soy la Psicóloga Adecuada
              </h2>
              <p className="mb-4">
                Puede reservar una sesión de consulta inicial para discutir sus
                expectativas y determinar si soy la persona adecuada para
                apoyarle en su proceso.
              </p>
              <button className="bg-[#46617e] text-white py-2 px-4 rounded-lg hover:bg-[#3B8BAE] transition-colors">
                Reservar Consulta
              </button>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-200 text-center">
              <p className="mb-2">
                Colegiada en Colegio de Psicología de Castilla-La Mancha,
                CM02285
              </p>
              <p className="mb-2">
                Doctora en Criminología y Delincuencia Juvenil
              </p>
              <p className="mb-2">
                Licenciada en psicología – especializada en Clínica y Educativa
              </p>
              <p className="mb-2">Máster en Psicología Clínica y de la Salud</p>
              <p className="mb-2">Máster en Terapia Cognitivo – Conductual</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaPhone />
                </a>
                <a
                  href="mailto:email@example.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaEnvelope />
                </a>
              </div>
            </footer>
          </div>
        );
      case "contact":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Primeros pasos para terapia
            </h2>
            <p>
              Si cree que puedo ser la profesional que necesita, me encantaría
              saber de usted. Juntos, evaluaremos si soy la persona adecuada
              para ayudarle.
            </p>
            <p>
              Puede reservar una sesión de consulta inicial para discutir sus
              expectativas y determinar si soy la persona adecuada para apoyarle
              en su proceso.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans text-gray-800 p-6 bg-cover bg-center">
      {/* Header Section */}
      <header
        className="text-center py-6"
        style={{ backgroundImage: "url(/blueBg.jpg)" }}
      >
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
          <Image
            src="/whiteProfile.jpeg"
            alt="Dra. Esmeralda Conde"
            width={144}
            height={144}
          />
        </div>
        <h1 className="text-3xl font-bold text-[#46617e]">
          Dra. Esmeralda Conde
        </h1>
        <h2 className="text-[#46617e]">Psicóloga Especialista en TDAH</h2>
      </header>

      <section className="text-center py-10 bg-white shadow-lg rounded-lg mx-6 mt-6">
        <h1 className="text-4xl font-extrabold text-[#46617e] mb-4">
          Bienvenidos
        </h1>
        <p className="text-lg font-medium text-gray-800 mb-2">
          Hola, soy la{" "}
          <span className="text-[#46617e] font-semibold">
            Dra. Esmeralda Conde
          </span>
          , psicóloga y criminóloga.
        </p>
        <p className="text-base text-gray-800">
          Mi enfoque se basa en una{" "}
          <span className="text-[#3B8BAE] font-bold">conexión sencilla</span>{" "}
          con cada paciente y una{" "}
          <span className="text-[#3B8BAE] font-bold">convicción profunda</span>{" "}
          en el poder curativo que reside en cada uno.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setContent("about")}
            className="bg-[#DDAD7A] text-white py-2 px-4 rounded-lg mr-2 hover:bg-[#f9dabade] transition-colors"
          >
            Acerca de Dra. Esmeralda Conde
          </button>
          <button
            onClick={() => setContent("contact")}
            className="bg-[#DDAD7A] text-white py-2 px-4 rounded-lg hover:bg-[#f9dabade] transition-colors"
          >
            Primeros pasos para terapia
          </button>
        
        </div>
        </section>
        {renderContent()}
      
    </div>
  );
};

export default About;
