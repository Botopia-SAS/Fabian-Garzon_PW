"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarouselLarge";

export default function Home() {
  const imageObjects = [
    { url: "/38/022.jpg", alt: "Foto 1" },
    { url: "/38/gus.6.jpg", alt: "Foto 1" },
    { url: "/38/gus.7.jpg", alt: "Foto 1" },
    { url: "/38/gus.8.jpg", alt: "Foto 1" },
    { url: "/38/gus.9.jpg", alt: "Foto 1" },
    { url: "/38/gus.10.jpg", alt: "Foto 1" },
    { url: "/38/gus.11.jpg", alt: "Foto 1" },
    { url: "/38/gus.12.jpg", alt: "Foto 1" },
    { url: "/38/gus.21.jpg", alt: "Foto 1" },
    { url: "/38/gus.22.jpg", alt: "Foto 1" },
    { url: "/38/gus.23.jpg", alt: "Foto 1" },
    { url: "/38/gus.24.jpg", alt: "Foto 1" },
    { url: "/38/gus.25.jpg", alt: "Foto 1" },
    { url: "/38/gus.26.jpg", alt: "Foto 1" },
    { url: "/38/gus.27.jpg", alt: "Foto 1" },
    { url: "/38/gus.28.jpg", alt: "Foto 1" },
    { url: "/38/gus.29.jpg", alt: "Foto 1" },
    { url: "/38/gus.30.jpg", alt: "Foto 1" },
    { url: "/38/gus.31.jpg", alt: "Foto 1" },
    { url: "/38/gus.32.jpg", alt: "Foto 1" },
    { url: "/38/gus.33.jpg", alt: "Foto 1" },
    { url: "/38/gus.34.jpg", alt: "Foto 1" },
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
      </main>
      <Hero />
    </div>
  );
}
