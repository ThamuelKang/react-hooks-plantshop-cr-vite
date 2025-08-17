import React from "react";
import { useState } from "react";

function PlantCard({ id, name, price, initialInStock, image }) {
  const [inStock, setInStock] = useState(initialInStock);

  function changeStock() {
    setInStock(!inStock)
  }

  return (
    <li className="card" data-testid={id}>
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={changeStock} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
