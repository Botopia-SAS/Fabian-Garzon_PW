"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/advertizing/advertizing.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/advertizing/advertizing.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/advertizing/advertizing.3.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.9.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.10.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.11.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.12.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.15.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/advertizing/advertizing.16.jpg",
    alt: "Descripción de la imagen 3",
  },
  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
