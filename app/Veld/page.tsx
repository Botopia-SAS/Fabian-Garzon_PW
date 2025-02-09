"use client";

import React from "react";
import Books from "@/components/books"; // Asegúrate de que la ruta al componente sea correcta

const images = [
  {
    url: "/veld/veld.1.jpg",
    alt: "Descripción de la imagen 1",
  },
  {
    url: "/veld/veld.2.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/veld/veld.3.jpg",
    alt: "Descripción de la imagen 2",
  },
  {
    url: "/veld/veld.4.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.5.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.6.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.7.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.8.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.9.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.10.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.11.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.12.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.13.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.14.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.15.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.16.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.17.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.18.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.19.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.20.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.21.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.22.jpg",
    alt: "Descripción de la imagen 3",
  },
  {
    url: "/veld/veld.23.jpg",
    alt: "Descripción de la imagen 3",
  },

  // Agrega más imágenes según sea necesario
];

const Page = () => {
  return <Books images={images} />;
};

export default Page;
