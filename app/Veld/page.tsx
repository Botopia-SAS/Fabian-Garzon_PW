"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/veld/grid60.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/veld/grid61.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/veld/grid62.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/veld/grid63.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid64.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid65.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid66.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid67.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid68.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/grid69.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
