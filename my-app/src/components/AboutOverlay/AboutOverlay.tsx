import styles from './AboutOverlay.module.css';
import { useState } from 'react';
export default function AboutOverlay() {

    const [funFactsClicked, setFunFactsClicked] = useState<boolean>(false);

    return (
        <div className={styles.overlayContainer}>
        <h2>About Me</h2>
        </div>
    );
}
