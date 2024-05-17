import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import projects from '@data/projects.json';

import BMW_IMAGE from '@/../public/banner/bmw_blue.webp';

export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <Image
            src={BMW_IMAGE.src}
            alt="BMW Indoor"
            className={styles.bannerImage}
            width={BMW_IMAGE.width}
            height={BMW_IMAGE.height}
          />
          <h1>Projekty</h1>
        </div>
        <div className={styles.innerContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <Image
                src={project.src}
                alt={project.alt}
                width={1024}
                height={300}
              />
              <div className={styles.infoCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
