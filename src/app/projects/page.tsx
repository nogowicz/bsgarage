import React from 'react';
import Image from 'next/image';

import ProjectDetailsCard from '@/components/project-details-card/ProjectDetailsCard';

import styles from './page.module.css';
import projects from '@data/projects.json';

export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <Image
            src="/banner/bmw_blue.webp"
            alt="BMW Indoor"
            className={styles.bannerImage}
            width={1920}
            height={1080}
            priority
          />
          <h1>Projekty</h1>
        </div>
        <div className={styles.innerContainer}>
          {projects.map((project, index) => (
            <ProjectDetailsCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
