import React from "react";
import Link from 'next/link';

interface NavbarProps {
  items: string[];
}
const itemToPathMap: { [key: string]: string } = {
  'Dra Esmeralda Conde': '/about',
  'Servicios': '/services',
  'FAQ': '/faq',
  'Blog': '/blog',
  'TDAH': '/tdah',
  'Contacto': '/contact'
};

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="w-2/5">
      <ul className="flex justify-evenly">
        {items.map((item, index) => (
          <li className="text-center text-[#46617e] cursor-pointer hover:text-[#3B8BAE] hover:underline transition duration-300" key={index}>
            <Link href={itemToPathMap[item] || '#'} >
              {item}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
