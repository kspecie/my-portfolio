import EmblaCarousel from './components/EmblaCarousel/EmblaCarousel.tsx';
import Headshot from './components/Headshot/Headshot.tsx';
import Info from './components/Info/Info.tsx';
import AboutOverlay from './components/AboutOverlay/AboutOverlay.tsx';
import styles from './App.module.css'


function App() {

  return (
    <>
      <div className={styles.parent}>
        <Headshot />
        <AboutOverlay />
      </div>
      <Info />
      <EmblaCarousel />
    </>
  );
}

export default App
