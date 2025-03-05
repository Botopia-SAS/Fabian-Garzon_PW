"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importamos el componente Link

const photos = [
  { url: "/book1/book1.1.jpg", alt: "FOTO 1", link: "/Book1" },
  { url: "/book2/book2.1.jpeg", alt: "FOTO 2", link: "/Book2" },
  { url: "/portrait/portrait.1.jpg", alt: "FOTO 3", link: "/Portrait" },
  {
    url: "/advertizing/advertizing.1.jpg",
    alt: "FOTO 4",
    link: "/Advertising",
  },
  { url: "/celebrity/celebrity.1.jpg", alt: "FOTO 5", link: "/Celebrity" },
  { url: "/colombia/colombia.1.jpg", alt: "FOTO 6", link: "/Colombia" },
  { url: "/mujeres/mujeres.1.jpg", alt: "FOTO 7", link: "/Mujeres" },
  { url: "/fast/fast.1.jpg", alt: "FOTO 8", link: "/Fast" },
  { url: "/veld/veld.1.jpg", alt: "FOTO 9", link: "/Veld" },
  { url: "/gustavo/gus.1.jpg", alt: "FOTO 10", link: "/Gustavo" },
  { url: "/barichara/a.jpg", alt: "FOTO 11", link: "/Barichara" },
];

const Hero = () => {
  return (
    <section className="columns-2 sm:columns-3 gap-0">
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
