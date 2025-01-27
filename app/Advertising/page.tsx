"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/advertising/grid1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/advertising/grid2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/advertising/grid3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertising/grid9.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
