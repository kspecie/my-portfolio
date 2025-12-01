
import KaylaHeadshot from '../../assets/KaylaHeadshot.jpg';
import styles from './Headshot.module.css';
import { useState } from 'react';


export default function Headshot(){

  const [loaded, setLoaded] = useState(false);
  
  function handleClick() {
    alert("Hello! Thanks for clicking on my headshot!");
  }
    return (
      <div className={styles.headshotContainer}>
        <p className={styles.funFont2}>
          Click for Fun Facts! <br></br>&darr;{" "}
        </p>
        <button className={styles.headshot} onClick={handleClick}>
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