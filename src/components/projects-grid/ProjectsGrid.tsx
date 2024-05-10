import React from 'react';

import ProjectCard from '../project-card/ProjectCard';

import styles from './projects-grid.module.css';
import images from '@data/projects.json';

import SeeMoreButton from './SeeMoreButton';

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
