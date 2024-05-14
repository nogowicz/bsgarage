import React from 'react';

import styles from './footer.module.css';
import { FaFacebookF, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import { PiTiktokLogo } from 'react-icons/pi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <p>Zaobserwuj mnie w socialmediach!</p>
        <div className={styles.socials}>
          <Link href={'https://www.instagram.com/b.s_garage/'} target="_blank">
            <FaInstagram size={30} />
          </Link>
          <Link href={'https://www.tiktok.com/@b.s_garage'} target="_blank">
            <PiTiktokLogo size={30} />
          </Link>
          <Link
            href={
              'https://www.facebook.com/profile.php?id=61550083800648&locale=pl_PL'
            }
            target="_blank"
          >
            <FaFacebookF size={30} />
          </Link>
        </div>
        <div className={styles.copyright}>
          <FaRegCopyright />
          Wszelkie prawa zastrzeżone
        </div>
      </div>
    </footer>
  );
}
