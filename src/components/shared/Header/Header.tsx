"use client";

import Logo from "./Logo";
import Navbar from "@/components/shared/Header/Navbar";
import Menu from "./Menu";
import { ContactHeader } from "./ContactHeader";

export const Header = () => {
    const navbar1Items = ["Dra Esmeralda Conde", "Servicios", "FAQ"];
    const navbar2Items = ["Blog", "TDAH", "Contacto"];
    return (
        <>
        <ContactHeader />
        <header className="mb-[30px]">
            <div className="hidden md:flex flex justify-center items-center">
                <Navbar items={navbar1Items}/> 
                <div className="max-w-[80px]">
                    <Logo />
                </div>
                <Navbar items={navbar2Items}/>
            </div>
           <div className="md:hidden flex justify-between items-center w-full">
                <Logo />
                <Menu />
            </div>
        </header>
        </>
    );
}