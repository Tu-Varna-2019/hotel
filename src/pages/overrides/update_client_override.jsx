import { ClientUpdateComponent } from "../../classes/components/clientUpdateComponent";

export function FuncUpdateClientOverride() {
  const {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    clientUpdate,
    handleDeleteClick,
  } = ClientUpdateComponent();

  const updateClientOOverride = {
    select_field_user: {
      isRequired: true,
      options: Object.values(clientUpdate.allClientIDNames),
      errorMessage: "Client must not be empty!",
      onChange: (event) =>
        clientUpdate.setCllientByAllClientIDNames(
          event
          // RegistrationObject.allRegistrationIDNames
        ),
    },
    textfield_name: {
      isRequired: true,
      hasError: clientUpdate.name === "" ? true : false,
      value: clientUpdate.name,
      errorMessage: "Name must not be empty!",
      onChange: (event) => clientUpdate.handleNameChange(event),
    },
    textfield_address: {
      isRequired: true,
      hasError: clientUpdate.address === "" ? true : false,
      value: clientUpdate.address,
      errorMessage: "Address must not be empty!",
      onChange: (event) => clientUpdate.handleAddressChange(event),
    },
    // select_field_registration: {
    //   isRequired: true,
    //   value: clientUpdate.selectedRegistrationName,
    //   options: RegistrationObject.allRegistrationIDNames,
    //   onChange: (event) => clientUpdate.handleSelectedRegistrationName(event),
    // },
    button_submit: {
      onClick: (event) => handleSubmitClick(),
      //isDisabled: isRoomAttributesEmpty,
      isLoading: isSubmitButtonLoading,
    },
    button_delete: {
      onClick: (event) => handleDeleteClick(),
      isDisabled: clientUpdate.cID == 0,
    },
    button_cancel: {
      onClick: (event) => handleCancelClick(event),
    },
  };

  return { updateClientOOverride };
}
