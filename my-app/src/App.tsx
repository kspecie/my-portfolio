import  EmblaCarousel  from './components/EmblaCarousel/EmblaCarousel.tsx';
import Headshot from './components/Headshot/Headshot.tsx';
import Info from './components/Info/Info.tsx';
import type { EmblaOptionsType } from 'embla-carousel';
//import styles from './App.module.css'


const OPTIONS: EmblaOptionsType = {loop: true};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {

  return (
    <>
      <Headshot />
      <Info />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}

export default App
