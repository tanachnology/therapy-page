'use client';

import { BannerCarrousel } from "@/components/BannerCarrousel";
import { StaticBanner } from "@/components/StaticBanner";

export default function Services() {
  return (
    <>
      {/* <StaticBanner 
        backgroundImage="../../../public/banner.png"
        subtitle="Servicios"
        title="Conoce nuestros servicios"
      /> */}
      <BannerCarrousel 
        images=
        {[
          "/pizarra.jpg", 
          "/juego.jpg", 
          "/padreHijo.jpg", 
        ]}
      />
      <div className="p-5">
      <div className="flex justify-between">
        {/* Primera Columna */}
        <div className="flex-1 mr-5">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Terapia TDAH adultos</h2>
            <p className="text-gray-700">
              Tienes las fortalezas necesarias para conseguir tus metas. 
              Quizás requieras apoyo para descubrirlas y poder avanzar. 
              Puedes contar conmigo para ayudarte.
              Trabajamos en distintas áreas para mejorar los síntomas, sentirte mejor contigo mismo(a), con los demás y poder afrontar tu día a día.
            </p>
          
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Terapia TDAH niños y adolescentes
            </h2>
            <p className="text-gray-700">
              Se enfoca en mejorar el autocontrol, la atención, las funciones ejecutivas y la gestión de la impulsividad. Se trabajan habilidades sociales, emocionales y de organización para enfrentar mejor los retos académicos y personales. Además, se refuerza la autoestima y se enseñan estrategias de afrontamiento para manejar la frustración y el estrés. El objetivo es facilitar un desarrollo integral y equilibrado.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Entrenamiento padres
            </h2>
            <p className="text-gray-700">
              Aprendemos técnicas y principios para fomentar la disciplina constructiva, establecer límites claros y promover la comunicación efectiva. Los padres aprenden a manejar comportamientos desafiantes con paciencia y consistencia, reforzando el autocontrol y la autoestima en sus hijos. Además, se les brindan herramientas para crear un entorno familiar de apoyo que favorezca el desarrollo emocional y académico del niño.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Reeducación pedagógica para niños y adolescentes
            </h2>
            <p className="text-gray-700">
              Entrenamos las funciones ejecutivas como organización, planificación, manejo del tiempo y memoria de trabajo relacionadas, con los contenidos y tareas escolares. También técnicas de estudio y estrategias para regular la atención. Se fortalece la autoestima académica y se gestiona la frustración ante los deberes y evaluaciones. Los niños(as) aprenden a trabajar a partir del error como una vía necesaria en el aprendizaje.
              Se entrenan habilidades sociales, de comunicación y de resolución de problemas en el ámbito escolar.
            </p>
            <p>Para este tipo de tratamiento existen becas del Ministerio de Educación, que puedo orientaros para su solicitud. Becas y ayudas para alumnado con necesidad de apoyo educativo. (Becas y ayudas para alumnos con necesidad específica de apoyo educativo )</p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Talleres para adultos
            </h2>
            <p className="text-gray-700">
              Entrenamos las funciones ejecutivas como organización, planificación, manejo del tiempo y memoria de trabajo relacionadas, con los contenidos y tareas escolares. También técnicas de estudio y estrategias para regular la atención. Se fortalece la autoestima académica y se gestiona la frustración ante los deberes y evaluaciones. Los niños(as) aprenden a trabajar a partir del error como una vía necesaria en el aprendizaje.
              Se entrenan habilidades sociales, de comunicación y de resolución de problemas en el ámbito escolar.
            </p>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Evaluación
            </h2>
            <p className="text-gray-700">
              Mediante la utilización de algunas pruebas específicas (tanto en papel como con la plataforma Nesplora) se busca identificar de manera precisa los síntomas característicos del trastorno.
              Así como aportar información a los especialistas para diferenciar el TDAH de otras condiciones que puedan presentar síntomas similares, estableciendo un diagnóstico claro.
              La evaluación también proporciona una base para el tratamiento adecuado y ayudar a desarrollar estrategias de apoyo individualizadas.
            </p>
          </div>
          <button className="px-5 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
            Agendar Cita
          </button>
        </div>
        {/* Segunda Columna */}
        <div className="flex-1">
          <div className="mb-5">
            <img src="/lupa.jpg" />
          </div>
          <div className="mb-5">
            <img src="/terapiaTdh.jpg" alt="Terapia de Juego" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="/entrenamiento.jpg" alt="Terapia Familiar" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="/reeducacion.jpg" alt="Terapia de Arte" className="w-full rounded shadow-lg" />
          </div>
          <div className="mb-5">
            <img src="/talleresAdultos.jpg" />
          </div>
          <div className="mb-5">
            <img src="/evaluacion.jpg" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}