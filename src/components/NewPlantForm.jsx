import React from "react";
import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  function handleForm(e) {
    e.preventDefault()

    const newPlant = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
      inStock: true
    }
    onAddPlant(newPlant)
    setName("")
    setPrice("")
    setImage("")
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm}>
        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={e => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
