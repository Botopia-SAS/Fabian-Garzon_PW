"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarouselLarge";

export default function Home() {
  const imageObjects = [
    { url: "/16/advertizing.1.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.2.jpg", alt: "Foto 2" },
    { url: "/16/advertizing.3.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.4.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.5.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.6.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.7.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.8.jpg", alt: "Foto 2" },
    { url: "/16/advertizing.9.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.10.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.11.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.11.jpg", alt: "Foto 1" },
    { url: "/16/advertizing.13.jpg", alt: "Foto 1" },
  ];

  // Extrae solo las URLs para pasarlas al componente
  const imageUrls = imageObjects.map((img) => img.url);

  return (
    <div className="bg-white">
      <main
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "100%", // 100% en móviles y tablets
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <div>
          <h1>Mi página con Carrusel</h1>
          <div className="relative top-20">
            <ContinuousCarousel
              images={imageUrls}
              visibleCount={3}
              speed={100}
            />
          </div>
        </div>
        <div className="mt-40">
          <Hero />
        </div>
      </main>
    </div>
  );
}
