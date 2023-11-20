import React from "react";

import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { createRoom } from "../../graphql/mutations";

export function RoomCreateComponent() {
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { RoomObject, RegistrationObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  const handleSubmitClick = async (index) => {
    setIsSubmitButtonLoading(true);
    let extractedPKRegistration = "";
    if (index !== 0) {
      // Regular expression to match the pattern
      const regex = /\d{1,2}\/\d{1,2}\/\d{4} - (.+)/;
      // Extract the substring
      const match =
        RegistrationObject.allRegistrationIDNames[index - 1].match(regex);
      extractedPKRegistration = match ? match[1] : null;
    }

    logger.info("Submitting room...");

    try {
      await client.graphql({
        query: createRoom,
        variables: {
          input: {
            roomNumber: 1,
            category: RoomObject.category,
            floor: RoomObject.floor,
            beds: RoomObject.beds,
            price: RoomObject.price,
            PKRegistration: extractedPKRegistration,
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
    // const apiResponse = await UtilsObject.apiCreateHotel({
    //   DataModel: "Room",
    //   Inputs: {
    //     category: RoomObject.category,
    //     floor: RoomObject.floor,
    //     beds: RoomObject.beds,
    //     price: RoomObject.price,
    //     PKRegistration: extractedSubstring,
    //   },
    // });
    // logger.info("apiResponse:", apiResponse);
  };

  return {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
  };
}
