'use client';
import React, { useEffect, useState } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import MiniNavbar from '../mini-navbar/MiniNavbar';

import BMW_COCKPIT from '@assets/banner/cockpit_bmw.jpg';
import AIR_CONDITIONING from '@assets/banner/air_conditioning.jpg';
import BMW_BLUE from '@assets/banner/bmw_blue.jpg';
import BMW_INDOOR from '@assets/banner/bmw_indoor.jpg';
import BMW_COCKPIT_E92 from '@assets/banner/cockpit_bmw_e92.jpg';
import INDOOR_DETAILING from '@assets/banner/indoor_detailing.jpg';

const images = [
  { src: BMW_COCKPIT, alt: 'BMW Cockpit' },
  { src: AIR_CONDITIONING, alt: 'Air Conditioning' },
  { src: BMW_BLUE, alt: 'BMW Blue' },
  { src: BMW_INDOOR, alt: 'BMW Indoor' },
  { src: BMW_COCKPIT_E92, alt: 'BMW Cockpit E92' },
  { src: INDOOR_DETAILING, alt: 'Indoor Detailing' },
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
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`${styles.bannerImage} ${
              index === currentImageIndex ? styles.bannerImageTransition : ''
            }`}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
        <MiniNavbar />
      </div>
    </>
  );
}
