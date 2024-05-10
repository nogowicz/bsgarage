import React, { Dispatch, SetStateAction } from 'react';

import NavbarLinks from './NavbarLinks';

import styles from './navbar.module.css';

interface ISideNavbar {
  activateNavBar: boolean;
  setActivateNavbar: Dispatch<SetStateAction<boolean>>;
}

export default function SideNavbar({
  activateNavBar,
  setActivateNavbar,
}: ISideNavbar) {
  return (
    <nav
      className={`${styles.mobileNav} ${
        activateNavBar ? styles.openDrawer : styles.closeDrawer
      }`}
    >
      <NavbarLinks setActivateNavbar={setActivateNavbar} />
    </nav>
  );
}
