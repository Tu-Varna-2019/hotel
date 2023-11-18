import { useState } from "react";

export function Room() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [floor, setFloor] = useState(0);
  const [beds, setBeds] = useState(0);

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
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

  const isRoomAttributesEmpty = () => {
    return category === "" && price === 0.0 && floor === 0 && beds === 0;
  };

  return {
    category,
    price,
    floor,
    beds,
    handleCategoryChange,
    handlePriceChange,
    handleFloorChange,
    handleBedsChange,
    isRoomAttributesEmpty,
  };
}
