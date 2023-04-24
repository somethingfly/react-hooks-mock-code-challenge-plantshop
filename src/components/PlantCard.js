import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stock, setStock] = useState(true);

  return (
    <li className="card">
      <img
        src={plant.image ? plant.image : "https://via.placeholder.com/400"}
        alt={plant.name ? plant.name : "plant name"}
      />
      <h4>{plant.name ? plant.name : "plant name"}</h4>
      <p>Price: {plant.price ? plant.price : "plant price"}</p>
      <div onClick={() => setStock(!stock)}>
        {stock ? (
          <button className="primary">In Stock</button>
        ) : (
          <button>Out of Stock</button>
        )}
      </div>
    </li>
  );
}


/*
function PlantCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}
*/

export default PlantCard;
