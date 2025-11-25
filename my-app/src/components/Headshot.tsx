
import KaylaHeadshot from '../assets/KaylaHeadshot.png';
import styles from './Headshot.module.css';

export default function Headshot(){
    return (
      <div className={styles.headshotContainer}>
        <div className={styles.headshot}>
          <img
            src={KaylaHeadshot}
            className={styles.headshotImage}
            alt="Kayla's Face"
          ></img>
        </div>
        <h1>Hi, I'm Kayla! &#x1F44B;&#x1F3FC;</h1>
      </div>
    );
}