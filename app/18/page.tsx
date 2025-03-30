"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarousel";

export default function Home() {
  const imageObjects = [
    { url: "/18/celebrity.2.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.3.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.4.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.6.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.7.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.8.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.9.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.10.jpg", alt: "Foto 1" },
    { url: "/18/celebrity.11.jpg", alt: "Foto 1" },
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
              speed={50}
            />
          </div>
        </div>
      </main>
      <Hero />
    </div>
  );
}
