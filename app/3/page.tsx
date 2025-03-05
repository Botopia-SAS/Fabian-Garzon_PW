"use client";

import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarousel";

export default function Home() {
  const imageObjects = [
    { url: "/3/book1.10.jpg", alt: "Foto 1" },
    { url: "/3/book1.11.jpg", alt: "Foto 2" },
    { url: "/3/book1.12.jpg", alt: "Foto 2" },
    { url: "/3/book2.24.png", alt: "Foto 2" },
    { url: "/3/book2.25.png", alt: "Foto 2" },
    { url: "/3/book2.26.png", alt: "Foto 2" },
    { url: "/3/book2.27.png", alt: "Foto 2" },
    { url: "/3/book2.28.png", alt: "Foto 2" },
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
              speed={50}
            />
          </div>
        </div>
      </main>
      <Hero />
    </div>
  );
}
