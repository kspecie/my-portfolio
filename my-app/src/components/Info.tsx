import React from 'react';
import LinkedInIcon from '../assets/LinkedInIcon.png';
import styles from './Info.module.css';


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
        <div className={styles.cardContainer}>
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
        </div>
        <p>Test About Me</p>
      </div>
    );
}