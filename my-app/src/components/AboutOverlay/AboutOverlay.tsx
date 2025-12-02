import styles from './AboutOverlay.module.css';
//import { useState } from 'react';


type AboutOverlayProps = {  
    onClose: () => void;
}

export default function AboutOverlay({ onClose }: AboutOverlayProps) {

    return (
      <div className={styles.overlayContainer}>
        <button
          className={styles.exitButton}
          aria-label='Close About Me Overlay'
          onClick={onClose}
          type="button"
          id="close"
        >
         X
        </button>
        <h2>About Me</h2>
      </div>
    );
}
