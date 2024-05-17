'use client';

import React from 'react';

import styles from './offer-card.module.css';
import Button from '../button/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IOfferCard {
  id: number;
  name: string;
  price: string;
  description: {
    shortDescription: string;
    intro: string;
    details: string[];
    outro: string;
  };
}

export default function OfferCard({
  id,
  name,
  price,
  description,
}: IOfferCard) {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p id={styles.price}>{price}</p>
      </div>
      <p>{description.shortDescription}</p>
      <Link href={`/offer/${id}`}>
        <Button text="Dowiedz się więcej" isBlack withArrow />
      </Link>
    </div>
  );
}
