import React from 'react';

import styles from './button.module.css';

interface IButton {
  withArrow?: boolean;
  isBlack?: boolean;
  text: string;
}

export default function Button({
  withArrow = false,
  isBlack = true,
  text,
}: IButton) {
  return (
    <button className={`${styles.button} ${isBlack ? styles.blackButton : ''}`}>
      {text}
    </button>
  );
}
