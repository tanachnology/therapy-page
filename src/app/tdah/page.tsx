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
              <h3 className="text-xl font-bold text-blue-700 mb-2">Síntomas</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Falta de atención</li>
                <li>Hiperactividad</li>
                <li>Impulsividad</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Causas</h3>
              <p className="text-gray-700">El TDAH puede ser causado por factores genéticos, ambientales y problemas en el desarrollo del sistema nervioso central.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Tratamientos</h3>
              <p className="text-gray-700">Los tratamientos incluyen terapia conductual, medicamentos y apoyo educativo.</p>
            </div>
          </div>

          {/* Gráfica */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Prevalencia del TDAH</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/600x400?text=Gráfica+de+Prevalencia" alt="Gráfica de Prevalencia" className="w-full h-64 object-cover rounded" />
            </div>
          </div>

          {/* Barras de Progreso */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Progreso en el Tratamiento</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Mejora en la Atención</h4>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-700 h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Reducción de la Hiperactividad</h4>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-700 h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Control de la Impulsividad</h4>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-700 h-4 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards de Información */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Diagnóstico" alt="Diagnóstico" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Diagnóstico</h3>
                <p className="text-gray-700 mb-4">El diagnóstico del TDAH se realiza a través de una evaluación clínica que incluye entrevistas y cuestionarios.</p>
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src="https://via.placeholder.com/400x300?text=Tratamiento" alt="Tratamiento" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700 mb-2">Tratamiento</h3>
                <p className="text-gray-700 mb-4">El tratamiento del TDAH puede incluir medicamentos, terapia conductual y apoyo educativo.</p>
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                  Leer más
                </button>
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