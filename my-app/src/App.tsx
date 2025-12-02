import EmblaCarousel from './components/EmblaCarousel/EmblaCarousel.tsx';
import Info from './components/Info/Info.tsx';
import styles from './App.module.css'
import AboutSection from './components/AboutSection/AboutSection.tsx';


function App() {

  return (
    <>
    <div className={styles.parent}>
      <AboutSection  />
    </div>
      <Info />
      <EmblaCarousel />
    </>
  );
}

export default App
