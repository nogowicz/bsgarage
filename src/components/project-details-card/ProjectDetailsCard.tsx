import React from 'react';

import Image from 'next/image';

import styles from './project-details-card.module.css';

interface IProjectDetailsCard {
  project: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
}

export default function ProjectDetailsCard({ project }: IProjectDetailsCard) {
  return (
    <div className={styles.projectCard}>
      <Image src={project.src} alt={project.alt} width={1024} height={300} />
      <div className={styles.infoCard}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
