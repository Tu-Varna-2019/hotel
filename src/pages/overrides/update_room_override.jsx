import React from "react";
import { RoomUpdateComponent } from "../../classes/components/roomUpdateComponent";
import { DataModelContext } from "../../contexts/data_models/context";

export function FuncUpdateRoomOverride() {
  const { RegistrationObject, RoomObject } = React.useContext(DataModelContext);

  const {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    roomUpdate,
    handleDeleteClick,
  } = RoomUpdateComponent();

  const updateRoomOverride = {
    selectfield_rooms: {
      isRequired: true,
      //value: selectedroomUpdate,
      options: Object.values(roomUpdate.allRoomsIDNumbers),
      errorMessage: "Room must not be empty!",
      onChange: (event) =>
        roomUpdate.setRoomByAllRoomsIDNumbers(
          event,
          RegistrationObject.allRegistrationIDNames
        ),
    },
    selectfield_category: {
      isRequired: true,
      value: roomUpdate.category,
      options: RoomObject.AVAILABLE_CATEGORIES,
      onChange: (event) => roomUpdate.handleCategoryChange(event),
    },
    stepperfield_floor: {
      onStepChange: (newValue) => roomUpdate.handleFloorChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: roomUpdate.floor,
    },
    stepperfield_beds: {
      onStepChange: (newValue) => roomUpdate.handleBedsChange(newValue),
      min: 1,
      max: 50,
      step: 1,
      value: roomUpdate.beds,
    },
    textfield_price: {
      isRequired: true,
      hasError: roomUpdate.price === 0,
      value: roomUpdate.price,
      type: "number",
      errorMessage: "Price must not be empty!",
      onChange: (event) => roomUpdate.handlePriceChange(event),
    },
    // select_field_registration: {
    //   isRequired: true,
    //   value: roomUpdate.selectedRegistrationName,
    //   options: RegistrationObject.allRegistrationIDNames,
    //   onChange: (event) => roomUpdate.handleSelectedRegistrationName(event),
    // },
    button_delete: {
      onClick: (event) => handleDeleteClick(),
      isDisabled: roomUpdate.cID === 0,
    },
    button_submit: {
      onClick: (event) =>
        handleSubmitClick(
          RegistrationObject.getRegistrationIDByIDDate(
            roomUpdate.selectedRegistrationName
          )
        ),
      //isDisabled: isRoomAttributesEmpty,
      isLoading: isSubmitButtonLoading,
    },
    button_cancel: {
      onClick: (event) => handleCancelClick(event),
    },
  };

  return { updateRoomOverride };
}
