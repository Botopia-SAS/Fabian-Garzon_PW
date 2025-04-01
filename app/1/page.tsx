"use client";
import Hero from "@/components/Hero2";
import ContinuousCarousel from "@/components/ContinuousCarousel";

export default function Home() {
  const imageObjects = [
    { url: "/1/book1.6.jpg", alt: "Foto 1" },
    { url: "/1/book1.2.jpg", alt: "Foto 2" },
    { url: "/1/book1.3.jpg", alt: "Foto 3" },
    { url: "/1/book1.4.jpg", alt: "Foto 4" },
    { url: "/1/book1.5.jpg", alt: "Foto 5" },
  ];

  // Extrae solo las URLs para pasarlas al componente
  const imageUrls = imageObjects.map((img) => img.url);

  return (
    <div className="bg-white mt-20px">
      <main
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "100%", // 100% en móviles y tablets
          margin: "0 auto",
          minHeight: "100vh",
          paddingTop: "20px", // 🔹 Esto baja todo el contenido dentro de <main>
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
        <div className="mt-40">
          <Hero />
        </div>
      </main>
    </div>
  );
}
