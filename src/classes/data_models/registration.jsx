import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

import { listRegistrations } from "../../graphql/queries";

export function Registration() {
  const [dateOfCreation, setDateOfCreation] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState("");

  const [allRegistrationIDNames, setAllRegistrationIDNames] = useState([]);

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  // Fetch all registrations
  useEffect(() => {
    async function getAllRegistrations() {
      try {
        const response = await client.graphql({
          query: listRegistrations,
        });

        const newRegistrationIDNames =
          response.data.listRegistrations.items.map(
            (client) =>
              `${new Date(client.dateStart).toLocaleDateString()} - ${
                client.id
              }`
          );
        // PREVENT FROM useEffect LOOPING 2x TIMES
        setAllRegistrationIDNames(newRegistrationIDNames);
      } catch (error) {
        logger.error(error);
      }
    }
    getAllRegistrations();
  }, [client, logger]);

  const getAllRegistrationsKeyByValue = (index) => {
    return allRegistrationIDNames[index];
  };

  const handleSelectedClientNameChange = (event) => {
    setSelectedClientName(event.target.value);
  };
  const handleSelectedRoomNumberChange = (event) => {
    setSelectedRoomNumber(event.target.value);
  };

  const handleDateOfCreationChange = (event) => {
    setDateOfCreation(event.target.value);
  };
  const handleDateStartChange = (event) => {
    setDateStart(event.target.value);
  };
  const handleDateEndChange = (event) => {
    setDateEnd(event.target.value);
  };

  const getRegistrationIDByIDDate = (idDate) => {
    const regex = /\d{1,2}\/\d{1,2}\/\d{4} - (.+)/;
    const match = idDate.match(regex);
    return match ? match[1] : null;
  };

  return {
    getRegistrationIDByIDDate,
    handleSelectedRoomNumberChange,
    selectedRoomNumber,
    setSelectedRoomNumber,
    selectedClientName,
    handleSelectedClientNameChange,
    allRegistrationIDNames,
    setAllRegistrationIDNames,
    dateOfCreation,
    dateStart,
    dateEnd,
    handleDateOfCreationChange,
    handleDateStartChange,
    handleDateEndChange,
    getAllRegistrationsKeyByValue,
  };
}
