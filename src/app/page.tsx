"use client";

import { BannerCarrousel } from "@/components/BannerCarrousel";
import {ContentGrid} from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
/* import MapSection from "@/components/MapSection"; */
import { CardBlog } from "@/components/cardBlog/CardBlog";
import StatisticsSection from "@/components/StatisticsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="px-[70px]">
      <BannerCarrousel 
        images=
        {[
          "/kidsGroup.jpg", 
          "/stressedChild.jpg", 
          "/therapySession.jpg", 
        ]} 
        />
        <HeroSection  />
        <ContentGrid />
        <CardBlog />
        <ContactForm />
        
        <StatisticsSection />
        {/* <MapSection /> */}
        {/* <InfoSection /> */}
    </main>
  );
}
