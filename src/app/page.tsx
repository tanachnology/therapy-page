"use client";

import { BannerCarrousel } from "@/components/BannerCarrousel";
import { ContactForm } from "@/components/ContactForm";
import {ContentGrid} from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import MapSection from "@/components/MapSection";
import { NewsGrid } from "@/components/NewsGrid";
import StatisticsSection from "@/components/StatisticsSection";

export default function Home() {
  return (
    <>
      <BannerCarrousel 
        images=
        {[
          "https://www.edelar.com.ar/static/theme/images/sin_imagen.jpg", 
          "https://www.edelar.com.ar/static/theme/images/sin_imagen.jpg", 
          "https://www.edelar.com.ar/static/theme/images/sin_imagen.jpg", 
        ]} 
        />
        <HeroSection  />
        <ContentGrid />
        <NewsGrid />
        <ContactForm />
        <StatisticsSection />
        <MapSection />
        <InfoSection />
    </>
  );
}
