"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/mujeres/mujeres.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/mujeres/mujeres.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/mujeres/mujeres.3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.7.png",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.8.png",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.9.png",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.10.png",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.11.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.12.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.15.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.16.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.17.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.18.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.19.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.20.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.21.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.22.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.23.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.24.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/mujeres/mujeres.25.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
