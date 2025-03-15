"use client";

import React, { useRef, useEffect, useState } from "react";

interface ContinuousCarouselProps {
  images: string[];
  visibleCount?: number;
  speed?: number; // Factor de ajuste de velocidad
}

export default function ContinuousCarousel({
  images,
  visibleCount = 3,
  speed = 100, // Ajustable
}: ContinuousCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const TARGET_HEIGHT = 400; // Todas las imágenes tendrán esta altura
  const IMAGE_MARGIN = 10;

  const duplicatedImages = images.concat(images);

  const [imageWidths, setImageWidths] = useState<number[]>(() =>
    Array(duplicatedImages.length).fill(0)
  );

  const [positions, setPositions] = useState<number[]>(() =>
    Array(duplicatedImages.length).fill(0)
  );

  const [totalWidth, setTotalWidth] = useState(0);
  const [scrollX, setScrollX] = useState(0);

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

  function handleImageLoad(
    e: React.SyntheticEvent<HTMLImageElement>,
    i: number
  ) {
    const img = e.currentTarget;
    const ratio = img.naturalWidth / img.naturalHeight;
    const scaledWidth = ratio * TARGET_HEIGHT;

    setImageWidths((prev) => {
      const newArr = [...prev];
      newArr[i] = scaledWidth;
      return newArr;
    });
  }

  useEffect(() => {
    const newPositions = [];
    let currentX = 0;
    for (let i = 0; i < duplicatedImages.length; i++) {
      newPositions.push(currentX);
      currentX += imageWidths[i] + IMAGE_MARGIN;
    }
    setPositions(newPositions);
    setTotalWidth(currentX);
  }, [imageWidths, duplicatedImages.length]);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Ajustamos la velocidad para que sea constante
      const pxPerSecond = Math.min(50, totalWidth / speed); // Máximo 50px/s
      setScrollX((prev) => {
        let newVal = prev + pxPerSecond * dt;
        if (newVal >= totalWidth / 2) {
          newVal -= totalWidth / 2;
          lastTime = now;
        }
        return newVal;
      });

      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [totalWidth, speed]);

  function getScale(xCenterImage: number): number {
    if (!containerWidth) return 1;
    const containerCenter = containerWidth / 2;
    const distance = Math.abs(xCenterImage - containerCenter);
    let scale = 1 - 0.5 * (distance / containerCenter);
    return Math.max(0.5, scale);
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "800px",
      }}
    >
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

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: totalWidth,
          transform: `translateX(${-scrollX}px)`,
        }}
      >
        {duplicatedImages.map((src, i) => {
          const imgWidth = imageWidths[i];
          const leftPos = positions[i];

          const xCenterImage = leftPos + imgWidth / 2 - scrollX;
          const scale = getScale(xCenterImage);

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: leftPos,
                top: "50px",
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
