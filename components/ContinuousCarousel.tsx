"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

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
  const [scrollX, setScrollX] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<
    { width: number; height: number }[]
  >([]);
  const [positions, setPositions] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Constantes configurables
  const IMAGE_MARGIN = 20;
  const duplicatedImages = [...images, ...images];
  const desktopHeight = 500;
  const mobileMaxHeight = 350;

  // Efecto para inicialización
  useEffect(() => {
    setIsClient(true);
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const calculateDimensions = useCallback(() => {
    if (containerRef.current && typeof window !== "undefined") {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      const mobileCheck = width < 768;
      setIsMobile(mobileCheck);
    }
  }, []);

  // Manejar carga de imágenes
  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>, i: number) => {
      const img = e.currentTarget;
      const naturalRatio = img.naturalWidth / img.naturalHeight;

      let scaledWidth, scaledHeight;

      if (isMobile) {
        // Para móvil: mantener relación de aspecto, altura dinámica
        scaledHeight = Math.min(mobileMaxHeight, img.naturalHeight);
        scaledWidth = scaledHeight * naturalRatio;
      } else {
        // Para desktop: altura fija, ancho proporcional
        scaledHeight = desktopHeight;
        scaledWidth = desktopHeight * naturalRatio;
      }

      setImageDimensions((prev) => {
        const newArr = [...prev];
        newArr[i] = { width: scaledWidth, height: scaledHeight };
        return newArr;
      });
    },
    [isMobile]
  );

  // Calcular posiciones
  useEffect(() => {
    if (imageDimensions.length === 0 || imageDimensions.some((d) => !d?.width))
      return;

    const newPositions: number[] = [];
    let currentX = 0;

    duplicatedImages.forEach((_, i) => {
      newPositions.push(currentX);
      currentX += (imageDimensions[i]?.width || 0) + IMAGE_MARGIN;
    });

    setPositions(newPositions);
    setTotalWidth(currentX);
  }, [imageDimensions, duplicatedImages.length]);

  // Animación del carrusel
  useEffect(() => {
    if (totalWidth <= 0 || containerWidth <= 0 || !isClient) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const deltaTime = (now - lastTime) / 1000;
      lastTime = now;

      setScrollX((prev) => {
        let newValue = prev + speed * deltaTime;
        if (newValue >= totalWidth / 2) {
          newValue = newValue % (totalWidth / 2);
        }
        return newValue;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [totalWidth, containerWidth, speed, isClient]);

  // Calcular escala (más pronunciada en desktop)
  const getScale = useCallback(
    (xCenterImage: number): number => {
      if (!containerWidth) return 1;

      const containerCenter = containerWidth / 2;
      const distance = Math.abs(xCenterImage - containerCenter);
      const maxDistance = containerWidth * (isMobile ? 0.8 : 0.6);

      let scale =
        1 - (isMobile ? 0.3 : 0.5) * Math.min(distance / maxDistance, 1);
      return Math.max(scale, isMobile ? 0.8 : 0.7);
    },
    [containerWidth, isMobile]
  );

  // Componente de bordes degradados
  const GradientOverlays = () => (
    <>
      <div className="gradient-overlay left" />
      <div className="gradient-overlay right" />
    </>
  );

  // Calcular altura del contenedor
  const containerHeight = isMobile
    ? Math.max(...imageDimensions.map((d) => d?.height || 0), mobileMaxHeight) +
      20
    : desktopHeight + 40;

  if (!isClient) {
    return (
      <div
        ref={containerRef}
        className="carousel-container"
        style={{ height: `${desktopHeight + 40}px` }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      style={{
        height: `${containerHeight}px`,
        margin: "20px 0",
      }}
    >
      <GradientOverlays />

      <div
        className="carousel-track"
        style={{
          width: `${totalWidth}px`,
          transform: `translateX(${-scrollX}px)`,
          height: `${isMobile ? containerHeight - 20 : desktopHeight}px`,
          top: isMobile ? "10px" : "0",
        }}
      >
        {duplicatedImages.map((src, i) => {
          const imgWidth = imageDimensions[i]?.width || 0;
          const imgHeight = imageDimensions[i]?.height || 0;
          const leftPos = positions[i] || 0;
          const xCenterImage = leftPos + imgWidth / 2 - scrollX;
          const scale = getScale(xCenterImage);

          return (
            <div
              key={`${i}-${src}`}
              className="carousel-item"
              style={{
                left: `${leftPos}px`,
                width: `${imgWidth}px`,
                height: `${imgHeight}px`,
                transform: `scale(${scale})`,
                top: isMobile ? `calc(50% - ${imgHeight / 2}px)` : "20px",
              }}
            >
              <img
                src={src}
                alt={`Carousel item ${i % images.length}`}
                onLoad={(e) => handleImageLoad(e, i)}
                className="carousel-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: isMobile ? "contain" : "cover",
                }}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin: 0 auto;
          padding: 0 10px;
        }

        .carousel-track {
          position: absolute;
          left: 0;
          will-change: transform;
        }

        .carousel-item {
          position: absolute;
          transform-origin: center center;
          transition: transform 0.2s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          ${!isMobile ? "box-shadow: 0 4px 8px rgba(0,0,0,0.1);" : ""}
        }

        .gradient-overlay {
          pointer-events: none;
          position: absolute;
          top: 0;
          height: 100%;
          width: 15%;
          z-index: 2;
        }

        .gradient-overlay.left {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
          );
        }

        .gradient-overlay.right {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 255, 0)
          );
        }

        @media (max-width: 768px) {
          .carousel-container {
            padding: 0 5px;
          }

          .gradient-overlay {
            width: 8%;
          }
        }
      `}</style>
    </div>
  );
}
