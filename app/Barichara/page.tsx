"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/barichara/a.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/barichara/b.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/barichara/c.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/barichara/d.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/barichara/e.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/barichara/f.jpg",
    alt: "Descripción de la imagen 1",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
