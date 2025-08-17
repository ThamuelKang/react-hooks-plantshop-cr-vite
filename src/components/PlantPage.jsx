import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const data = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(data)
      .then(response => response.json())
      .then(data => {
        setPlants(data)
      })

  }, [])

  const filteredPlants = plants.filter(searchedPlant => {
    return  searchedPlant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm onAddPlant={newPlant => setPlants([...plants, newPlant])} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
