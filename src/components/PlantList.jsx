import React from "react";
import { useState, useEffect } from 'react'
import PlantCard from "./PlantCard";

function PlantList({ plants }) {


  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          image={plant.image}
          name={plant.name}
          price={plant.price}
          initialInStock={plant.inStock}
        />
      ))
      }
    </ul>
  );
}

export default PlantList;
