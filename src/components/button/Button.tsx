import React, { MouseEventHandler } from 'react';

import styles from './button.module.css';

import { FaArrowRight } from 'react-icons/fa';

interface IButton {
  withArrow?: boolean;
  isBlack?: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  withArrow = false,
  isBlack = true,
  text,
  onClick,
}: IButton) {
  return (
    <button
      className={`${styles.button} ${isBlack ? styles.blackButton : ''}`}
      onClick={onClick}
    >
      {text}
      {withArrow && <FaArrowRight className={styles.arrow} />}
    </button>
  );
}
