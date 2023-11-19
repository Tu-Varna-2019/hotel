import React from "react";
import { generateClient } from "aws-amplify/api";
import { createRoom } from "../../graphql/mutations";
import {
  ComponentStateContext,
  DataModelContext,
} from "../../contexts/data_models/context";

export function RoomCreateComponent() {
  const client = generateClient();
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { RoomObject } = React.useContext(DataModelContext);

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  const handleSubmitClick = async (event) => {
    const newRoom = await client.graphql({
      query: createRoom,
      variables: {
        input: {
          roomNumber: 1,
          category: RoomObject.category,
          floor: RoomObject.floor,
          beds: RoomObject.beds,
          price: RoomObject.price,
          //PKRegistration: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
        },
      },
    });
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  return {
    handleCancelClick,
    handleSubmitClick,
  };
}
