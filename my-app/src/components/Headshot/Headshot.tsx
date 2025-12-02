
import KaylaHeadshot from '../../assets/KaylaHeadshot.jpg';
import styles from './Headshot.module.css';
import { useState } from 'react';

type HeadshotProps = {
  onClick: () => void;
}
export default function Headshot({ onClick }: HeadshotProps) {

  const [loaded, setLoaded] = useState(false);

    return (
      <div className={styles.headshotContainer}>
        <p className={styles.funFont2}>
          Click for Fun Facts! <br></br>&darr;{" "}
        </p>
        <button className={styles.headshot} onClick={onClick}>
          {!loaded && <div className={styles.placeholder}> </div>} 

           <img
            src={KaylaHeadshot}
            width='400'
            height='400'
            className={`${styles.headshotImage} ${
              loaded ? styles.headshotImageLoaded : ""
            }`}
            onLoad={() => setLoaded(true)}
            alt="Kayla's Face"
          ></img> 
         </button>

        <h1 className={styles.funFont2}>
          Hi, I'm Kayla!
          <span className={styles.handWave}> &#x1F44B;&#x1F3FC; </span>
        </h1>
      </div>
    );
}