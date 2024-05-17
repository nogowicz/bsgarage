import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';

import offers from '@data/offer.json';
import Contact from '@/components/contact/Contact';

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
          {offer?.extraInfo && (
            <div className={styles.extraInfo}>
              <p>{offer.extraInfo.detailsTitle}</p>
              <ul>
                {offer.extraInfo.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p id={styles.legend}>{offer.extraInfo.legend}</p>
            </div>
          )}
        </div>
      </div>
      <Contact />
    </main>
  );
}
