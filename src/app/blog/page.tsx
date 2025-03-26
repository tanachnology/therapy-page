'use client';
import { useState } from "react";
import { StaticBanner } from "@/components/StaticBanner";
import htmlParser from "html-react-parser";
import Link from 'next/link';

export interface IArticle {
  id: number;
  title: string;
  content: string;
  image_url: string;
  summary: string;
}

// Artículos estáticos
const staticArticles: IArticle[] = [
  {
    id: 1,
    title: "Sobre el TDAH: Conceptos actuales y tratamientos",
    summary: "Sobre el TDAH, se sigue aclarando desde su concepto hasta la eficacia de los tratamientos. Te presento un artículo sobre los temas más debatidos actualmente.",
    content: `Este resumen del artículo: ADHD: Current Concepts and Treatments in Children and Adolescents (https://www.thieme-connect.de/products/ejournals/pdf/10.1055/s-0040-1701658.pdf) es una descripción breve sobre los principales puntos de debate actuales.

Sobre el concepto del TDAH, se dice que actualmente hay dificultades para encontrar marcadores neurobiológicos claros; así como una falta de criterios objetivos a la hora de dar su diagnóstico. Con lo cual sigue siendo necesario una buena entrevista, revisión de toda la información y la observación clínica, es decir, el juicio clínico del especialista para determinar un diagnóstico.

También se debate si el TDAH debería considerarse como un espectro dimensional, es decir, que las características del TDAH, como la inatención, la impulsividad y la hiperactividad, pueden estar presentes en diferentes grados en todas las personas. Esta idea puede poner en cuestión considerarlo como un trastorno. Actualmente, el TDAH se clasifica según la presencia o ausencia de determinadas conductas (criterio categorial).

Otro punto de debate son las comorbilidades, es decir, que el TDAH suele presentarse junto a otros trastornos neuropsiquiátricos como el Trastorno de Conducta, el Trastorno Oposicionista Desafiante, los trastornos de aprendizaje y los trastornos de ansiedad y depresión. La presencia de comorbilidades puede complicar el diagnóstico diferencial, ya que los síntomas del TDAH pueden superponerse con los de otros trastornos. Además, la regulación emocional y la irritabilidad son características comunes que pueden aumentar el riesgo de desarrollar problemas adicionales​.

El tratamiento del TDAH es otro tema controvertido. Las guías recomiendan un enfoque multimodal que combine la medicación, como metilfenidato o atomoxetina, con intervenciones psicosociales y educativas. Sin embargo, existen preocupaciones sobre los efectos secundarios a largo plazo de los estimulantes, especialmente en niños(as). Además, aunque las intervenciones conductuales han demostrado ser útiles, su eficacia inmediata es menor en comparación con la medicación, lo que plantea preguntas sobre su lugar en el tratamiento y abre la posibilidad de nuevas investigaciones que hagan seguimiento prolongado de los pacientes.

Otro aspecto debatido es el uso de neurofeedback y estimulación cerebral no invasiva como posibles alternativas terapéuticas. Aunque estas técnicas han mostrado cierto potencial en la mejora de síntomas cognitivos y conductuales, los estudios que las respaldan aún no son concluyentes y, su aplicación clínica generalizada no está completamente recomendada. En conjunto, el tratamiento del TDAH sigue siendo un desafío desde múltiples disciplinas y requiere ajustes para cada persona.

Como podemos concluir del artículo, cada vez sabemos mucho más sobre el TDAH, pero no está todo completamente claro ni demostrado. Así que la experiencia de cada familia y de cada persona con TDAH es fundamental para hacernos nuevas preguntas y seguir obteniendo resultados que ayuden en su comprensión y en su tratamiento.`,
    image_url: "/cerebro.jpg"
  },
  {
    id: 2,
    title: "Cómo afecta el TDAH el aprendizaje de la lectura",
    summary: "El artículo revisa cómo el Trastorno por Déficit de Atención con Hiperactividad (TDAH) afecta el aprendizaje de la lectura. Es decir, que los niños(as) con este trastorno pueden presentar algunas dificultades.",
    content: `Los autores revisan en otros estudios cómo el TDAH afecta la adquisición de habilidades lectoras, la decodificación de palabras y la comprensión lectora, lo cual tiene implicaciones importantes para proponer estrategias necesarias a la hora de enseñar a leer y a escribir a estos niños(as).

En primer lugar, en el artículo destacan que el TDAH impacta directamente en la adquisición de la lectura al influir sobre los precursores de la lectura, como el procesamiento fonológico, la velocidad de denominación y el conocimiento de las letras. La falta de atención puede retrasar el aprendizaje de las asociaciones grafema-fonema y la formación de representaciones ortográficas, fundamentales para la lectura fluida y precisa. En este sentido, investigaciones muestran que los síntomas de inatención afectan la decodificación de palabras, aunque el grado de impacto varía según el nivel de desarrollo de los precursores.

Otro aspecto clave es la influencia del TDAH en la decodificación lectora, que depende de la correcta aplicación de reglas fonológicas. Los niños con TDAH suelen mostrar una menor velocidad y precisión en la decodificación, lo que afecta su fluidez lectora. Aunque puedan mejorar con el tiempo, el progreso es más lento en comparación con otros niños(as). Además, se ha observado que los niños(as) con TDAH tienen dificultades para automatizar los mecanismos de decodificación, lo que genera una lectura más lenta e imprecisa.

La comprensión lectora también se ve afectada, ya que el TDAH interfiere en la capacidad de mantener la atención durante la lectura, dificultando el procesamiento semántico y la recodificación de la información clave. Estudios revelan que los niños(as) con TDAH tienen dificultades al establecer relaciones entre las ideas principales de un texto, especialmente cuando deben dar respuestas abiertas, lo que sugiere un déficit en la memoria de trabajo verbal.

En cuanto a las recomendaciones prácticas, el artículo resalta la importancia de identificar tempranamente las dificultades lectoras en niños con TDAH, enfocándose en la intervención sobre los precursores de la lectura, como la conciencia fonológica y el vocabulario. Además, se sugiere adaptar las evaluaciones escolares para estos niños, utilizando preguntas cerradas que no dependan tanto de su capacidad de identificar las ideas centrales de los textos.

Finalmente, el artículo enfatiza la necesidad de continuar investigando cómo el TDAH afecta la lectura en diferentes idiomas y utilizando medidas neuropsicológicas más avanzadas para comprender mejor los mecanismos cognitivos involucrados.

Al detectar a tiempo que un niño(a) tiene dificultades para aprender la lectura, podremos ayudarle creando un método más acorde a sus necesidades y que les plantee una motivación y confianza en ellos, para que no terminen creyendo que son menos capaces o tristemente no quieran leer.

Artículo revisado: Sánchez-Carmona A. et al (2023). El impacto del TDAH sobre la lectura. MEDICINA (Buenos Aires). Vol. 83 (Supl. II): 22-26.`,
    image_url: "/nino.jpg"
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<IArticle | null>(null);

  const handleArticleClick = (article: IArticle) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <StaticBanner
        backgroundImage="/investigacion.jpg"
        subtitle="Blog"
        title="Conoce investigaciones sobre TDAH"
      />
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {selectedArticle ? (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <button 
                onClick={handleBackToList}
                className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300 mb-4"
              >
                ← Volver
              </button>
              <img src={selectedArticle.image_url} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h1 className="text-3xl font-bold text-blue-700 mb-4">{selectedArticle.title}</h1>
              <div className="text-gray-700 space-y-4">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-base">{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="font-bold text-center text-blue-700 mb-10">
                <span className="text-3xl p-5">Artículos Recientes</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staticArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-blue-700 mb-2">{article.title}</h3>
                      <p className="text-gray-700 mb-4 line-clamp-4">{article.summary}</p>
                      <button 
                        className="px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition duration-300"
                        onClick={() => handleArticleClick(article)}
                      >
                        Leer más
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}