"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarouselLarge";

export default function Home() {
  const imageObjects = [
    { url: "/37/gus.1.jpg", alt: "Foto 1" },
    { url: "/37/gus.2.jpg", alt: "Foto 1" },
    { url: "/37/gus.3.jpg", alt: "Foto 1" },
    { url: "/37/gus.4.jpg", alt: "Foto 1" },
    { url: "/37/gus.5.jpg", alt: "Foto 1" },
    { url: "/37/gus.13.jpg", alt: "Foto 1" },
    { url: "/37/gus.14.jpg", alt: "Foto 1" },
    { url: "/37/gus.15.jpg", alt: "Foto 1" },
    { url: "/37/gus.16.jpg", alt: "Foto 1" },
    { url: "/37/gus.17.jpg", alt: "Foto 1" },
    { url: "/37/gus.18.jpg", alt: "Foto 1" },
    { url: "/37/gus.19.jpg", alt: "Foto 1" },
    { url: "/37/gus.20.jpg", alt: "Foto 1" },
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
