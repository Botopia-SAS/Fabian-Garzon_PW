"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/colombia/grid50.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/colombia/grid51.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/colombia/grid53.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid54.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid55.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid56.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid57.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid58.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/colombia/grid59.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
