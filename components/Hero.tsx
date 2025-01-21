import React from 'react'
import Image from 'next/image';

const photos = [
  { url: '/images-hero/photo1.jpg', alt: 'Foto 1' },
  { url: '/images-hero/photo2.jpg', alt: 'Foto 2' },
  { url: '/images-hero/photo3.jpg', alt: 'Foto 3' },
  { url: '/images-hero/photo4.jpg', alt: 'Foto 4' },
  { url: '/images-hero/photo5.jpg', alt: 'Foto 5' },
  { url: '/images-hero/photo6.jpg', alt: 'Foto 6' },
  { url: '/images-hero/photo7.jpg', alt: 'Foto 7' },
  { url: '/images-hero/photo8.jpg', alt: 'Foto 8' },
  { url: '/images-hero/photo9.jpg', alt: 'Foto 9' },
  { url: '/images-hero/photo10.jpg', alt: 'Foto 10' },
  { url: '/images-hero/photo11.jpg', alt: 'Foto 11' },
];

const Hero = () => {
    return (
        <section className="columns-2 sm:columns-3 gap-0 pt-16">
          {photos.map((photo, index) => (
            <div key={index} className="mb-0 break-inside-avoid transform transition duration-300 hover:opacity-70">
              <Image
                src={photo.url}
                alt={photo.alt}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          ))}
        </section>
    )
}

export default Hero