import { useState } from "react";

export function Room() {
  const AVAILABLE_CATEGORIES = ["Single", "Double", "Triple"];
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [floor, setFloor] = useState(0);
  const [beds, setBeds] = useState(0);
  const [selectedClient, setSelectedClient] = useState("");

  const [selectedRegistrationIndex, setSelectedRegistrationIndex] = useState(0);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleFloorChange = (newValue) => {
    setFloor(newValue);
  };
  const handleBedsChange = (newValue) => {
    setBeds(newValue);
  };

  const handleRegistrationChange = (event) => {
    setSelectedRegistrationIndex(event.target.selectedIndex);
    setSelectedClient(event.target.value);
  };

  return {
    AVAILABLE_CATEGORIES,
    category,
    price,
    floor,
    beds,
    selectedClient,
    setSelectedClient,
    handleCategoryChange,
    handlePriceChange,
    handleFloorChange,
    handleBedsChange,
    handleRegistrationChange,
    selectedRegistrationIndex,
  };
}
