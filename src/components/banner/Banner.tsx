'use client';
import React, { useEffect, useState } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';

const images = [
  { src: '/banner/bmw_blue.webp', alt: 'BMW Blue' },
  { src: '/banner/air_conditioning.webp', alt: 'Air Conditioning' },
  { src: '/banner/bmw_indoor.webp', alt: 'BMW Indoor' },
  { src: '/banner/cockpit_bmw_e92.webp', alt: 'BMW Cockpit E92' },
  { src: '/banner/indoor_detailing.webp', alt: 'Indoor Detailing' },
  { src: '/banner/cockpit_bmw.webp', alt: 'BMW Cockpit' },
];

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className={`${styles.bannerImage} ${
                index === currentImageIndex ? styles.bannerImageTransition : ''
              }`}
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>
        <div className={styles.textContainer}>
          <Image
            src="/logo-without-bg-white.png"
            alt="Logo BS Garage"
            width={200}
            height={200}
          />
          <h2>
            Zmiana podświetlania oraz kompleksowe usługi detailingu wnętrza
            samochodu, w tym oklejanie i czyszczenie.
          </h2>
        </div>
      </div>
    </>
  );
}
