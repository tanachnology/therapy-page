import { StaticBanner } from "@/components/StaticBanner";

export default function Blog() {
  const articles = [
    {
      image: "https://via.placeholder.com/400x300?text=Terapia",
      title: "Terapia Cognitivo-Conductual",
      description: "Descubre cómo la terapia cognitivo-conductual puede ayudarte a cambiar patrones de pensamiento negativos."
    },
    {
      image: "https://via.placeholder.com/400x300?text=TDAH",
      title: "TDAH en Niños",
      description: "Aprende sobre el Trastorno por Déficit de Atención e Hiperactividad y cómo manejarlo."
    },
    {
      image: "https://via.placeholder.com/400x300?text=Depresión",
      title: "Depresión Infantil",
      description: "Conoce los síntomas de la depresión en niños y cómo puedes ayudar."
    },
    {
      image: "https://via.placeholder.com/400x300?text=Ansiedad",
      title: "Ansiedad en Adolescentes",
      description: "Identifica los signos de ansiedad en adolescentes y las estrategias para afrontarla."
    },
    {
      image: "https://via.placeholder.com/400x300?text=Familia",
      title: "Terapia Familiar",
      description: "Explora cómo la terapia familiar puede mejorar la comunicación y resolver conflictos."
    }
  ];

  return (
    <>
      <StaticBanner
        backgroundImage="/blog.jpg"
        subtitle="Blogs"
        title="Conoce nuestros artículos"
      />
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{article.title}</h3>
                  <p className="text-gray-700 mb-4">{article.description}</p>
                  <button className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300">
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}