import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
        <div className="relative mb-6">
          <Image 
            src="/profile.png" 
            alt="Dra. Esmeralda Conde" 
            width={150}
            height={150}
            className="rounded-full border-4 border-[#3B8BAE] shadow-lg transform transition duration-500 hover:scale-110"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-[#46617e] mb-4">Bienvenidos</h1>
        <h2 className="text-2xl font-semibold text-[#3B8BAE] mb-6">Dra. Esmeralda Conde – Psicóloga Especialista en TDAH</h2>
        <p className="text-lg text-[#46617e] mb-4">
          Hola, soy la Dra. Esmeralda Conde, psicóloga y criminóloga. Mi enfoque se basa en una conexión sencilla con cada paciente y una convicción profunda en el poder curativo que reside en cada uno.
        </p>
        <p className="text-lg text-[#46617e] mb-4">
          Creo firmemente que niños, adolescentes y adultos, tienen la fortaleza necesaria para superar sus dificultades. Mi misión es ayudarles a construir las herramientas necesarias, encontrando una mayor satisfacción y bienestar.
        </p>
        <p className="text-lg text-[#46617e] mb-4">
          Cuando un niño enfrenta dificultades en el ámbito familiar, escolar o en sus relaciones, es crucial abordar el problema de manera conjunta con los padres. En muchos casos, no es necesario que el niño acuda a la consulta para iniciar este proceso.
        </p>
        <p className="text-lg text-[#46617e] mb-4">
          Utilizo todos mis conocimientos y experiencia para guiar a cada persona en la gestión de sus recursos y habilidades. Juntos, encontraremos un nuevo significado a sus experiencias y emociones, ayudándolas a superar los obstáculos que impiden su avance.
        </p>
        <p className="text-lg text-[#46617e] mb-4">
          Estoy aquí para acompañarte en tu camino hacia una vida más plena y equilibrada.
        </p>
        <div className="mt-6">
          <Link href="/curriculum">
            <p className="text-[#DDAD7A] hover:underline text-lg">¿Aquí puede ir un enlace al currículum?</p>
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/primeros-pasos">
            <p className="bg-[#46617e] text-white py-2 px-4 rounded-md hover:bg-[#3B8BAE] transition duration-300">Empecemos</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About