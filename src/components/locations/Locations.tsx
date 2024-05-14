import React from 'react';

import styles from './locations.module.css';
import Map from './Map';

export default function Locations() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>
          Moje usługi głównie obejmują obszar Krakowa, jednak w wybranych
          przypadkach istnieje możliwość wykonania zleceń również w Przemyślu i
          Krośnie.
        </div>
        <Map />
      </div>
    </div>
  );
}
