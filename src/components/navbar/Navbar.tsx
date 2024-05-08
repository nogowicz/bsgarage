'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './navbar.module.css';
import Image from 'next/image';

import Logo from '../../../public/logo-without-bg.png';
import { FaInstagram } from 'react-icons/fa';
import Instagram from '@assets/instagram.png';

export default function MiniNavbar() {
  const [activateNavBar, setActivateNavbar] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.navbar}>
          <div className={styles.left}>
            <Link href="/">
              <Image
                alt="BS Garage Logo"
                src={Logo.src}
                width={Logo.width / 10}
                height={Logo.height / 10}
              />
            </Link>
          </div>
          <nav className={styles.right}>
            <Link href="/">Strona Główna</Link>
            <Link href="#pricing">Cennik</Link>
            <Link href="#realizations">Realizacje</Link>
            <Link href="#realizations">Realizacje</Link>
            <Link href="https://www.instagram.com/b.s_garage/" target="_blank">
              <FaInstagram size={30} />
            </Link>
            <div className={styles.reversed_link}>
              <Link href="#contact">Kontakt</Link>
            </div>
          </nav>
          <div
            className={styles.hamburger}
            onClick={() => setActivateNavbar((prev) => !prev)}
          >
            <div
              className={`${styles.bar1} ${
                activateNavBar ? styles.animatedBar1 : styles.reverseFlipBar1
              }`}
            ></div>
            <div
              className={`${styles.bar2} ${
                activateNavBar ? styles.animatedBar2 : styles.reverseFlipBar2
              }`}
            ></div>
            <div
              className={`${styles.bar3} ${
                activateNavBar ? styles.animatedBar3 : styles.reverseFlipBar3
              }`}
            ></div>
          </div>
        </header>
      </div>
      <nav
        className={`${styles.mobileNav} ${
          activateNavBar ? styles.openDrawer : styles.closeDrawer
        }`}
      >
        <Link href="/">Strona Główna</Link>
        <Link href="#pricing">Cennik</Link>
        <Link href="#realizations">Realizacje</Link>
        <Link href="#about">O mnie</Link>
        <Link href="#contact">Kontakt</Link>
        <Link href="https://www.instagram.com/b.s_garage/" target="_blank">
          <FaInstagram size={30} />
        </Link>
      </nav>
    </>
  );
}
