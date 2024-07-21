import React from "react";

import styles from "./PlantCard.module.css";
import { getImageUrl } from "../../utils";

export const PlantCard = ({
  plants: { PlantName, imageSrc, LightRequirement, GrowthSpan,LifeSpan, Benefits, Care, Area },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${PlantName}`}
        className={styles.image}
      />
      <h3 className={styles.PlantName}>{PlantName}</h3>
      <p className={styles.LightRequirement}><strong>Light Requirement: </strong>{LightRequirement}</p>
      <p className={styles.GrowthSpan}><strong>Growth Span: </strong>{GrowthSpan}</p>
      <p className={styles.lifeSpan}><strong>
      Life Span: </strong>{LifeSpan}</p>
      <p className={styles.Benefits}><strong>Benefits: </strong>{Benefits}</p>
      <p className={styles.Care}><strong>Care: </strong>{Care}</p>
      <p className={styles.Area}><strong>Environment: </strong>{Area}</p>
    </div>
  );
};