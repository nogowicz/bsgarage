'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import styles from './mini-navbar.module.css';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import Logo from '../../../public/logo.jpeg';

export default function MiniNavbar() {
  const params = useParams();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.hash);
    console.log('Hash:', currentPath);
  }, [params, currentPath]);
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image alt="BS Garage Logo" src={Logo.src} width={50} height={50} />
      </Link>
      <ul>
        <li className={currentPath === '' ? styles.active : ''}>
          <Link href="/">Strona Główna</Link>
        </li>
        <li className={currentPath === '#pricing' ? styles.active : ''}>
          <Link href="#pricing">Cennik</Link>
        </li>
        <li className={currentPath === '#realizations' ? styles.active : ''}>
          <Link href="#realizations">Realizacje</Link>
        </li>
        <li className={currentPath === '#about' ? styles.active : ''}>
          <Link href="#about">O mnie</Link>
        </li>
        <li className={currentPath === '#contact' ? styles.active : ''}>
          <Link href="#contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}
