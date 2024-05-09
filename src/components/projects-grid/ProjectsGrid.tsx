import React from 'react';
import { StaticImageData } from 'next/image';

import ProjectCard from '../project-card/ProjectCard';

import styles from './projects-grid.module.css';

import BLACK_BMW from '@assets/projects/black_bmw.jpg';
import BLUE_BMW from '@assets/projects/bmw_blue_second.jpg';
import BMW_INDOOR_RED from '@assets/projects/bmw_indoor_red.jpg';
import BLUE_COCKPIT from '@assets/projects/blue_cockpit.jpg';
import COCKPIT_BMW_E90 from '@assets/projects/cockpit_bmw_e90.jpg';
import COCKPIT_BMW_E92 from '@assets/banner/cockpit_bmw_e92.jpg';

import SeeMoreButton from '../project-card/SeeMoreButton';

interface IImages {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const images: IImages[] = [
  {
    src: BLACK_BMW,
    alt: 'BMW Black',
    title: 'Detailing wnętrza',
    description:
      'Detailing wnętrza to kompleksowy proces czyszczenia i renowacji wnętrza samochodu, mający na celu przywrócenie mu stanu zbliżonego do nowego. Korzystamy z wysokiej jakości środków do pielęgnacji, aby zadbać o Twój pojazd. Cena za usługę wynosi od 300 do 400 zł, w zależności od stopnia zabrudzenia. Jeśli zdecydujesz się skorzystać z kilku naszych usług, możemy zaoferować zniżkę lub rabat.',
  },
  {
    src: BLUE_BMW,
    alt: 'BMW Blue',
    title: 'Odkurzanie, czyszczenie, pranie wnętrza',
    description:
      'Dokładne odkurzanie i pranie wnętrza odświeży Twój samochód i zapewni mu przyjemny zapach. Cena usługi zależy od stopnia zabrudzenia i obejmuje odkurzanie, pranie oraz czyszczenie, w przedziale od 400 do 600 zł. Na przykład, pranie jednego fotela kosztuje 80 zł. Jeśli zdecydujesz się skorzystać z kilku naszych usług, zaoferujemy zniżkę lub rabat.',
  },
  {
    src: BMW_INDOOR_RED,
    alt: 'BMW indoor red',
    title: 'Zmiana podświetlenia w serii „F”',
    description:
      'Cena za zmianę całego podświetlenia w seriach "F" wynosi od 800 do 1000 zł, w zależności od specyfikacji. Jeśli zdecydujesz się skorzystać z kilku naszych usług, oferujemy zniżki lub rabaty.',
  },
  {
    src: BLUE_COCKPIT,
    alt: 'BMW Blue Cockpit',
    title: 'Zmiana podświetlenia licznika w serii „F”',
    description:
      'Cena za zmianę podświetlenia licznika w seriach "F" wynosi 250 zł. Dodatkowo, jeśli życzysz sobie czerwone wskazówki, koszt wzrośnie o 100 zł.',
  },
  {
    src: COCKPIT_BMW_E90,
    alt: 'BMW E90 Cockpit',
    title: 'Zmiana podświetlenia w serii „E”',
    description:
      'Cena za zmianę całego podświetlenia w seriach "E" wynosi od 600 do 850 zł, w zależności od posiadanego wyposażenia. W przypadku skorzystania z kilku naszych usług oferujemy zniżki lub rabaty.',
  },
  {
    src: COCKPIT_BMW_E92,
    alt: 'BMW E92 Cockpit',
    title: 'Licznik high BMW E92',
    description:
      'Cena modyfikacji licznika zaczyna się od 200 zł i może sięgać 300 zł, w zależności od wybranej konfiguracji. Cena za konfigurację przedstawioną na zdjęciu wynosi 300 zł.',
  },
];

export default function ProjectsGrid() {
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Ostatnie Projekty</h2>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <ProjectCard
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
        <SeeMoreButton />
      </div>
    </div>
  );
}
