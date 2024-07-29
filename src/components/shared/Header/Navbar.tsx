import React from "react";

interface NavbarProps {
  items: string[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="w-2/5">
      <ul className="flex justify-evenly">
        {items.map((item, index) => (
          <li className="text-center" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
