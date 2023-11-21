import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { updateRoom } from "../../graphql/mutations";
import { Room } from "../data_models/room";

export function RoomUpdateComponent() {
  const roomUpdate = Room();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowUpdateRoomPage(false);
  };

  const handleSubmitClick = async (pkregister) => {
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
            PKRegistration: pkregister,
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
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    roomUpdate,
  };
}
