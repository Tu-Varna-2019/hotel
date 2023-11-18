import { useState } from "react";

export function Client() {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [ssn, setSsn] = useState([]);
  const [passport, setPassport] = useState([]);
  // Delete maybe ??
  const [phone, setPhone] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleSsnChange = (event) => {
    setSsn(event.target.value);
  };
  const handlePassportChange = (event) => {
    setPassport(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return {
    name,
    address,
    ssn,
    passport,
    phone,
    handleNameChange,
    handleAddressChange,
    handleSsnChange,
    handlePassportChange,
    handlePhoneChange,
  };
}
