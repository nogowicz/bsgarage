import React from 'react';

import Button from '@components/button/Button';
import Underline from './Underline';

import styles from './call-to-action-text.module.css';

export default function CallToActionText() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Chciałbyś zmienić coś w swoim samochodzie? Zmień podświetlenie! Nadaj mu
        młodości i ciesz się{' '}
        <span>
          oryginalnością! <Underline />
        </span>
      </div>
      <Button text="Skontaktuj się ze mną" />
    </div>
  );
}
