'use client';
import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';

import styles from './cookie-consent-banner.module.css';
import Button from '../button/Button';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get('cookieConsent');
    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'accepted', { expires: 365 });
  };

  const handleRejectCookies = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'rejected', { expires: 365 });
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <p>
        Ta strona używa plików cookie.
        <span className={styles.link}>
          <Link
            target="_blank"
            href={'https://skrypt-cookies.pl/czym-sa-ciasteczka'}
          >
            Dowiedz się więcej
          </Link>
        </span>
      </p>

      <div className={styles.buttons}>
        <div onClick={handleAcceptCookies}>Akceptuj</div>
        <div onClick={handleRejectCookies}>Odrzuć</div>
      </div>
    </div>
  );
}
