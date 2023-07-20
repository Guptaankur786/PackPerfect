/* eslint-disable react/prop-types */
import { useState } from "react";
import "./form.css";
const Form = ({ onAddItems}) => {
  const option = Array(10).fill(0);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');
  const handleSubmit = (e)=>{
     e.preventDefault();
     const newItem = {
      quantity,description,packed:false,id:Date.now()
     }
     onAddItems(newItem)
     setDescription('');
     setQuantity(1);
  }
  return (
    <form className="form" onSubmit={(e)=>handleSubmit(e)}>
      <h3>what do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e)=>{
            setQuantity( e.target.value)
          }}>
        {option.map((_, i) => (
          <option  key={i} >
            {i + 1}
          </option>
        ))}
      </select>
      <input
        className="description"
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button >ADD</button>
    </form>
  );
};

export default Form;
