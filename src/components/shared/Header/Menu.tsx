import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between items-center p-4">
      <div className="relative  z-50">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
            <ul className="flex flex-col p-2">
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#home">SERVICIOS</a></li>
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#about">TDAH</a></li>
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#services">TC</a></li>
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#contact">BLOG</a></li>
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#contact">FAQ</a></li>
              <li className="py-1 px-2 hover:bg-gray-200"><a href="#contact">CONTACTO</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
