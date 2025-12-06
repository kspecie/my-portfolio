import Info from './components/Info/Info.tsx';
import styles from './App.module.css'
import AboutSection from './components/AboutSection/AboutSection.tsx';
import ProjectDemoSection from './components/ProjectDemoSection/ProjectDemoSection.tsx';
import Footer from './components/Footer/Footer.tsx';



function App() {

  return (
    <>
      <h2 className={styles.tempHeader}>**Actively under construction.. Please check back for updates**</h2> 
      <div className={styles.parent}>
        <AboutSection />
      </div>
      <Info />
      <ProjectDemoSection />
      <Footer />
    </>
  );
}

export default App
