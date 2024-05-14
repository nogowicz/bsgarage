'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import PolandMap from '../../../public/poland-map-with-bg-second.webp';

import styles from './locations.module.css';

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id={styles.map}
    >
      <Image
        src={PolandMap.src}
        width={PolandMap.width / 8}
        height={PolandMap.height / 8}
        alt="Mapa lokalizacji"
      />
    </motion.div>
  );
}
