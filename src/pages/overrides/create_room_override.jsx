import React from "react";
import { DataModelContext } from "../../contexts/data_models/context";
import { RoomCreateComponent } from "../../classes/components/roomCreateComponent";
import { Room } from "../../classes/data_models/room";

export function FuncCreateRoomOverride() {
  const { RoomObject, RegistrationObject, isSubmitButtonLoading } =
    React.useContext(DataModelContext);

  const isRoomAttributesEmpty =
    RoomObject.category === "" ||
    RoomObject.price === 0 ||
    RoomObject.floor === 0 ||
    RoomObject.beds === 0;

  const { handleCancelClick, handleSubmitClick } = RoomCreateComponent();
  const createRoomOverride = {
    selectfield_category: {
      isRequired: true,
      value: RoomObject.category,
      options: RoomObject.AVAILABLE_CATEGORIES,
      errorMessage: "Category must not be empty!",
      //backgroundColor: "rgba(142, 142, 142, 1)",
      onChange: (event) => RoomObject.handleCategoryChange(event),
    },

    stepperfield_floor: {
      onStepChange: (newValue) => RoomObject.handleFloorChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: RoomObject.floor,
      //backgroundColor: "rgba(142, 142, 142, 1)",
    },
    stepperfield_beds: {
      onStepChange: (newValue) => RoomObject.handleBedsChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: RoomObject.beds,
      //backgroundColor: "rgba(142, 142, 142, 1)",
    },
    select_field_registration: {
      onChange: (event) => RoomObject.handleRegistrationChange(event),
      options: RegistrationObject.allRegistrationIDNames,
      //backgroundColor: "rgba(142, 142, 142, 1)",
    },
    textfield_price: {
      isRequired: true,
      hasError: RoomObject.price === 0 ? true : false,
      value: RoomObject.price,
      type: "number",
      errorMessage: "Price must not be empty!",
      onChange: (event) => RoomObject.handlePriceChange(event),
      //backgroundColor: "rgba(142, 142, 142, 1)",
    },
    button_submit: {
      onClick: (event) =>
        handleSubmitClick(RoomObject.selectedRegistrationIndex),
      isDisabled: isRoomAttributesEmpty,
      isLoading: isSubmitButtonLoading,
    },
    button_cancel: {
      onClick: (event) => handleCancelClick(event),
    },
  };

  return { createRoomOverride };
}
