'use client';

import React, { useRef, useState } from 'react';

import styles from './call-to-action-text.module.css';
import Image from 'next/image';

import { motion } from 'framer-motion';

import LineOne from '@assets/line-1.png';
import LineTwo from '@assets/line-2.png';
import Button from '../button/Button';

export default function CallToActionText() {
  const underlineRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const variants = {
    hidden: {
      clipPath: 'inset(0% 100% 0% 0%)',
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Chciałbyś zmienić coś w swoim samochodzie? Zmień podświetlenie! Nadaj mu
        młodości i ciesz się{' '}
        <span>
          oryginalnością!{' '}
          <motion.div
            ref={underlineRef}
            className={styles.underline}
            initial="hidden"
            animate={isAnimated ? 'visible' : 'hidden'}
            variants={variants}
            onViewportEnter={() => {
              if (!isAnimated) {
                setIsAnimated(true);
              }
            }}
          >
            <Image
              alt="line one"
              src={LineOne.src}
              width={LineOne.width / 2}
              height={LineOne.height / 2}
            />
            <Image
              alt="line two"
              src={LineTwo.src}
              width={LineTwo.width / 2}
              height={LineTwo.height / 2}
            />
          </motion.div>
        </span>
      </div>
      <Button text="Skontaktuj się ze mną" />
    </div>
  );
}
