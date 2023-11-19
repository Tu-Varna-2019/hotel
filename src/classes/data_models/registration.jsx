import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

import { listRegistrations } from "../../graphql/queries";

export function Registration() {
  const [dateOfCreation, setDateOfCreation] = useState([]);
  const [dateStart, setDateStart] = useState([]);
  const [dateEnd, setDateEnd] = useState([]);

  const [allRegistrationIDNames, setAllRegistrationIDNames] = useState([]);

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  // Fetch attributes
  useEffect(() => {
    async function getAllRegistrations() {
      try {
        const response = await client.graphql({
          query: listRegistrations,
        });
        logger.info("response:", response);
        // response.data.listRegistrations.items.forEach((client) => {
        //   setAllRegistrationIDNames((prevState) => [...prevState, client.id]);
        // });
      } catch (error) {
        logger.error(error);
      }
    }
    getAllRegistrations();
  }, [client, logger]);

  // `${new Date(client.dateStart).toLocaleDateString()} - ${client.id}`

  const getAllRegistrationsKeyByValue = (index) => {
    return allRegistrationIDNames[index];
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

  return {
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
