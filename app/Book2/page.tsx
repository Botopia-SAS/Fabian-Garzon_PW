"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/book2/grid30.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/book2/grid31.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/book2/grid33.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid34.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid35.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid36.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid37.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid38.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book2/grid39.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
