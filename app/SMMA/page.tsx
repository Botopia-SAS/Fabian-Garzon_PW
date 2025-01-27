"use client";

import React from "react";
import Header from "@/components/header";
import SMMA from "@/components/smma"; // Asegúrate de que la ruta sea correcta

const Page = () => {
  <Header />;
  const title =
    "Fabián Garzón - Agencia de marketing digital y comunicaciones.";
  const content =
    "Con más de 20 años de experiencia en fotografía, dirección y estrategia de marketing, Fabián Garzón lidera una agencia internacional que transforma marcas a través de contenido creativo y campañas digitales. Su enfoque combina arte y estrategia, posicionando empresas y personas como líderes en sus mercados. Ha trabajado con clientes en Bogotá, Miami y Canadá, llevando sus proyectos al siguiente nivel con resultados medibles y un enfoque en innovación.";
  const subtitle = "Fabián Garzón - SMMA. ";
  const additionalContent =
    "With over 20 years of experience in photography, directing, and marketing strategy, Fabián Garzón leads an international agency that transforms brands through creative content and digital campaigns. His approach blends art and strategy, positioning businesses and individuals as market leaders. He has worked with clients in Bogotá, Miami, and Canada, elevating projects with measurable results and a focus on innovation.";

  return (
    <SMMA
      title={title}
      content={content}
      subtitle={subtitle}
      additionalContent={additionalContent}
    />
  );
};

export default Page;
