"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/celebrity/celebrity.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/celebrity/celebrity.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/celebrity/celebrity.3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.9.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.10.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/celebrity/celebrity.11.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
