import React from "react";

import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";

export function RoomCreateComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { RoomObject, RegistrationObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  const handleSubmitClick = async (index) => {
    logger.info(
      "Submitting room..." + RegistrationObject.allRegistrationIDNames[index]
    );
    const apiResponse = await RoomObject.apiCreateHotel({
      DataModel: "Room",
      Inputs: {
        category: RoomObject.category,
        floor: RoomObject.floor,
        beds: RoomObject.beds,
        price: RoomObject.price,
        PKRegistration: RegistrationObject.allRegistrationIDNames[index],
      },
    });
    logger.info("apiResponse:", apiResponse);
    ComponentStateObject.setShowCreateRoomPage(false);
    // const newRoom = await client.graphql({
    //   query: createRoom,
    //   variables: {
    //     input: {
    //       roomNumber: 1,
    //       category: RoomObject.category,
    //       floor: RoomObject.floor,
    //       beds: RoomObject.beds,
    //       price: RoomObject.price,
    //       //PKRegistration: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
    //     },
    //   },
    // });
  };

  return {
    handleCancelClick,
    handleSubmitClick,
  };
}
