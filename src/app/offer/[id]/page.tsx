import React from 'react';
import Image from 'next/image';

import OfferExtraInfo from '@/components/offer-extra-info/OfferExtraInfo';

import styles from './page.module.css';

import offers from '@data/offer.json';

interface IOffer {
  params: {
    id: string;
  };
}

export default function Offer({ params }: IOffer) {
  const { id } = params;
  const offer = offers.find((o) => o.id.toString() === id);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {offer?.img && (
          <div className={styles.bannerContainer}>
            <Image
              src={offer.img.src}
              alt="BMW Indoor"
              className={styles.bannerImage}
              width={Number(offer.img.size.width)}
              height={Number(offer.img.size.height)}
            />
            <h1>{offer?.name}</h1>
          </div>
        )}
        <div className={styles.innerContainer}>
          <p>{offer?.description.intro}</p>
          <ul>
            {offer?.description.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{offer?.description.outro}</p>
          {offer?.extraInfo && <OfferExtraInfo extraInfo={offer.extraInfo} />}
        </div>
      </div>
    </main>
  );
}
