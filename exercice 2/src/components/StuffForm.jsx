import React, { useState } from 'react';

export default function StuffForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStuff = {
      name: name,
      price: parseFloat(price)
    };

    onAdd(newStuff);

    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input 
        type="search" 
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />

      <p>Stuff price</p>
      <input 
        type="search" 
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
       />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
