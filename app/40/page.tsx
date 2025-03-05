"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarouselLarge";

export default function Home() {
  const imageObjects = [
    { url: "/40/veld.1.jpg", alt: "Foto 1" },
    { url: "/40/veld.2.jpg", alt: "Foto 1" },
    { url: "/40/veld.3.jpg", alt: "Foto 1" },
    { url: "/40/veld.4.jpg", alt: "Foto 1" },
    { url: "/40/veld.5.jpg", alt: "Foto 1" },
    { url: "/40/veld.6.jpg", alt: "Foto 1" },
    { url: "/40/veld.7.jpg", alt: "Foto 1" },
    { url: "/40/veld.8.jpg", alt: "Foto 1" },
    { url: "/40/veld.9.jpg", alt: "Foto 1" },
    { url: "/40/veld.10.jpg", alt: "Foto 1" },
    { url: "/40/veld.11.jpg", alt: "Foto 1" },
    { url: "/40/veld.12.jpg", alt: "Foto 1" },
    { url: "/40/veld.13.jpg", alt: "Foto 1" },
    { url: "/40/veld.14.jpg", alt: "Foto 1" },
    { url: "/40/veld.15.jpg", alt: "Foto 1" },
    { url: "/40/veld.16.jpg", alt: "Foto 1" },
    { url: "/40/veld.17.jpg", alt: "Foto 1" },
    { url: "/40/veld.18.jpg", alt: "Foto 1" },
    { url: "/40/veld.19.jpg", alt: "Foto 1" },
    { url: "/40/veld.20.jpg", alt: "Foto 1" },
    { url: "/40/veld.21.jpg", alt: "Foto 1" },
    { url: "/40/veld.22.jpg", alt: "Foto 1" },
    { url: "/40/veld.23.jpg", alt: "Foto 1" },
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
          <div className="mb-0">
            <ContinuousCarousel
              images={imageUrls}
              visibleCount={3}
              speed={150}
            />
          </div>
        </div>
      </main>
      <Hero />
    </div>
  );
}
