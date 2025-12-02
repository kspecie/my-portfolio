import React from 'react';
import styles from './ProjectDemoSection.module.css';
import EmblaCarousel from '../EmblaCarousel/EmblaCarousel';

const ProjectDemoSection = () => {
  return (
    <div className={styles.projectDemoContainer}>
      <h3 className={styles.funFont2}>
        -------- Project Demos --------
      </h3>
      <EmblaCarousel />
    </div>
  );
};

export default ProjectDemoSection;