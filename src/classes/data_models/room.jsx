import { useState } from "react";

export function Room() {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [floor, setFloor] = useState([]);
  const [beds, setBeds] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };
  const handleBedsChange = (event) => {
    setBeds(event.target.value);
  };
}
