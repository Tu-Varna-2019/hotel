import React from "react";
import { RegistrationUpdateComponent } from "../../classes/components/registrationUpdateComponent";
import {
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";

export function FuncUpdateRegistrationOverride() {
  const { RegistrationObject, RoomObject, ClientObject } =
    React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);

  const {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    registrationUpdate,
    handleDeleteClick,
  } = RegistrationUpdateComponent();

  const isRegisterAttributesEmpty = registrationUpdate.cID == 0;
  // new Date(registrationUpdate.dateEnd).getTime() <=
  //   new Date(registrationUpdate.dateStart).getTime();

  const updateRegistrationOOverride = {
    selectfield_registrations: {
      isRequired: true,
      options: RegistrationObject.allRegistrationIDNames,
      onChange: (event) =>
        registrationUpdate.setRegistrationByAllRegistrationIDNames(
          event,
          ClientObject.allClientIDNames,
          RoomObject.allRoomsIDNumbers
        ),
    },
    select_field_client: {
      isRequired: true,
      value: registrationUpdate.selectedClientName,
      options: Object.values(ClientObject.allClientIDNames),
      errorMessage: "Client must not be empty!",
      isDisabled: registrationUpdate.cID == 0,
      onChange: (event) =>
        registrationUpdate.handleSelectedClientNameChange(event),
    },
    select_field_room: {
      isRequired: true,
      isDisabled: registrationUpdate.cID == 0,
      errorMessage: "Room must not be empty!",
      value: registrationUpdate.selectedRoomNumber,
      onChange: (event) =>
        registrationUpdate.handleSelectedRoomNumberChange(event),
      options: Object.values(RoomObject.allRoomsIDNumbers),
    },
    textfield_datestart: {
      isRequired: true,
      hasError: registrationUpdate.dateStart === "",
      value: registrationUpdate.dateStart,
      type: "date",
      errorMessage: "Date must not be empty!",
      onChange: (event) => registrationUpdate.handleDateStartChange(event),
    },
    textfield_dateend: {
      isRequired: true,
      hasError: registrationUpdate.dateEnd === "",
      value: registrationUpdate.dateEnd,
      type: "date",
      errorMessage: "Date must not be empty!",
      onChange: (event) => registrationUpdate.handleDateEndChange(event),
    },
    button_submit: {
      onClick: () =>
        handleSubmitClick(
          UtilsObject.dictFindKeyByValue(
            ClientObject.allClientIDNames,
            registrationUpdate.selectedClientName
          ),
          UtilsObject.dictFindKeyByValue(
            RoomObject.allRoomsIDNumbers,
            parseInt(registrationUpdate.selectedRoomNumber, 10)
          )
        ),
      isDisabled: registrationUpdate.cID == 0,
      isLoading: isSubmitButtonLoading,
    },
    button_cancel: {
      onClick: () => handleCancelClick(),
    },
    button_delete: {
      onClick: () => handleDeleteClick(),
      isDisabled: isRegisterAttributesEmpty,
    },
  };

  return { updateRegistrationOOverride };
}
