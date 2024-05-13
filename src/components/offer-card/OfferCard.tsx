'use client';

import React from 'react';

import styles from './offer-card.module.css';
import Button from '../button/Button';

interface IOfferCard {
  name: string;
  price: string;
  description: {
    shortDescription: string;
    intro: string;
    details: string[];
    outro: string;
  };
}

export default function OfferCard({ name, price, description }: IOfferCard) {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p id={styles.price}>{price}</p>
      </div>
      <p>{description.shortDescription}</p>
      <Button
        text="Dowiedz się więcej"
        isBlack
        withArrow
        onClick={() => console.log('Details')}
      />
    </div>
  );
}
