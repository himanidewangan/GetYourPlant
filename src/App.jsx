import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { GetYourPlant } from "./components/GetYourPlant/GetYourPlant";

import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <GetYourPlant />
      <Contact />
    </div>
  );
}

export default App;