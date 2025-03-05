"use client"; // Si usas Next.js 13 con app router, para habilitar uso de hooks en este componente

import React, { useRef, useEffect, useState } from "react";

/**
 * Componente de carrusel infinito con imágenes, escalado progresivo y bordes difuminados.
 * @param {Object} props
 * @param {string[]} props.images - Array de URLs de imágenes.
 * @param {number} [props.visibleCount=3] - Número de imágenes visibles en pantalla.
 * @param {number} [props.speed=5] - Tiempo en segundos que tarda en mover todo el set de imágenes de derecha a izquierda.
 */
interface ContinuousCarouselProps {
  images: string[];
  visibleCount?: number;
  speed?: number;
}

export default function ContinuousCarousel({
  images,
  visibleCount = 3,
  speed = 50,
}: ContinuousCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Cantidad de imágenes (se duplican para lograr el efecto infinito)
  const totalImages = images.length * 2;

  // Estado que guarda la posición actual de desplazamiento (en píxeles)
  // Calcula el ancho de cada "slot" (imagen + margen)
  // Puedes ajustar el width base de las imágenes a tu preferencia.
  const IMAGE_WIDTH = 400; // ancho base de la imagen
  const IMAGE_MARGIN = 25; // margen entre imágenes (20px)
  const slotWidth = IMAGE_WIDTH + IMAGE_MARGIN;

  // Calcula el ancho total que ocupará el set completo de imágenes duplicadas
  const totalWidth = slotWidth * totalImages;

  const [scrollX, setScrollX] = useState(-totalWidth / 4);

  // Velocidad en px/segundo para recorrer totalWidth en 'speed' segundos.
  const pxPerSecond = totalWidth / speed;

  // Ajusta el tamaño del contenedor cada vez que cambie de tamaño la ventana
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize(); // set inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación con requestAnimationFrame
  useEffect(() => {
    let lastTimestamp = performance.now();

    const animate = (now: number) => {
      const delta = (now - lastTimestamp) / 1000; // en segundos
      lastTimestamp = now;

      // Movemos scrollX de derecha a izquierda
      setScrollX((prev) => {
        let newVal = prev + pxPerSecond * delta;
        // Si llega al final, lo reiniciamos para que sea "infinito"
        if (newVal >= totalWidth / 2) {
          newVal -= totalWidth / 2;
          lastTimestamp = now; // Reseteamos el tiempo para evitar desincronización
        }
        return newVal;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [pxPerSecond, totalWidth]);

  /**
   * Calcula la escala de la imagen según su posición horizontal relativa
   * al centro del contenedor. Centro = escala 1, extremos = escala ~0.5
   */
  interface GetScaleParams {
    xCenterImage: number;
  }

  const getScale = ({ xCenterImage }: GetScaleParams): number => {
    if (!containerWidth) return 0.8;

    // Centro del contenedor
    const containerCenter = containerWidth / 2;
    // Distancia del centro
    const distance = Math.abs(xCenterImage - containerCenter);

    // Queremos que en el centro la escala sea 1, y en los bordes baje a 0.5
    // Definamos un rango: 0 <= distance <= (containerCenter)
    // Y una escala lineal 1 -> 0.5
    const maxDistance = containerCenter; // a esta distancia, scale = 0.5
    let scale = 1 - 0.5 * (distance / maxDistance);

    // Forzamos límites entre 0.5 y 1
    if (scale < 0.5) scale = 0.5;
    if (scale > 1) scale = 1;

    return scale;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        // Altura mínima para que se vean las imágenes
        height: "800px",
      }}
    >
      {/* Gradiente difuminado en los bordes (left y right) */}
      {/* Podemos usar pseudo-elementos, pero en React haremos 2 divs superpuestos */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "15%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
          zIndex: 2,
        }}
      />
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          right: 0,
          width: "15%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
          zIndex: 2,
        }}
      />
      {/* Contenedor que desplaza las imágenes (track) */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          // Transladamos este track según scrollX para lograr el movimiento
          transform: `translateX(${-scrollX}px)`,
          whiteSpace: "nowrap",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Duplicamos el array de imágenes para el efecto infinito */}
        {images.concat(images).map((src, index) => {
          // El punto central de cada imagen respecto a todo el track
          // offset en el carrusel + mitad de su propio ancho
          const xCenterImage = (index + 0.5) * slotWidth - scrollX; // posición real en px

          // Calculamos la escala según la distancia al centro del contenedor
          const scale = getScale({ xCenterImage });

          return (
            <div
              key={index}
              style={{
                width: IMAGE_WIDTH,
                height: "auto",
                marginRight: IMAGE_MARGIN,
                transform: `scale(${scale})`,
                transition: "transform 0.1s linear", // para un refresco suave
              }}
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
