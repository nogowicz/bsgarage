'use client';

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from './project-card.module.css';

interface IProjectCard {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  src,
  alt,
  title,
  description,
}: IProjectCard) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Image src={src} alt={alt} width={1024} height={682} />
      <div className={styles.infoCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
