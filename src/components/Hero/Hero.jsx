import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find Your Ideal Green Companion</h1>
        <p className={styles.description}>
        Discover the Perfect Plant for Your Space: Enhance Your Environment with the Right Green Companion! 
        </p>
        <a href="#GetYourPlant" className={styles.contactBtn}>
          Get Your Plant
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="plants and trees"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};