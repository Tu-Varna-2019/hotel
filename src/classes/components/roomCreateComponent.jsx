import React from "react";

import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { createRoom } from "../../graphql/mutations";
import { listRooms } from "../../graphql/queries";

export function RoomCreateComponent() {
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { RoomObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  const getRoomWithHighestNumber = async () => {
    try {
      const response = await client.graphql({
        query: listRooms,
      });

      const allRooms = response.data.listRooms.items;

      let highestRoomNumber = 0;
      allRooms.forEach((room) => {
        if (room.roomNumber >= highestRoomNumber) {
          highestRoomNumber = room.roomNumber;
        }
      });

      return highestRoomNumber;
    } catch (error) {
      console.error("Error fetching or processing rooms: ", error);
      return null;
    }
  };

  const handleSubmitClick = async (index) => {
    setIsSubmitButtonLoading(true);

    logger.info("Submitting room...");
    const highestRoomNumber = await getRoomWithHighestNumber();
    try {
      await client.graphql({
        query: createRoom,
        variables: {
          input: {
            roomNumber: highestRoomNumber + 1,
            category: RoomObject.category,
            floor: RoomObject.floor,
            beds: RoomObject.beds,
            price: RoomObject.price,
          },
        },
      });
      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Room created successfully!",
        "success"
      );
      ComponentStateObject.setShowCreateRoomPage(false);
    } catch (error) {
      logger.error(error);
      UtilsObject.showAlertBoxFull("error", error.errors[0].message, "error");
      setIsSubmitButtonLoading(false);
    }
  };

  return {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
  };
}
