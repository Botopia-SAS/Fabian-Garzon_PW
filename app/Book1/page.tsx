"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/book1/grid20.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/book1/grid21.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/book1/grid23.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid24.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid25.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid26.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid27.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid28.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/book1/grid29.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
