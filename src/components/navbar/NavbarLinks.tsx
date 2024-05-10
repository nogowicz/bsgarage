import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

import { FaInstagram } from 'react-icons/fa';

import styles from './navbar.module.css';

interface INavbarLinks {
  setActivateNavbar: Dispatch<SetStateAction<boolean>>;
}

export default function NavbarLinks({ setActivateNavbar }: INavbarLinks) {
  return (
    <>
      <Link href="/" onClick={() => setActivateNavbar(false)}>
        Strona Główna
      </Link>
      <Link href="#projects" onClick={() => setActivateNavbar(false)}>
        Projekty
      </Link>
      <Link href="#pricing" onClick={() => setActivateNavbar(false)}>
        Cennik
      </Link>
      <Link href="#about" onClick={() => setActivateNavbar(false)}>
        O mnie
      </Link>
      <Link
        href="https://www.instagram.com/b.s_garage/"
        target="_blank"
        onClick={() => setActivateNavbar(false)}
      >
        <FaInstagram size={30} />
      </Link>
      <div
        className={styles.reversed_link}
        onClick={() => setActivateNavbar(false)}
      >
        <Link href="#contact">Kontakt</Link>
      </div>
    </>
  );
}
