"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/celebrity/grid40.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/celebrity/grid41.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/celebrity/grid43.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid44.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid45.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid46.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid47.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid48.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/grid49.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
