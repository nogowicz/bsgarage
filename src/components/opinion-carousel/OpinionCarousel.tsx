import React from 'react';

import styles from './opinion-carousel.module.css';
import OpinionCard from '../opinion-card/OpinionCard';

import opinions from '@data/opinions.json';

export default function OpinionCarousel() {
  return (
    <div className={`${styles.scroller}`}>
      <ul className={`${styles.tag_list} ${styles.scroller__inner}`}>
        {[...opinions, ...opinions].map((opinion, index) => (
          <OpinionCard
            key={index}
            opinion={opinion.opinion}
            author={opinion.author}
          />
        ))}
      </ul>
    </div>
  );
}
