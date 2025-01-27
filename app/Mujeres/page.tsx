"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/mujeres/grid100.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/mujeres/grid101.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/mujeres/grid103.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid104.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid105.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid106.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid107.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid108.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/grid109.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
