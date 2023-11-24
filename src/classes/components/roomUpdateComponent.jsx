import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { updateRoom, deleteRoom } from "../../graphql/mutations";
import { Room } from "../data_models/room";

export function RoomUpdateComponent() {
  const roomUpdate = Room();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = () => {
    ComponentStateObject.setShowUpdateRoomPage(false);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      await client.graphql({
        query: deleteRoom,
        variables: {
          input: {
            id: roomUpdate.cID,
          },
        },
      });
      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Room deleted successfully!",
        "success"
      );
      ComponentStateObject.setShowUpdateRoomPage(false);
    }
  };

  const handleSubmitClick = async () => {
    setIsSubmitButtonLoading(true);

    logger.info("Updating room...");

    try {
      await client.graphql({
        query: updateRoom,
        variables: {
          input: {
            id: roomUpdate.cID,
            roomNumber: roomUpdate.roomNumber,
            category: roomUpdate.category,
            floor: roomUpdate.floor,
            beds: roomUpdate.beds,
            price: roomUpdate.price,
          },
        },
      });
      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Room updated successfully!",
        "success"
      );
      ComponentStateObject.setShowUpdateRoomPage(false);
    } catch (error) {
      logger.error(error);
      UtilsObject.showAlertBoxFull("error", error.errors[0].message, "error");
      setIsSubmitButtonLoading(false);
    }
  };

  return {
    handleDeleteClick,
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    roomUpdate,
  };
}
