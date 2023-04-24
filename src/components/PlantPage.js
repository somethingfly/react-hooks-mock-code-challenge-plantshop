import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function onSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  const plantsToDisplay = plants.filter((plant) => {
    if (searchTerm === "") return true;
    return (plant.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
  });
  
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search
        onSearch={onSearch}
        searchTerm={searchTerm}  
      />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

/*
function PlantPage() {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}
*/


export default PlantPage;
