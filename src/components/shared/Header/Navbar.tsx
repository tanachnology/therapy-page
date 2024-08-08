import React from "react";
import Link from 'next/link';

interface NavbarProps {
  items: string[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="w-2/5">
      <ul className="flex justify-evenly">
        {items.map((item, index) => (
          <li className="text-center text-[#46617e] cursor-pointer hover:text-[#3B8BAE] hover:underline transition duration-300" key={index}>
            <Link href="/about">
              {item}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
