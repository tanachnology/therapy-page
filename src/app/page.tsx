"use client";

import { BannerCarrousel } from "@/components/BannerCarrousel";
import {ContentGrid} from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import { CardBlog } from "@/components/cardBlog/CardBlog";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <BannerCarrousel 
        images=
        {[
          "/mujersentada.jpg", 
          "/manos.jpg", 
          "/unidad.jpg", 
        ]} 
        />
        <HeroSection  />
        <ContentGrid />
        <CardBlog />
        <ContactForm />
    </main>
  );
}
