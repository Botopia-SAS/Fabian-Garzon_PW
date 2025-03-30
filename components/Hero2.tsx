"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importamos el componente Link

const photos = [
  { url: "/1/book1.2.jpg", alt: "FOTO 1", link: "/1" },
  { url: "/2/book1.8.jpg", alt: "FOTO 2", link: "/2" },
  { url: "/3/book1.10.jpg", alt: "FOTO 3", link: "/3" },
  { url: "/4/book1.13.jpg", alt: "FOTO 4", link: "/4" },
  { url: "/5/book1.16.jpg", alt: "FOTO 5", link: "/5" },
  { url: "/6/book1.18.jpg", alt: "FOTO 6", link: "/6" },
  { url: "/7/book1.20.jpg", alt: "FOTO 7", link: "/7" },
  { url: "/8/book2.2.jpg", alt: "FOTO 8", link: "/8" },
  { url: "/9/book2.6.jpg", alt: "FOTO 9", link: "/9" },
  { url: "/10/book2.10.jpg", alt: "FOTO 10", link: "/10" },
  { url: "/11/book2.16.jpg", alt: "FOTO 12", link: "/11" },
  { url: "/12/book2.21.jpg", alt: "FOTO 13", link: "/12" },
  { url: "/13/portrait.1.jpg", alt: "FOTO 14", link: "/13" },
  { url: "/14/portrait.4.jpg", alt: "FOTO 15", link: "/14" },
  { url: "/15/portrait.10.jpg", alt: "FOTO 16", link: "/15" },
  { url: "/16/advertizing.1.jpg", alt: "FOTO 17", link: "/16" },
  { url: "/17/fast.15.jpg", alt: "FOTO 18", link: "/17" },
  { url: "/18/celebrity.2.jpg", alt: "FOTO 19", link: "/18" },
  { url: "/19/celebrity.1.jpg", alt: "FOTO 20", link: "/19" },
  { url: "/20/colombia.1.jpg", alt: "FOTO 21", link: "/20" },
  { url: "/21/colombia.9.jpg", alt: "FOTO 22", link: "/21" },
  { url: "/22/colombia.11.jpg", alt: "FOTO 23", link: "/22" },
  { url: "/23/colombia.18.jpg", alt: "FOTO 24", link: "/23" },
  { url: "/24/colombia.21.jpg", alt: "FOTO 25", link: "/24" },
  { url: "/25/colombia.25.jpg", alt: "FOTO 26", link: "/25" },
  { url: "/26/colombia.33.jpg", alt: "FOTO 27", link: "/26" },
  { url: "/27/mujeres.1.jpg", alt: "FOTO 28", link: "/27" },
  { url: "/28/mujeres.4.jpg", alt: "FOTO 29", link: "/28" },
  { url: "/29/mujeres.7.png", alt: "FOTO 30", link: "/29" },
  { url: "/30/mujeres.11.jpg", alt: "FOTO 31", link: "/30" },
  { url: "/31/mujeres.15.jpg", alt: "FOTO 32", link: "/31" },
  { url: "/32/mujeres.20.jpg", alt: "FOTO 33", link: "/32" },
  { url: "/33/mujeres.22.jpg", alt: "FOTO 34", link: "/33" },
  { url: "/34/fast.1.jpg", alt: "FOTO 35", link: "/34" },
  { url: "/35/fast.3.jpg", alt: "FOTO 36", link: "/35" },
  { url: "/36/fast.11.jpg", alt: "FOTO 37", link: "/36" },
  { url: "/37/gus.1.jpg", alt: "FOTO 38", link: "/37" },
  { url: "/38/022.jpg", alt: "FOTO 39", link: "/38" },
  { url: "/39/a.jpg", alt: "FOTO 40", link: "/39" },
  { url: "/40/veld.1.jpg", alt: "FOTO 41", link: "/40" },
];

const Hero = () => {
  return (
    <section className="columns-2 sm:columns-3 gap-0 mt-16">
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
