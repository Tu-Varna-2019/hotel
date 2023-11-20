import React, { useEffect, useState } from "react";
import { listRooms } from "../../graphql/queries";
import { HelpersContext } from "../../contexts/data_models/context";

export function Room() {
  const AVAILABLE_CATEGORIES = ["Single", "Double", "Triple"];
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [floor, setFloor] = useState(0);
  const [beds, setBeds] = useState(0);
  const [selectedClient, setSelectedClient] = useState("");

  const [allRoomsIDNumbers, setAllRoomsIDNumbers] = useState({});
  const [selectedRegistrationIndex, setSelectedRegistrationIndex] = useState(0);

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  useEffect(() => {
    async function getAllRooms() {
      try {
        const response = await client.graphql({
          query: listRooms,
        });

        const newRoomIDNumbers = response.data.listRooms.items.reduce(
          (acc, client) => {
            acc[client.id] = client.roomNumber;
            return acc;
          },
          {}
        );
        // PREVENT FROM useEffect LOOPING 2x TIMES
        setAllRoomsIDNumbers(newRoomIDNumbers);
      } catch (error) {
        logger.error(error);
      }
    }
    getAllRooms();
  }, [client, logger]);

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
    allRoomsIDNumbers,
    setAllRoomsIDNumbers,
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
