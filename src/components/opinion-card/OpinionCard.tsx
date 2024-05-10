import React from 'react';

import styles from './opinion-card.module.css';

interface IOpinionCard {
  opinion: string;
  author: string;
}

export default function OpinionCard({ opinion, author }: IOpinionCard) {
  return (
    <div className={styles.container}>
      <p className={styles.opinion}>{opinion}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}
