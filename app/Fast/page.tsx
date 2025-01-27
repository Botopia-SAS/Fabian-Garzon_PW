"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/fast/grid110.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/fast/grid111.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/fast/grid112.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid113.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid114.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid115.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid116.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid117.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/grid118.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
