"use client";

import React from "react";

interface SMMAProps {
  title: string;
  content: string;
  subtitle?: string; // Subtítulo opcional
  additionalContent?: string; // Contenido opcional después del subtítulo
}

const SMMA: React.FC<SMMAProps> = ({
  title,
  content,
  subtitle,
  additionalContent,
}) => {
  return (
    <section className="pt-20 flex justify-center px-10 dark:bg-white dark:text-black">
      <div className="max-w-2xl text-center">
        {/* Título principal */}
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {/* Párrafo principal */}
        <p className="text-base leading-relaxed text-justify">{content}</p>
        {/* Subtítulo */}
        {subtitle && <h2 className="text-xl font-semibold mt-8">{subtitle}</h2>}
        {/* Contenido adicional */}
        {additionalContent && (
          <p className="text-base leading-relaxed text-justify mt-4">
            {additionalContent}
          </p>
        )}
      </div>
    </section>
  );
};

export default SMMA;
