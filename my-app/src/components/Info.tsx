import React from 'react';
import LinkedInIcon from '../assets/LinkedInIcon.png';
import styles from './Info.module.css';
import KaylaSpecieSummary from '../../public/KaylaSpecieSummary.m4a'

interface CardProps {
    icon?: string | React.ReactNode;
    title: string;
    content?: string;
}


function Card({ icon, title, content }: CardProps){
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>
                {icon && (
                    typeof icon === 'string' ? (
                    <span className={styles.cardIcon}>{icon}</span>
                    ) : (icon)
                )}
                {title}
            </h2>
            <p className={styles.cardContent}>{content}</p>
        </div>
    )
}

export default function Info(){
    return (
      <div className={styles.infoContainer}>
        <div className={styles.audioContainer}>
          <p className={styles.funFont2}>Because <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer">NotebookLM</a> gives a better elevator pitch than I can: </p>
          
          <audio controls>
            <source src={KaylaSpecieSummary} type='audio/mp4' />
            Your browser does not support the video tag.
          </audio>
        </div>

        {/* <div className={styles.cardContainer}>
          <Card 
            icon="📍" 
            title="London, UK" 
            />
          <Card 
            icon={<img src={LinkedInIcon} alt="LinkedIn Logo" className={styles.cardIcon} />} 
            title="LinkedIn"  
            />
          <Card 
            icon="" 
            title="GitHub" 
          />
        </div> */}
      </div>
    );
}