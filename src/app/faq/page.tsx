'use client';

import { useState } from 'react';
import { StaticBanner } from "@/components/StaticBanner";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "¿Qué es el TDAH?", answer: (
      <div className="p-4 space-y-4">
      <p>
        Según Russell A. Barkley, el trastorno por Déficit de Atención e
        Hiperactividad (TDAH) es un trastorno del desarrollo de la habilidad para
        regular el propio comportamiento y para prever el futuro.
      </p>
      <p>
        Afecta a millones de niños y a menudo continúa en la edad adulta.
      </p>
      <p>
        Para Barkley, es un trastorno del desarrollo del autocontrol, englobando
        los problemas para mantener la atención y para controlar los impulsos y
        el nivel de actividad. Estos problemas se reflejarán en el deterioro de
        la voluntad, en el control de la conducta a lo largo del tiempo y para
        mantener en la memoria sus metas y sus consecuencias futuras.
      </p>
      <p>
        Este trastorno no se debe a un fracaso de los padres en la crianza de su
        hijo(a), pero unos padres que conocen el trastorno, lo aceptan y aprenden
        nuevas dinámicas familiares, pueden hacer que el trastorno no genere
        complicaciones graves a mediano y largo plazo (autoestima, conductas
        antisociales, fracaso escolar, aislamiento, etc.).
      </p>
      <p>
        En el <span className="italic">Manual Diagnóstico y Estadístico</span>{" "}
        (DSM-5) se define como un “patrón persistente de inatención y/o
        hiperactividad-impulsividad que interfiere con el funcionamiento o el
        desarrollo”.
      </p>
      <p>
        Sobre el TDAH y la importancia de afrontarlo, dos buenas guías para los
        padres y para adultos con TDAH son los siguientes libros:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <p>
            <span className="italic">Niños hiperactivos. Cómo comprender y atender sus necesidades especiales. Guía completa del Trastorno de Déficit de Atención con Hiperactividad (TDAH).</span> Russell A. Barkley.
          </p>
        </li>
        <li>
          <p>
            <span className="italic">Tomar el control del TDAH en la edad adulta.</span> Russell A. Barkley.
          </p>
        </li>
      </ul>
    </div>

    ) },
    { question: "¿Cúales son los síntomas del TDAH?", answer: (
      <div className="p-6 space-y-6">
      <p>
        Las características principales del TDAH se clasifican en{" "}
        <span className="font-bold">inatención</span> e{" "}
        <span className="font-bold">hiperactividad-impulsividad</span>. Los
        síntomas descritos en el manual <span className="italic">DSM-5</span>{" "}
        son los siguientes:
      </p>

      <ul className="list-disc pl-8 space-y-4">
        <li>
          <p className="font-bold">Inatención</p>
        </li>
        <li>Fallos en la atención a los detalles o errores por descuido en tareas escolares, laborales o de otras actividades.</li>
        <li>Dificultades para mantener la atención en tareas o actividades recreativas.</li>
        <li>Aparentemente no escuchar cuando se le habla directamente.</li>
        <li>No sigue las instrucciones y no termina las tareas escolares, los quehaceres o los deberes laborales.</li>
        <li>Tiene dificultad para organizar tareas y actividades.</li>
        <li>Evita, le disgusta o se muestra poco entusiasta en iniciar tareas que requieren un esfuerzo mental sostenido.</li>
        <li>Pierde cosas necesarias para tareas o actividades.</li>
        <li>Se distrae con facilidad por estímulos externos.</li>
        <li>Olvida las actividades cotidianas.</li>
        <li>
          <p className="font-bold">Hiperactividad e impulsividad</p>
        </li>
        <li>Juguetea con o golpea las manos o los pies o se retuerce en el asiento.</li>
        <li>Se levanta en situaciones en que se espera que permanezca sentado.</li>
        <li>Corretea o trepa en situaciones en las que no resulta apropiado.</li>
        <li>Es incapaz de jugar o de ocuparse tranquilamente en actividades recreativas.</li>
        <li>Está ocupado, actuando como si lo impulsara un motor.</li>
        <li>Habla excesivamente.</li>
        <li>Responde inesperadamente o antes de que se haya concluido una pregunta.</li>
        <li>Le es difícil esperar su turno.</li>
        <li>Interrumpe o se inmiscuye con otros.</li>
      </ul>

      <p>
        Los síntomas deben haberse mantenido durante al menos 6 meses en un grado que no concuerda con el nivel de desarrollo y que afecta directamente las actividades sociales y académicas/laborales. Además, algunos síntomas estaban presentes antes de los 12 años, en dos o más contextos (familiar, escolar).
      </p>

      <p>
        Debemos tener en cuenta que el comportamiento hiperactivo o la inatención pueden ser parte del desarrollo de todos los niños, por eso es fácil entender por qué muchas personas les puede parecer que no existe.
      </p>

      <blockquote className="italic border-l-4 border-blue-500 pl-4">
        “…el TDAH no es sólo la hiperactividad o desatención de un momento o la
        incapacidad de hacer los deberes de cada día, sino un relativo deterioro
        en cómo se organiza y dirige la conducta hacia el futuro” (Russell
        Barkley).
      </blockquote>
    </div>

    ) },
    { question: "¿Cúales son las causas del TDAH?", answer: (
      <div className="p-6 space-y-6">
      <p>
        La causa exacta del TDAH aún no se conoce. Pero distintas
        investigaciones han relacionado su desarrollo a factores{" "}
        <span className="font-bold">genéticos</span>,{" "}
        <span className="font-bold">medioambientales</span> o problemas en el{" "}
        <span className="font-bold">sistema nervioso central</span>.
      </p>
      <p>Te presento algunas conclusiones de varios estudios:</p>

      <p>
        Los factores biológicos son los que están más relacionados con el TDAH,
        existiendo una contribución genética muy fuerte. Los estudios con
        familias y gemelos determinan el riesgo de que otros miembros de la
        familia padezcan TDAH si alguno de ellos lo presenta. La herencia
        explicaría entre un 55% a un 97% la hiperactividad e impulsividad.
      </p>

      <p>
        Los investigadores están realizando actualmente estudios que evalúan a
        todos los familiares de niños con TDAH para identificar cómo se
        transmite el trastorno de una generación a la siguiente, planteándose
        muchas preguntas:
      </p>

      <ul className="list-disc pl-8 space-y-2">
        <li>¿Es un gen o son varios?</li>
        <li>¿Hay relación con el sexo del niño?</li>
        <li>¿Se puede localizar este gen o genes en un cromosoma específico?</li>
      </ul>

      <p>
        Otros factores relacionados son las sustancias consumidas durante el
        embarazo, específicamente la nicotina y el alcohol. Estas sustancias
        pueden causar anormalidades en algunas zonas de la región frontal del
        cerebro del niño, dando lugar a un incremento de la hiperactividad, la
        impulsividad y la desatención.
      </p>

      <p>
        Algunas investigaciones sugieren que la exposición al humo de los
        cigarrillos está relacionada con un mayor riesgo de padecer problemas de
        conducta.
      </p>

      <p>
        La cantidad de alcohol consumido por las madres durante el embarazo está
        directamente relacionada con el riesgo de presentar déficit de atención
        e hiperactividad en niños entre cuatro y siete años de edad.
      </p>

      <p>
        La exposición al plomo de niños entre 12 y 36 meses de edad está
        relacionada con un riesgo alto de presentar conductas de hiperactividad
        y desatención. Los estudios han demostrado que las exposiciones a
        niveles de plomo de moderados a altos pueden dañar el tejido cerebral.
      </p>
    </div>

    ) },
    { question: "¿Qué personas puedes tener TDAH?", answer: (
      <div className="p-6 space-y-6 text-gray-800">
      <p>
        El TDAH tiene una prevalencia en la infancia de un <span className="font-bold">4 - 12%</span> 
        y con un importante impacto en diferentes áreas vitales.
      </p>

      <p>
        Es de señalar que actualmente, es uno de los trastornos infantiles más diagnosticados. 
        Si bien los síntomas suelen disminuir en la adolescencia, se ha calculado que dos tercios 
        de los niños con TDAH, seguirán presentando sintomatología en la edad adulta, un <span className="font-bold">15%</span> 
        mantendrá un diagnóstico completo y un <span className="font-bold">50%</span> estará en remisión parcial, siendo la 
        prevalencia en la edad adulta entre el <span className="font-bold">3 - 5%</span>.
      </p>

      <p>
        Los adultos pueden presentar constantes problemas interpersonales, consumo de alcohol o drogas, 
        o trastornos de la personalidad. También pueden referir problemas de concentración, desorganización, 
        impulsividad, labilidad emocional, actividad excesiva, mal genio e intolerancia al estrés.
      </p>

      <p>
        Aunque la etiología del TDAH es poco conocida, se sabe que existen factores ambientales y genéticos 
        que contribuyen en su aparición, como señalábamos antes.
      </p>

      <p>
        Diferentes estudios encuentran una fuerte contribución genética entre los factores que lo causan. 
        Existe una tasa del <span className="font-bold">76 - 80%</span> de riesgo de padecer el trastorno cuando alguno 
        de los padres también tiene el diagnóstico de TDAH.
      </p>

      <p>
        El TDAH también se asocia a cambios macroanatómicos en múltiples regiones del cerebro. 
        En el metaanálisis de Hoogman y otros autores de 2017, se demuestran volúmenes significativamente 
        más pequeños en casos de TDAH en diferentes regiones, pero no se ha determinado cómo se manifiestan estos cambios.
      </p>

      <p>
        Existen también estudios sobre el engrosamiento cortical en las áreas prefrontales y la hipoactivación 
        durante tareas de inhibición de respuesta en las regiones frontal y parietal, así como el tálamo, los ganglios 
        basales y la corteza cingulada.
      </p>

      <p>
        El subtipo más común del TDAH es el combinado tanto en la infancia como en la edad adulta. Los síntomas 
        que se presentan durante la infancia van evolucionando: disminuye la hiperactividad e impulsividad y 
        se hacen más frecuentes los problemas de atención. Además, aparecen comorbilidades con otros trastornos mentales.
      </p>

      <p>
        Además de los síntomas propios del TDAH pueden aparecer desequilibrios emocionales, irritabilidad, 
        conductas disruptivas, conductas desafiantes, déficit cognitivo y problemas de aprendizaje.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-600">
        Según Barkley, R. (2011), las personas con TDAH tienen un desarrollo más lento y un funcionamiento diferente 
        en dos áreas: la inhibición y la atención.
      </blockquote>

      <ul className="list-disc pl-8 space-y-2">
        <li>
          Las dificultades con la inhibición, relacionadas con la hiperactividad/impulsividad, se manifiestan en:
          disminución del control de los impulsos verbales y motores; toma de decisiones impulsivas; dificultad para aplazar 
          la gratificación o esperar un evento nuevo; ignorar consecuencias; impulsividad emocional y escasa autorregulación emocional.
        </li>
        <li>
          Por otra parte, Barkley, R. (2011), informa que muchos estudios han demostrado que el TDAH afecta principalmente 
          al área de atención, relacionada con la persistencia para realizar una tarea o lograr un objetivo. Es decir, la capacidad 
          de mantener acciones dirigidas hacia objetivos durante mucho tiempo, resistencia a distracciones y reanudación de tareas.
        </li>
      </ul>

      <p>
        Tanto las áreas de inhibición y control de impulsos como la memoria de trabajo, son funciones ejecutivas. Por ello, 
        los síntomas del TDAH reflejan una disfunción en varias funciones ejecutivas, lo que puede proponerse como un 
        <span className="italic"> trastorno del funcionamiento ejecutivo </span> (Barkley, R., 2011).
      </p>
    </div>
    ) },
    { question: "¿Se puede prevenir el TDAH?", answer: (
      <div className="p-6 space-y-6 text-gray-800">
      <p>
        <span className="font-bold">Tenga en cuenta:</span> Aún no se conoce exactamente qué causa el TDAH, 
        pero se han establecido factores de riesgo. Por lo tanto, podría ser importante para reducir el riesgo:
      </p>

      <p>
        <span className="font-bold">Evitar:</span> El consumo de alcohol, nicotina y otras drogas durante el embarazo. 
        Proteger a los niños de estar en contacto con sustancias dañinas como el plomo y el humo del cigarrillo.
      </p>

      <p>
        Existen pautas que pueden ayudar a reducir la intensidad de los síntomas en niños propensos a desarrollar TDAH:
      </p>

      <ol className="list-decimal pl-8 space-y-4">
        <li>
          <span className="font-bold">Ambiente estructurado:</span> Establecer rutinas diarias claras y consistentes en casa.
        </li>
        <li>
          <span className="font-bold">Alimentación equilibrada:</span> Promover una dieta rica en nutrientes, evitando 
          alimentos procesados y azúcares excesivos.
        </li>
        <li>
          <span className="font-bold">Estimular el desarrollo emocional:</span> Fomentar el autocontrol, la regulación emocional 
          y habilidades sociales a través del juego y la comunicación abierta.
        </li>
        <li>
          <span className="font-bold">Fomentar la actividad física:</span> El ejercicio regular ayuda a mejorar la concentración 
          y reducir la hiperactividad.
        </li>
        <li>
          <span className="font-bold">Limitar el tiempo de pantallas:</span> Reducir el uso excesivo de dispositivos electrónicos 
          para evitar la sobreestimulación.
        </li>
        <li>
          <span className="font-bold">Dormir bien:</span> Asegurar una buena rutina de sueño para mejorar la atención y el comportamiento.
        </li>
        <li>
          <span className="font-bold">Establecer límites y normas claros:</span> Ajustados a cada edad, para que los niños 
          aprendan a postergar la gratificación y manejar la frustración.
        </li>
      </ol>

      <p>
        <span className="italic">Estas pautas son muy beneficiosas para el desarrollo de todos los niños(as).</span>
      </p>
    </div>

    ) },
    { question: "¿Qué complicaciones puede tener mi hija(a)?", answer: (
      <div className="p-6 space-y-6 text-gray-800">
      <p>
        Los niños, adolescentes y adultos con <span className="font-bold">TDAH</span> pueden enfrentar otras dificultades 
        derivadas de sus síntomas, siendo más complejas y graves cuando no hay un tratamiento. Algunas de las más comunes son:
      </p>

      <ol className="list-decimal pl-8 space-y-4">
        <li>
          <span className="font-bold">Bajo rendimiento académico o laboral:</span> Dificultades para concentrarse y completar 
          tareas que pueden llevar a un mal desempeño.
        </li>
        <li>
          <span className="font-bold">Problemas sociales:</span> La impulsividad y la falta de atención pueden dificultar la 
          relación con amigos y compañeros, lo que lleva a conflictos y aislamiento social.
        </li>
        <li>
          <span className="font-bold">Baja autoestima:</span> Las dificultades recurrentes y la frustración pueden impactar 
          negativamente la autoimagen y el autoconcepto.
        </li>
        <li>
          <span className="font-bold">Problemas familiares:</span> La conducta impulsiva y la hiperactividad pueden generar 
          tensiones en las relaciones familiares.
        </li>
        <li>
          <span className="font-bold">Riesgo de accidentes:</span> La impulsividad y falta de atención aumentan la probabilidad 
          de accidentes, especialmente en la conducción.
        </li>
        <li>
          <span className="font-bold">Trastornos comórbidos:</span> El TDAH a menudo se asocia con otros trastornos, como ansiedad, 
          depresión, trastornos de conducta y problemas de aprendizaje.
        </li>
      </ol>

      <p className="italic">
        Estas complicaciones pueden afectar la calidad de vida si no se manejan adecuadamente.
      </p>
    </div>

    ) },
    { question: "¿Qué medicación se utiliza en el TDAH y cómo funciona?", answer: (
      <div className="p-6 bg-gray-50 text-gray-800 rounded-md space-y-6">
      <p>
        Para tratar el <span className="font-bold">TDAH</span>, se utilizan principalmente dos tipos de medicamentos:{" "}
        <span className="font-bold">estimulantes</span> y <span className="font-bold">no estimulantes</span>. Estos ayudan a
        mejorar la concentración, reducir la hiperactividad y controlar la impulsividad.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">
          1. <span className="font-bold">Medicamentos estimulantes:</span>
        </h3>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Son los más comunes y efectivos para el tratamiento del TDAH. Actúan aumentando los niveles de dopamina y
            norepinefrina en el cerebro, lo que mejora la atención y el control de impulsos.
          </li>
          <li>
            <span className="font-semibold">Ejemplos:</span>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Metilfenidato (Ritalin, Concerta)</li>
              <li>Anfetaminas (Adderall, Vyvanse)</li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-4">
          2. <span className="font-bold">Medicamentos no estimulantes:</span>
        </h3>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Se usan cuando los estimulantes no son efectivos o producen efectos secundarios no deseados. Actúan de manera
            más gradual y pueden ayudar a mejorar la atención sin causar tanta estimulación.
          </li>
          <li>
            <span className="font-semibold">Ejemplos:</span>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Atomoxetina (Strattera)</li>
              <li>Guanfacina (Intuniv)</li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="text-gray-700">
        El tratamiento debe ser siempre supervisado por un médico, ya que cada niño responde de manera diferente a los
        medicamentos y puede requerir ajustes en la dosis o tipo de medicamento.
      </p>

      <p className="text-gray-700">
        El tratamiento farmacológico del <span className="font-bold">TDAH</span> se considera seguro y efectivo, tanto en la
        infancia como en la edad adulta. Ha demostrado mejorar el impacto en diversas áreas de la vida del afectado y
        disminuir las tasas de comorbilidad asociadas, logrando un mejor pronóstico.
      </p>

      <p className="text-gray-700">
        En la mayoría de los casos, el tratamiento farmacológico debe combinarse con otros tratamientos psicosociales y
        educativos. Estos últimos son esenciales para cambiar dinámicas familiares y escolares que podrían agravar los
        síntomas. Además, ayudan al niño(a) a interiorizar estrategias para regular la atención, conducta, emociones e
        impulsividad. Por esta razón, se recomienda la combinación de tratamientos.
      </p>
    </div>

    ) },
    { question: "¿Todas las personas con TDAH deben tomar medicación?", answer: (
      <div className="p-6 bg-gray-50 text-gray-800 rounded-md space-y-6">
      <p>
        La medicación para el <span className="font-bold">TDAH</span> puede ser necesaria para muchas personas que presentan
        síntomas muy intensos que interfieren significativamente en su vida diaria. La decisión de medicar depende de varios
        factores y debe tomarse en conjunto con el médico.
      </p>

      <p>
        Es importante señalar que, aunque se decida que la medicación es necesaria, la mejora de los síntomas y del impacto en
        la vida requiere que cada afectado de <span className="font-bold">TDAH</span> aprenda a gestionar sus comportamientos.
        También es esencial contar con apoyo educativo o laboral, mantener una dieta saludable, realizar ejercicio regular e
        intervenir en otras complicaciones como ansiedad, baja autoestima o el control de la ira.
      </p>

      <p>
        Si bien la medicación puede ser eficaz, no es la única solución. Es fundamental combinarla con otros tratamientos, como:
      </p>

      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        <li>Terapia psicológica</li>
        <li>Seguimiento médico</li>
        <li>Apoyo familiar</li>
        <li>Apoyo social</li>
        <li>Reeducación pedagógica</li>
      </ul>
    </div>
    ) },
    { question: "Para saber mas", answer: (
      <div className="p-6 bg-white rounded-md shadow-lg space-y-4">
      <p className="text-xl font-semibold text-gray-800">Libros que pueden ayudar a comprender aún más:</p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>
          <p>
            <span className="font-bold">Barkley, R. A.</span> (2016). 
            <em className="italic">Niños hiperactivos: Cómo comprender y atender sus necesidades especiales</em> (3ª ed.). 
            Paidós. ISBN: 9788449331464.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Guerrero, R.</span> (2018). 
            <em className="italic">Trastorno por Déficit de Atención con Hiperactividad</em>. 
            Editorial Sentir. ISBN: 9788494821820.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Rodríguez, M.</span> (2016). 
            <em className="italic">Cómo educar a niños con déficit de atención: Guía para padres y maestros</em>. 
            Editorial Libros para Ser Mejor. ISBN: 9781530220919.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Barkley, R. A., & Robin, A.</span> (2011). 
            <em className="italic">Adolescentes desafiantes y rebeldes: 10 pasos para solucionar los conflictos y mejorar la convivencia</em>. 
            Editorial Paidós. ISBN: 9788449324770.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Barkley, R. A., & Benton, C. M.</span> (2009). 
            <em className="italic">Hijos desafiantes y rebeldes: Consejos para recuperar el afecto y lograr una mejor relación con su hijo</em>. 
            Editorial Paidós. ISBN: 9788449322349.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold">Barkley, R. A.</span> (2014). 
            <em className="italic">Tomar el control del TDAH en la edad adulta</em>. 
            Editorial Paidós. ISBN: 9788449329454.
          </p>
        </li>
      </ul>
    </div>
    ) }
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