import Logo from "./Logo";
import Navbar from "@/components/shared/Header/Navbar";

export const Header = () => {
    const navbar1Items = ["Servicios", "TDAH", "TC"];
    const navbar2Items = ["Blog", "FAQ", "Contacto"];
    return (
        <header className='flex justify-center items-center '>
           <Navbar items={navbar1Items}/> 
           <Logo />
           <Navbar items={navbar2Items}/>
        </header>
    );
}