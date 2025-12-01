import styles from './Info.module.css';

export default function Info(){
    return (
      <div className={styles.infoContainer}>
        <div className={styles.audioContainer}>
          <p className={styles.funFont2}>Because <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer">NotebookLM</a> gives a better elevator pitch than I can: </p>
          
          <audio controls aria-label="Kayla Specie Elevator Pitch">
            <source src="/KaylaSpecieSummary.m4a" type='audio/mp4' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    );
}