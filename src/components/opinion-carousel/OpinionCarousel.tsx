'use client';

import React from 'react';

import styles from './opinion-carousel.module.css';
import OpinionCard from '../opinion-card/OpinionCard';

import opinions from '@data/opinions.json';
import { motion } from 'framer-motion';

export default function OpinionCarousel() {
  return (
    <motion.div
      className={`${styles.scroller}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <ul className={`${styles.tag_list} ${styles.scroller__inner}`}>
        {[...opinions, ...opinions].map((opinion, index) => (
          <OpinionCard
            key={index}
            opinion={opinion.opinion}
            author={opinion.author}
          />
        ))}
      </ul>
    </motion.div>
  );
}
