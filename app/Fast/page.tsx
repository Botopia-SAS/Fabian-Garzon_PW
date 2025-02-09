"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/fast/fast.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/fast/fast.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/fast/fast.3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.9.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.10.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.11.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.12.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.15.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/fast/fast.16.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
