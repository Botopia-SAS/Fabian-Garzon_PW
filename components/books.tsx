"use client";

import React from "react";
import Image from "next/image";

interface BooksProps {
  images: { url: string; alt: string }[]; // Arreglo de imágenes con URL y texto alternativo
}

const Books: React.FC<BooksProps> = ({ images }) => {
  return (
    <section className="flex flex-col items-center gap-8 pt-16 dark:bg-white">
      {images.map((image, index) => (
        <div key={index} className="w-full max-w-4xl">
          <Image
            src={image.url}
            alt={image.alt}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Books;
