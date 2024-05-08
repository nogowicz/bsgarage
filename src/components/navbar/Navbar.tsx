'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.css';

import Logo from '../../../public/logo-without-bg.png';
import SideNavbar from './SideNavbar';
import NavbarLinks from './NavbarLinks';

export default function MiniNavbar() {
  const [activateNavBar, setActivateNavbar] = useState(false);

  return (
    <>
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
          <NavbarLinks />
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
      <SideNavbar activateNavBar={activateNavBar} />
    </>
  );
}
