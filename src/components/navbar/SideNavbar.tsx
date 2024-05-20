import React, { Dispatch, SetStateAction, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    <AnimatePresence mode="wait" initial={false}>
      {activateNavBar && (
        <motion.nav
          className={`${styles.mobileNav} `}
          initial={{ translateX: '200px' }}
          animate={{ translateX: '0' }}
          exit={{ translateX: '200px' }}
          transition={{
            x: { type: 'spring', bounce: 0 },
          }}
        >
          <NavbarLinks setActivateNavbar={setActivateNavbar} />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
