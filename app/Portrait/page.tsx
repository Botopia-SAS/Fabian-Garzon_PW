"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/portrait/portrait.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/portrait/portrait.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/portrait/portrait.3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.9.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.10.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.11.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.12.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/portrait/portrait.15.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
