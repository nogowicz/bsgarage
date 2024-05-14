import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './contact.module.css';

import FacebookIcon from '@/../public/facebook.svg';
import InstagramIcon from '@/../public/Instagram.svg';
import TikTokIcon from '@/../public/tiktok.svg';
import EmailIcon from '@/../public/email.svg';
import PhoneIcon from '@/../public/phone.svg';

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Skontaktuj się ze mną!</h2>
        <div className={styles.content}>
          <div className={styles.links}>
            <div>
              <Link
                href={'mailto:bartekstys8@gmail.com.com?subject=&body='}
                target="_blank"
              >
                <Image src={EmailIcon} alt="Email icon" />
                <p>bartekstys8@gmail.com</p>
              </Link>
              <Link href={'tel:+48534562152'}>
                <Image src={PhoneIcon} alt="Phone icon" />
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
                <Image src={FacebookIcon} alt="Facebook icon" />
                <p>Polub moją stronę na Facebook</p>
              </Link>
              <Link
                href={'https://www.instagram.com/b.s_garage/'}
                target="_blank"
              >
                <Image src={InstagramIcon} alt="Instagram icon" />
                <p>Zaobserwuj mnie na Instagram</p>
              </Link>
              <Link href={'https://www.tiktok.com/@b.s_garage'} target="_blank">
                <Image src={TikTokIcon} alt="TikTok icon" />
                <p>Zaobserwuj mnie na TikTok</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
