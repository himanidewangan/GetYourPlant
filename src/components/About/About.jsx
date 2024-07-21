import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Your Go-To Destination for Plant Selection</h3>
              <p>
              Welcome to Get Your Plant, your go-to destination for finding the perfect plants to enhance any environment. Whether you're looking to beautify your home, office, or garden, we provide expert recommendations tailored to your unique surroundings and needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Our Mission</h3>
              <p>
              Our mission is to connect you with plants that not only thrive in your specific conditions but also serve a functional purpose, whether it's purifying the air, adding aesthetic value, or creating a tranquil space. Our innovative approach combines botanical expertise with a deep understanding of various environments to help you make informed choices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Transform Your Space</h3>
              <p>
              At Get Your Plant, we believe that the right plant can transform any space, making it more vibrant, healthy, and inviting. Explore our curated selections and let us guide you to your ideal green companion.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};