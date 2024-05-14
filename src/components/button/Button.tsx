import React, { MouseEventHandler } from 'react';

import styles from './button.module.css';

import { FaArrowRight } from 'react-icons/fa';

interface IButton {
  withArrow?: boolean;
  isBlack?: boolean;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  withArrow = false,
  isBlack = true,
  text,
  onClick,
  type = 'button',
}: IButton) {
  return (
    <button
      type={type}
      className={`${styles.button} ${isBlack ? styles.blackButton : ''}`}
      onClick={onClick}
    >
      {text}
      {withArrow && <FaArrowRight className={styles.arrow} />}
    </button>
  );
}
