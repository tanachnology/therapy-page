import React from 'react'

const StatisticsSection = () => {
  return (
    <div className="flex justify-around items-center p-4">
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold mb-2">Secciones por Año</h2>
        <p>2021: 10</p>
        <p>2022: 15</p>
        <p>2023: 20</p>
      </div>
      <div className="h-24 border-l border-gray-300 mx-4"></div>
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold mb-2">Personas Asistidas por Año</h2>
        <p>2021: 100</p>
        <p>2022: 150</p>
        <p>2023: 200</p>
      </div>
      <div className="h-24 border-l border-gray-300 mx-4"></div>
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold mb-2">Clientes por Semana</h2>
        <p>Semana 1: 10</p>
        <p>Semana 2: 15</p>
        <p>Semana 3: 20</p>
      </div>
    </div>
  )
}

export default StatisticsSection
