import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@aws-amplify/auth";

import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

export function Client() {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [ssn, setSsn] = useState([]);
  const [passport, setPassport] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      //const authenticatedUser = await getCurrentUser();
      const authenticatedUser = "test";
      console.log(authenticatedUser);
    }
    fetchData();
  }, []);

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

  return {
    navigate,
    name,
    address,
    ssn,
    passport,
    handleNameChange,
    handleAddressChange,
    handleSsnChange,
    handlePassportChange,
  };
}
