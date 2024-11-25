import { StaticBanner } from "@/components/StaticBanner";

export default function Tdah() {
  return (
    <>
      <StaticBanner
        backgroundImage="/abstracto.jpg"
        subtitle="TDAH"
        title="Trastorno por Déficit de Atención e Hiperactividad"
      />
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Entendiendo el TDAH</h2>
          
          {/* Puntos Claves */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Los síntomas más característicos se clasifican en:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Falta de atención</li>
                <li>Hiperactividad</li>
                <li>Impulsividad</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Las causas son múltiples:</h3>
              <p className="text-gray-700">Factores genéticos, ambientales y neurológicos.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Los tratamientos incluyen:</h3>
              <p className="text-gray-700">Medicación, terapias psicológicas, apoyo educativo y social.</p>
            </div>
          </div>

          {/* Gráfica */}
          <div className="mb-10 flex flex-col items-center">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <img src="/prevalencia.png" alt="Gráfica de Prevalencia" className="w-[200px] h-64  rounded shadow-lg mx-auto" />
            </div>
            <div className="md:w-1/2 md:pl-5">
              <h2 className="text-2xl font-bold text-blue-700 m-2">Conferencia Mundial sobre TDAH de 2024</h2>
              <p className="text-gray-700 m-4">
                Este 3 y 4 de octubre, ADHD Australia y ADHD UK organizarán esta conferencia a la cual puede acceder: 
                <a href="https://globalconference.com" className="text-blue-500 underline ml-1">Global Conference</a>.
              </p>
            </div>
          </div>

          {/*Diagnosticos*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="/diagnostico.jpg" alt="Diagnóstico" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">La importancia de los medicamentos en combinación con otros tratamientos</h3>
                <p className="text-gray-700 mb-4">Una investigación dirigida por la Universidad de Southampton ha descubierto que los medicamentos juegan un papel importante en la mejora de la calidad de vida de las personas con TDAH, pero los autores sugieren que se necesita más apoyo, además de los medicamentos. </p>
                <a href="https://www.sciencedaily.com/releases/2024/08/240808115236.htm">
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Tratamiento" alt="Tratamiento" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Los adultos con TDAH resaltan la importancia del apoyo en el trabajo</h3>
                <p className="text-gray-700 mb-4">Se plantea que en España un 5,9% de menores y adolescentes y un 2,8% de adultos padecen este trastorno. Además que los especialistas resaltan que hay una gran parte de adultos sin diagnosticar y muchas veces se dan cuenta en la etapa laboral. En esta noticia por el día del TDAH se comparten varias experiencias de personas con TDAH, cómo es la calidad de vida laboral en relación con los síntomas del TDAH y algunas de sus necesidades. Seguir leyendo la noticia.</p>
                <a href="https://www.rtve.es/noticias/20231027/tdha-adultos-trabajo-dificultades/2459382.shtml">
                  <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                    Leer más
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Apoyo+Familiar" alt="Apoyo Familiar" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Apoyo Familiar</h3>
                <p className="text-gray-700 mb-4">El apoyo familiar es crucial para el manejo del TDAH, incluyendo la educación y la comunicación efectiva.</p>
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
              </div>
            </div>
          </div>


          {/* Cards de Información */}
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Noticias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Diagnóstico" alt="Diagnóstico" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">La importancia de los medicamentos en combinación con otros tratamientos</h3>
                <p className="text-gray-700 mb-4">Una investigación dirigida por la Universidad de Southampton ha descubierto que los medicamentos juegan un papel importante en la mejora de la calidad de vida de las personas con TDAH, pero los autores sugieren que se necesita más apoyo, además de los medicamentos. </p>
                <a href="https://www.sciencedaily.com/releases/2024/08/240808115236.htm">
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Tratamiento" alt="Tratamiento" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Los adultos con TDAH resaltan la importancia del apoyo en el trabajo</h3>
                <p className="text-gray-700 mb-4">Se plantea que en España un 5,9% de menores y adolescentes y un 2,8% de adultos padecen este trastorno. Además que los especialistas resaltan que hay una gran parte de adultos sin diagnosticar y muchas veces se dan cuenta en la etapa laboral. En esta noticia por el día del TDAH se comparten varias experiencias de personas con TDAH, cómo es la calidad de vida laboral en relación con los síntomas del TDAH y algunas de sus necesidades. Seguir leyendo la noticia.</p>
                <a href="https://www.rtve.es/noticias/20231027/tdha-adultos-trabajo-dificultades/2459382.shtml">
                  <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                    Leer más
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Apoyo+Familiar" alt="Apoyo Familiar" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Apoyo Familiar</h3>
                <p className="text-gray-700 mb-4">El apoyo familiar es crucial para el manejo del TDAH, incluyendo la educación y la comunicación efectiva.</p>
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
              </div>
            </div>
          </div>

          {/* Iconos y Texto */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Consejos para Padres</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12.34a9 9 0 11-9-9 9 9 0 019 9z"></path></svg>
                <p className="text-gray-700">Mantén una rutina diaria consistente.</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12.34a9 9 0 11-9-9 9 9 0 019 9z"></path></svg>
                <p className="text-gray-700">Establece expectativas claras y alcanzables.</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12.34a9 9 0 11-9-9 9 9 0 019 9z"></path></svg>
                <p className="text-gray-700">Proporciona instrucciones claras y concisas.</p>
              </div>
            </div>
          </div>

          {/* Imagen y Texto */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Historias de Éxito</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
              <img src="https://via.placeholder.com/400x300?text=Historia+de+Éxito" alt="Historia de Éxito" className="w-full md:w-1/2 h-48 object-cover rounded mb-4 md:mb-0 md:mr-4" />
              <p className="text-gray-700">Conoce las historias de éxito de niños y adolescentes que han aprendido a manejar el TDAH y han alcanzado sus metas.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}