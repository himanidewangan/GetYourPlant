import React, { useState , useEffect} from 'react';
import plants from "../../data/plants.json";
import styles from "./GetYourPlant.module.css";
import {PlantCard } from "./PlantCard"
export const GetYourPlant = () => {

  const [selectedEnvironment, setSelectedEnvironment] = useState('');
  const [selectedFunction, setSelectedFunction] = useState('');
  const [filteredPlants, setFilteredPlants] = useState([]);
  
  useEffect(() => {
    filterPlants(selectedEnvironment, selectedFunction);
  }, [selectedEnvironment, selectedFunction]);


  const handleEnvironmentChange = (event) => {
    console.log('Environment selected:', event.target.value);
    setSelectedEnvironment(event.target.value);
  };

  const handleFunctionChange = (event) => {
    console.log('Function selected:', event.target.value);
    setSelectedFunction(event.target.value);
  };

  const filterPlants = (environment, func) => {
    const filtered = plants.filter(
      (plant) =>
        (environment ? plant.Area === environment : true) &&
        (func ? plant.Keyword.some(f => f === func) : true)
    );
    setFilteredPlants(filtered);
  };

  return (
    <section className={styles.container} id ="plants">
        <h2 className={styles.title}>
            Get Your Plants!
        </h2>
        
      <div className={styles.environment}>
        <label className={styles.env}>
          Environment:
          <select  >
            <option className={styles.puchka} value={selectedEnvironment} onChange={handleEnvironmentChange}>Select Environment</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </label>
      </div>
      
      <div className={styles.function}>
        <label className={styles.fun}>
          Function:
          <select className={styles.puchku} value={selectedFunction} onChange={handleFunctionChange}>
            <option value="">Select Function</option>
            <option value="Air Purifying">Air Purifying</option>
            <option value="Increases Humidity">Increases Humidity</option>
            <option value="Aromatic">Aromatic</option>
          </select>
        </label>
      </div>
      
      
        <div className={styles.plants} >
           {filteredPlants.map((plants,id)=>{
            return <PlantCard key={id} plants={plants}/>;
           })} 
        </div>
    </section>
  );
};
