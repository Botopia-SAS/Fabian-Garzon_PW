"use client";

import React, { useRef, useEffect, useState } from "react";

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

  // Altura fija para TODAS las imágenes
  const TARGET_HEIGHT = 500;
  // Margen horizontal entre imágenes
  const IMAGE_MARGIN = 10;

  // Duplicamos el array de imágenes para el loop infinito.
  // Así, la longitud total es 2 * images.length
  const duplicatedImages = images.concat(images);

  // Estado para guardar el ancho escalado de cada imagen (en px).
  // Ej.: si la imagen mide 3000×2000, su relación es 1.5. Al escalar a 600px de alto, su ancho es 900.
  const [imageWidths, setImageWidths] = useState<number[]>(() =>
    Array(duplicatedImages.length).fill(0)
  );

  // Posiciones acumuladas (left) de cada imagen en el track.
  const [positions, setPositions] = useState<number[]>(() =>
    Array(duplicatedImages.length).fill(0)
  );

  // Ancho total del track con todas las imágenes + margen
  const [totalWidth, setTotalWidth] = useState(0);

  // scrollX es nuestro desplazamiento (0 → totalWidth/2)
  const [scrollX, setScrollX] = useState(0);

  // Medir el ancho del contenedor para el “efecto scale”:
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cada vez que una imagen carga, calculamos su “width escalado” y volvemos a calcular “positions” y “totalWidth”
  function handleImageLoad(
    e: React.SyntheticEvent<HTMLImageElement>,
    i: number
  ) {
    const img = e.currentTarget;
    const naturalW = img.naturalWidth;
    const naturalH = img.naturalHeight;
    const ratio = naturalW / naturalH; // relación de aspecto
    const scaledWidth = ratio * TARGET_HEIGHT; // ancho al escalar a 600px de alto

    setImageWidths((prev) => {
      const newArr = [...prev];
      newArr[i] = scaledWidth;
      return newArr;
    });
  }

  // Cuando cambie imageWidths, recalculamos “positions” y “totalWidth”
  useEffect(() => {
    // Calcula posiciones acumuladas
    const newPositions = [];
    let currentX = 0;
    for (let i = 0; i < duplicatedImages.length; i++) {
      newPositions.push(currentX);
      // Avanzamos currentX según el ancho de la imagen + margen
      currentX += imageWidths[i] + IMAGE_MARGIN;
    }
    setPositions(newPositions);
    setTotalWidth(currentX);
  }, [imageWidths, duplicatedImages.length]);

  // Iniciar animación infinita
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000; // en segundos
      lastTime = now;

      // Avanzamos scrollX de derecha a izquierda (o al revés, según tu preferencia)
      // Ej.: si queremos que en 'speed' segundos recorra todo `totalWidth`,
      // la velocidad en px/segundo es totalWidth / speed
      const pxPerSecond = totalWidth / speed;

      setScrollX((prev) => {
        let newVal = prev + pxPerSecond * dt;
        // Si se pasa de la mitad (loop), reiniciamos
        if (newVal >= totalWidth / 2) {
          newVal -= totalWidth / 2;
          lastTime = now; // Evitar “salto” de frames
        }
        return newVal;
      });

      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [totalWidth, speed]);

  // Función para calcular la escala según distancia al centro:
  function getScale(xCenterImage: number): number {
    if (!containerWidth) return 1;
    const containerCenter = containerWidth / 2;
    const distance = Math.abs(xCenterImage - containerCenter);
    // A distancia=0 → scale=1, a distancia=containerCenter → scale=0.5
    let scale = 1 - 0.5 * (distance / containerCenter);
    if (scale < 0.5) scale = 0.5;
    if (scale > 1) scale = 1;
    return scale;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "800px", // puedes ajustar
      }}
    >
      {/* Gradientes laterales */}
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

      {/* Track horizontal con ancho = totalWidth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: totalWidth, // variable
          transform: `translateX(${-scrollX}px)`,
        }}
      >
        {duplicatedImages.map((src, i) => {
          const imgWidth = imageWidths[i];
          const leftPos = positions[i];

          // El “centro” de esta imagen es leftPos + (imgWidth / 2)
          const xCenterImage = leftPos + imgWidth / 2 - scrollX;
          const scale = getScale(xCenterImage);

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: leftPos,
                top: "50px", // 🔹 Ajusta este valor para bajar las imágenes
                // Alto fijo (600) para todas
                height: TARGET_HEIGHT,
                width: imgWidth,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                transition: "transform 0.1s linear",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={src}
                alt={`img-${i}`}
                onLoad={(e) => handleImageLoad(e, i)}
                style={{
                  // Mantenemos altura en 100%, ancho auto => no recortamos
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: 8,
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
