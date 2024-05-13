import React from 'react';

import styles from './offer-section.module.css';
import offer from '@data/offer.json';

import OfferCard from '../offer-card/OfferCard';

export default function OfferSection() {
  return (
    <div id="offer" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Co oferuję ?</h2>
        <div className={styles.offerContainer}>
          {offer.map((item, index) => (
            <OfferCard
              key={index}
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
