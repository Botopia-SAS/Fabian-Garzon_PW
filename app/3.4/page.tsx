"use client";
import Hero from "@/components/Hero2";

export default function Home() {
  return (
    <div className="bg-white mt-20px">
      <main
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: "100vh",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="w-full max-w-4xl px-10 md:px-20 pt-20 md:pt-28">
          <div className="flex justify-center">
            <img
              src="/3.4/3.4.jpg"
              alt="Imagen destacada"
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
        <Hero />
      </main>
    </div>
  );
}
