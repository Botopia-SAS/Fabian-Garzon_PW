"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/portrait/grid10.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/portrait/grid11.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/portrait/grid13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid15.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid16.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid17.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid18.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/grid19.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
