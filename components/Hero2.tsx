"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

const photos = [
  //BookI
  { url: "/0/0.1.jpg", alt: "Draped in Power, Bathed in Light.", link: "/0" },
  { url: "/1/book1.2.jpg", alt: "Renoir's Garden.", link: "/1" },
  { url: "/2/book1.8.jpg", alt: "City Glam", link: "/2" },

  {
    url: "/3/book1.10.jpg",
    alt: "Surreal Veil. En honor a Dalí y la atmósfera onírica.",
    link: "/3",
  },
  { url: "/4/book1.13.jpg", alt: "Simply Claudia", link: "/4" },
  //{ url: "/5/book1.16.jpg", alt: "FOTO 5", link: "/5" },
  { url: "/6/book1.18.jpg", alt: "Steel and Silk", link: "/6" },
  { url: "/7/book1.20.jpg", alt: "Renaissance Muse", link: "/7" },
  { url: "/1.1/1.1.jpg", alt: "Classical Greek Art.", link: "/1.1" },
  { url: "/1.2/1.2.jpg", alt: "From Russia with Love ", link: "/1.2" },

  //BookII
  { url: "/2.1/2.1.jpeg", alt: "Delusion", link: "/2.1" },
  { url: "/2.2/2.2.jpg", alt: "Max Mara", link: "/2.2" },
  { url: "/8/book2.2.jpg", alt: "Max Mara", link: "/8" },
  { url: "/9/book2.6.jpg", alt: "Max Mara", link: "/9" },
  //{ url: "/10/book2.10.jpg", alt: "FOTO 10", link: "/10" },
  //{ url: "/11/book2.16.jpg", alt: "FOTO 12", link: "/11" },
  { url: "/12/book2.21.jpg", alt: "Sex Drugs & Rock and Roll ", link: "/12" },
  //Mujeres
  { url: "/27/mujeres.1.jpg", alt: "Chronicles of Goliath ", link: "/27" },
  { url: "/28/mujeres.4.jpg", alt: "Kandinsky art", link: "/28" },
  { url: "/29/mujeres.7.png", alt: "Musa", link: "/29" }, // - Faltaría agregar 6 imágenes a esta serie
  { url: "/30/mujeres.11.jpg", alt: "Debemos separarlas", link: "/30" },
  //{ url: "/31/mujeres.15.jpg", alt: "FOTO 32", link: "/31" },
  //{ url: "/32/mujeres.20.jpg", alt: "FOTO 33", link: "/32" },
  { url: "/33/mujeres.22.jpg", alt: "Ella", link: "/33" },
  //Portrait
  { url: "/3/book2.24.png", alt: "Carly Moore", link: "/3.1" },
  { url: "/3.2/3.2.jpg", alt: " Java Toronto", link: "/3.2" },
  { url: "/3.3/3.3.jpg", alt: "Diana", link: "/3.3" },
  //{ url: "/3.4/3.4.jpg", alt: "FOTO 3.4", link: "/3.4" },
  { url: "/13/portrait.1.jpg", alt: "Calligaris", link: "/13" },
  {
    url: "/14/portrait.4.jpg",
    alt: "Wolf Of Wall Street Toronto",
    link: "/14",
  },
  { url: "/15/portrait.10.jpg", alt: "Mirage", link: "/15" },
  //Advertizing
  { url: "/16/advertizing.1.jpg", alt: "Banco de Bogotá", link: "/16" },

  //Celebrity
  { url: "/18/celebrity.2.jpg", alt: "Hollywood", link: "/18" },
  { url: "/19/celebrity.1.jpg", alt: "Hollywood", link: "/19" },
  { url: "/38/022.jpg", alt: "Maestro Gustavo Velez", link: "/38" },

  //Barichara
  { url: "/39/a.jpg", alt: "Barichara", link: "/39" },
  //Colombia
  { url: "/20/colombia.1.jpg", alt: "Maestro David Manzur", link: "/20" },
  { url: "/21/colombia.9.jpg", alt: "Andrea Echeverri", link: "/21" },
  { url: "/22/colombia.11.jpg", alt: "Maestro Gustavo Velez", link: "/22" },

  //{ url: "/23/colombia.18.jpg", alt: "FOTO 24", link: "/23" },
  //{ url: "/24/colombia.21.jpg", alt: "FOTO 25", link: "/24" },
  {
    url: "/25/colombia.25.jpg",
    alt: "Maestro Camilo Calderon Forero",
    link: "/25",
  },
  //Gus
  { url: "/37/gus.1.jpg", alt: "Maestro Gustavo Velez", link: "/37" },
  //FAF
  //{ url: "/17/fast.15.jpg", alt: "FOTO 18", link: "/17" },
  { url: "/34/fast.1.jpg", alt: "Juan jose lafaurie cabal", link: "/34" },
  { url: "/35/fast.3.jpg", alt: "Ride Pro", link: "/35" },
  { url: "/36/fast.11.jpg", alt: "Maria Luna Beltran ", link: "/36" },

  //Veld
  { url: "/40/veld.1.jpg", alt: "Veld Music Fest", link: "/40" },
];

const breakpointColumnsObj = {
  default: 3, // Default number of columns
  1100: 3, // 3 columns for screens wider than 1100px
  700: 2, // 2 columns for screens wider than 700px
  500: 1, // 1 column for screens wider than 500px
};

const Hero = () => {
  return (
    <div className="mt-16">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto"
        columnClassName="mx-0"
      >
        {photos.map((photo, index) => (
          <Link href={photo.link} key={index} className="block mb-0">
            {" "}
            {/* mb-0 elimina margen inferior */}
            <div className="relative overflow-hidden group cursor-pointer m-0">
              {" "}
              {/* m-0 elimina margen */}
              <Image
                src={photo.url}
                alt={photo.alt}
                width={500}
                height={500}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-full p-2 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-xl ">{photo.alt}</p>
              </div>
            </div>
          </Link>
        ))}
      </Masonry>
    </div>
  );
};

export default Hero;
