"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importamos el componente Link

const photos = [
  { url: "/images-hero/photo1.jpg", alt: "FOTO 1", link: "/Book1" },
  { url: "/images-hero/photo2.jpg", alt: "FOTO 2", link: "/Book2" },
  { url: "/images-hero/photo3.jpg", alt: "FOTO 3", link: "/Portrait" },
  { url: "/images-hero/photo4.jpg", alt: "FOTO 4", link: "/Advertising" },
  { url: "/images-hero/photo5.jpg", alt: "FOTO 5", link: "/Celebrity" },
  { url: "/images-hero/photo6.jpg", alt: "FOTO 6", link: "/Colombia" },
  { url: "/images-hero/photo7.jpg", alt: "FOTO 7", link: "/Mujeres" },
  { url: "/images-hero/photo8.jpg", alt: "FOTO 8", link: "/Fast" },
  { url: "/images-hero/photo9.jpg", alt: "FOTO 9", link: "/Veld" },
  { url: "/images-hero/photo10.jpg", alt: "FOTO 10", link: "/Gustavo" },
  { url: "/images-hero/photo11.jpg", alt: "FOTO 11", link: "/Barichara" },
];

const Hero = () => {
  return (
    <section className="columns-2 sm:columns-3 pt-16 gap-0">
      {photos.map((photo, index) => (
        <Link href={photo.link} key={index}>
          {" "}
          {/* Envuelve cada imagen con un enlace */}
          <div className="relative w-full h-full overflow-hidden group cursor-pointer">
            <Image
              src={photo.url}
              alt={photo.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            {/* Efecto de opacidad oscura */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
            {/* Texto inferior */}
            <div className="absolute bottom-0 left-0 w-full p-2 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <p className="text-sm">{photo.alt}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Hero;
