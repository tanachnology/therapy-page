"use client";

import Logo from "./Logo";
import Navbar from "@/components/shared/Header/Navbar";
import Menu from "./Menu";
import { ContactHeader } from "./ContactHeader";

export const Header = () => {
    const navbar1Items = ["SERVICIOS", "TDAH", "TC"];
    const navbar2Items = ["BLOG", "FAQ", "CONTACTO"];
    return (
        <>
        <ContactHeader />
        <header >
            <div className="hidden md:flex flex justify-center items-center">
                <Navbar items={navbar1Items}/> 
                <Logo />
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