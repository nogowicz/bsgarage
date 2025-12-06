import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div id="contact" className={styles.innerContainer}>
        <h2>Skontaktuj się ze mną!</h2>
        <div className={styles.content}>
          <div className={styles.links}>
            <div>
              <Link
                href={'mailto:bartekstys8@gmail.com.com?subject=&body='}
                target="_blank"
              >
                <Image src="/email.svg" alt="Email icon" width={24} height={24} />
                <p>bartekstys8@gmail.com</p>
              </Link>
              <Link href={'tel:+48534562152'}>
                <Image src="/phone.svg" alt="Phone icon" width={24} height={24} />
                <p>+ 48 534 562 152</p>
              </Link>
            </div>
            <div>
              <Link
                href={
                  'https://www.facebook.com/profile.php?id=61550083800648&locale=pl_PL'
                }
                target="_blank"
              >
                <Image src="/facebook.svg" alt="Facebook icon" width={24} height={24} />
                <p>Polub moją stronę na Facebook</p>
              </Link>
              <Link
                href={'https://www.instagram.com/b.s_garage/'}
                target="_blank"
              >
                <Image src="/Instagram.svg" alt="Instagram icon" width={24} height={24} />
                <p>Zaobserwuj mnie na Instagram</p>
              </Link>
              <Link href={'https://www.tiktok.com/@b.s_garage'} target="_blank">
                <Image src="/tiktok.svg" alt="TikTok icon" width={24} height={24} />
                <p>Zaobserwuj mnie na TikTok</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
