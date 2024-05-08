import Link from 'next/link';
import React from 'react';

import { FaInstagram } from 'react-icons/fa';

import styles from './navbar.module.css';

export default function NavbarLinks() {
  return (
    <>
      <Link href="/">Strona Główna</Link>
      <Link href="#realizations">Realizacje</Link>
      <Link href="#pricing">Cennik</Link>
      <Link href="#about">O mnie</Link>
      <Link href="https://www.instagram.com/b.s_garage/" target="_blank">
        <FaInstagram size={30} />
      </Link>
      <div className={styles.reversed_link}>
        <Link href="#contact">Kontakt</Link>
      </div>
    </>
  );
}
