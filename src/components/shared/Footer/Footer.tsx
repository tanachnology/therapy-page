'use client';

import Logo from "../Header/Logo";
import ScrollButton from "./ScrollButton";

interface FooterSectionProps {
  title: string;
  items: { text: string; url?: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="footer-section">
      <h4 className="text-white text-xl font-bold">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-white text-xs font-normal uppercase">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around pt-[62px] pb-[40px] bg-[#1A5276]">
        <ul className="">
          {/* Necesito un w-full para la img aqui */}
          <Logo />
        </ul>

        <FooterSection
        title="Navegación"
        items={[
          { text: "Rusell A. Barkley", url: "https://www.russellbarkley.org/" },
          { text: "Red Cenit", url: "https://www.redcenit.com/" }, // Reemplaza con el enlace correcto
          { text: "El neuropediatra", url: "https://www.elneuropediatra.es/" }, // Reemplaza con el enlace correcto
          { text: "Mis TDAHs favoritas", url: "https://www.mistdahfavoritas.com/" }, // Reemplaza con el enlace correcto
          { text: "Fundación CADAH", url: "https://www.fundacioncadah.org/" }, // Reemplaza con el enlace correcto
          { text: "Artículos", url: "https://www.russellbarkley.org/factsheets.html" }
        ]}
      />
        <FooterSection
          title="Quick Links"
          items={[
            { text: "Dra. Esmeralda Conde", url: "/about" },
            { text: "Servicios", url: "/services" },
            { text: "TDAH", url: "/tdah" },
            { text: "Blog", url: "/blog" },
            { text: "FAQ", url: "/faq" },
            { text: "Contacto", url: "/contact" }
          ]}
        />
        <FooterSection
          title="Horario de atención"
          items={[
            { text: "LUNES A VIERNES: 9:00 a 13:00 y de 16:00 a 19:00" },
            { text: "SÁBADO: 10:00 a 14:00" },
            { text: "DOMINGO: CERRADO" }
          ]}
        />
      </div>
      <ul className="text-white text-xs font-normal uppercase cursor-pointer flex justify-between pt-[20px] pb-[20px] list-none bg-[#1A5276]">
        <li className="px-[90px]">Privacy Policies</li>
        <li className="px-[90px]">User Agreements</li>
      </ul>
      <ScrollButton />
    </footer>
  );
};
