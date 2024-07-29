import Logo from "../Header/Logo";

type FooterSectionProps = {
  title: string;
  items: string[];
};

const FooterSection = ({ title, items }: FooterSectionProps) => (
  <ul className="">
    <h3 className="text-white font-semibold text-[30px]">{title}</h3>
    {items.map((item, index) => (
      <li
        key={index}
        className="text-gray-600 mb-1.5 text-xs font-normal uppercase cursor-pointer"
      >
        {item}
      </li>
    ))}
  </ul>
);

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around pt-[62px] pb-[40px] bg-[#bbced6]">
        <ul className="">
          {/* Necesito un w-full para la img aqui */}
          <Logo />
        </ul>

        <FooterSection
          title="Navegación"
          items={[
            "Trastorno por deficit de atención",
            "Trastorno negativista desafiante",
            "Trastorno de la conducta",
          ]}
        />
        <FooterSection
          title="Quick Links"
          items={["Servicios", "TDAH", "TC", "Blog", "FAQ", "Contacto"]}
        />
        <FooterSection
          title="Horario de atención"
          items={[
            "Lunes a Viernes: 9AM - 8PM",
            "Sábado: 10AM - 4PM",
            "Domingo: Cerrado",
          ]}
        />
      </div>
      <ul className="text-gray-600 text-xs font-normal uppercase cursor-pointer flex justify-between pt-[20px] pb-[20px] list-none bg-[#00496b]">
        <li className="px-[60px]">Privacy Policies</li>
        <li className="px-[60px]">User Agreements</li>
      </ul>
    </footer>
  );
};