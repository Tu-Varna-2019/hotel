import React, { useEffect, useState } from "react";
import { listRooms, getRoom, getRegistration } from "../../graphql/queries";
import { HelpersContext } from "../../contexts/data_models/context";

export function Room() {
  const AVAILABLE_CATEGORIES = ["Single", "Double", "Triple"];
  const [cID, setCID] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [floor, setFloor] = useState(0);
  const [beds, setBeds] = useState(0);
  const [roomNumber, setRoomNumber] = useState(0);
  const [selectedRoom, setselectedRoom] = useState("");
  const [selectedRegistrationName, setSelectedRegistrationName] = useState("");

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
    setselectedRoom(event.target.value);
  };

  const setRoomByAllRoomsIDNumbers = async (event, registrationIDNamesArr) => {
    const roomID = UtilsObject.dictFindKeyByValue(
      allRoomsIDNumbers,
      parseInt(event.target.value, 10)
    );

    // Get a specific item
    const selectedRoom = await client.graphql({
      query: getRoom,
      variables: { id: roomID },
    });
    console.log("selectedRoom:", selectedRoom);
    setCID(selectedRoom.data.getRoom.id);
    setCategory(selectedRoom.data.getRoom.category);
    setFloor(selectedRoom.data.getRoom.floor);
    setBeds(selectedRoom.data.getRoom.beds);
    setPrice(selectedRoom.data.getRoom.price);
    setRoomNumber(selectedRoom.data.getRoom.roomNumber);

    // Get a specific item
    const oneRegistration = await client.graphql({
      query: getRegistration,
      variables: { id: selectedRoom.data.getRoom.PKRegistration },
    });

    const foundRegistrationNameID = UtilsObject.allRegistrationIDNamesBySubID(
      registrationIDNamesArr,
      oneRegistration.data.getRegistration.id
    );
    setSelectedRegistrationName(foundRegistrationNameID);
  };

  const handleSelectedRegistrationName = (event) => {
    setSelectedRegistrationName(event.target.value);
  };

  return {
    handleSelectedRegistrationName,
    cID,
    setRoomByAllRoomsIDNumbers,
    selectedRegistrationName,
    allRoomsIDNumbers,
    setAllRoomsIDNumbers,
    AVAILABLE_CATEGORIES,
    category,
    price,
    floor,
    beds,
    roomNumber,
    setRoomNumber,
    selectedRoom,
    setselectedRoom,
    handleCategoryChange,
    handlePriceChange,
    handleFloorChange,
    handleBedsChange,
    handleRegistrationChange,
    selectedRegistrationIndex,
  };
}
