import React, { useContext } from "react";
import { DataModelContext } from "../../contexts/data_models/context";
import { RoomCreateComponent } from "../../classes/components/roomCreateComponent";
import { Room } from "../../classes/data_models/room";

export function FuncCreateRoomOverride() {
  const { RoomObject } = React.useContext(DataModelContext);

  const { handleCancelClick, handleSubmitClick } = RoomCreateComponent();
  const createRoomOverride = {
    selectfield_category: {
      isRequired: true,
      value: RoomObject.category,
      options: RoomObject.AVAILABLE_CATEGORIES,
      errorMessage: "Category must not be empty!",
      type: "number",
      onChange: (event) => RoomObject.handleCategoryChange(event),
    },

    stepperfield_floor: {
      onStepChange: (newValue) => RoomObject.handleFloorChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: RoomObject.floor,
    },
    stepperfield_beds: {
      onStepChange: (newValue) => RoomObject.handleBedsChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: RoomObject.beds,
    },
    //   select_field_client: {
    //     onChange: (event) => handleSelectFieldCreateOptions(event),
    //     options: selectFieldCreate,
    //   },
    textfield_price: {
      isRequired: true,
      hasError: RoomObject.price === 0 ? true : false,
      value: RoomObject.price,
      type: "number",
      errorMessage: "Price must not be empty!",
      onChange: (event) => RoomObject.handlePriceChange(event),
    },
    button_submit: {
      onClick: (event) => handleSubmitClick(event),
      isDisabled: Room.isRoomAttributesEmpty,
    },
    button_cancel: {
      onClick: (event) => handleCancelClick(event),
    },
  };

  return { createRoomOverride };
}
