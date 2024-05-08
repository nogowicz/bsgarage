import React from 'react';

import NavbarLinks from './NavbarLinks';

import styles from './navbar.module.css';

interface ISideNavbar {
  activateNavBar: boolean;
}

export default function SideNavbar({ activateNavBar }: ISideNavbar) {
  return (
    <nav
      className={`${styles.mobileNav} ${
        activateNavBar ? styles.openDrawer : styles.closeDrawer
      }`}
    >
      <NavbarLinks />
    </nav>
  );
}
