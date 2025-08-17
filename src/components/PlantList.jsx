import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          price={plant.price}
          image={plant.image}
          initialInStock={plant.inStock ?? true}
        />
      ))}
    </ul>
  );
}

export default PlantList;
