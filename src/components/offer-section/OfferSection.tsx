import React from 'react';

import styles from './offer-section.module.css';
import offer from '@data/offer.json';

import OfferCard from '../offer-card/OfferCard';

export default function OfferSection() {
  return (
    <div className={styles.container}>
      <div id="offer" className={styles.innerContainer}>
        <h2>Co oferuję ?</h2>
        <div className={styles.offerContainer}>
          {offer.map((item) => (
            <OfferCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
