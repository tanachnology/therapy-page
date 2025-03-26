import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from "next/link";

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
              <li className="py-1 px-2 hover:bg-gray-200"><link href="/services">SERVICIOS</link></li>
              <li className="py-1 px-2 hover:bg-gray-200"><link href="/tdah">TDAH</link></li>
              <li className="py-1 px-2 hover:bg-gray-200"><link href="/blog">BLOG</link></li>
              <li className="py-1 px-2 hover:bg-gray-200"><link href="/faq">FAQ</link></li>
              <li className="py-1 px-2 hover:bg-gray-200"><link href="/contact">CONTACTO</link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
