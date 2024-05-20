import React from 'react';

import styles from './offer-extra-info.module.css';

interface IOfferExtraInfo {
  extraInfo: {
    detailsTitle: string;
    details: string[];
    legend: string;
  };
}

export default function OfferExtraInfo({ extraInfo }: IOfferExtraInfo) {
  return (
    <div className={styles.extraInfo}>
      <p>{extraInfo.detailsTitle}</p>
      <ul>
        {extraInfo.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p id={styles.legend}>{extraInfo.legend}</p>
    </div>
  );
}
