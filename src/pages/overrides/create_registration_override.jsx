import React from "react";
import { RegistrationCreateComponent } from "../../classes/components/registrationCreateComponent";
import { DataModelContext } from "../../contexts/data_models/context";

export function FuncCreateRegistrationOverride() {
  const {
    RoomObject,
    RegistrationObject,
    isSubmitButtonLoading,
    ClientObject,
  } = React.useContext(DataModelContext);

  const { handleCancelClick, handleSubmitClick } =
    RegistrationCreateComponent();

  const isRegisterAttributesEmpty =
    RegistrationObject.dateEnd === "" ||
    RegistrationObject.dateStart === "" ||
    new Date(RegistrationObject.dateEnd).getTime() <=
      new Date(RegistrationObject.dateStart).getTime();

  const createRegistrationOverride = {
    select_field_client: {
      isRequired: true,
      value: RegistrationObject.selectedClientName,
      options: Object.values(ClientObject.allClientIDNames),
      errorMessage: "Client must not be empty!",
      onChange: (event) =>
        RegistrationObject.handleSelectedClientNameChange(event),
    },
    select_field_room: {
      isRequired: true,
      value: RegistrationObject.selectedRoomNumber,
      onChange: (event) =>
        RegistrationObject.handleSelectedRoomNumberChange(event),
      options: Object.values(RoomObject.allRoomsIDNumbers),
    },
    textfield_datestart: {
      isRequired: true,
      hasError: RegistrationObject.dateStart === "",
      value: RegistrationObject.dateStart,
      type: "date",
      errorMessage: "Date must not be empty!",
      onChange: (event) => RegistrationObject.handleDateStartChange(event),
    },
    textfield_dateend: {
      isRequired: true,
      hasError: RegistrationObject.dateEnd === "",
      value: RegistrationObject.dateEnd,
      type: "date",
      errorMessage: "Date must not be empty!",
      onChange: (event) => RegistrationObject.handleDateEndChange(event),
    },
    button_submit: {
      onClick: (event) =>
        handleSubmitClick(RegistrationObject.selectedRegistrationIndex),
      isDisabled: isRegisterAttributesEmpty,
      isLoading: isSubmitButtonLoading,
    },
    button_cancel: {
      onClick: (event) => handleCancelClick(event),
    },
  };

  return { createRegistrationOverride };
}
