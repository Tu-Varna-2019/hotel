import { useState } from "react";

export function Registration() {
  const [dateOfCreation, setDateOfCreation] = useState([]);
  const [dateStart, setDateStart] = useState([]);
  const [dateEnd, setDateEnd] = useState([]);

  const handleDateOfCreationChange = (event) => {
    setDateOfCreation(event.target.value);
  };
  const handleDateStartChange = (event) => {
    setDateStart(event.target.value);
  };
  const handleDateEndChange = (event) => {
    setDateEnd(event.target.value);
  };
}
