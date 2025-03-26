"use client";
import { useState, useEffect } from "react";
import { BannerCarrousel } from "@/components/BannerCarrousel";
import {ContentGrid} from "@/components/ContentGrid";
import { HeroSection } from "@/components/HeroSection";
import { CardBlog } from "@/components/cardBlog/CardBlog";
import { ContactForm } from "@/components/ContactForm";
import { getCarrouselImages } from "@/services/homeServices";

export interface IImage {
  image_url: string;
  id: string;
  description: string;
}

export default function Home() {
  const [images, setImages] = useState<IImage[]>([]);
  const [BannerHomeLoading, setBannerHomeLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getCarrouselImages();
        setImages(data);
        setBannerHomeLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main>
      <BannerCarrousel />
      <HeroSection  />
      <ContentGrid />
      <CardBlog />
      <ContactForm />
    </main>
  );
}
