import React from "react";
import { ComponentStateContext } from "../../contexts/data_models/context";

export function RoomCreateComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  const handleSubmitClick = (event) => {
    ComponentStateObject.setShowCreateRoomPage(false);
  };

  return {
    handleCancelClick,
    handleSubmitClick,
  };
}
