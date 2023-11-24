import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import {
  updateRegistration,
  deleteRegistration,
} from "../../graphql/mutations";
import { Registration } from "../data_models/registration";

export function RegistrationUpdateComponent() {
  const registrationUpdate = Registration();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowUpdateRegistrationPage(false);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      await client.graphql({
        query: deleteRegistration,
        variables: {
          input: {
            id: registrationUpdate.cID,
          },
        },
      });
      UtilsObject.showAlertBoxFull(
        "success",
        "Registration deleted successfully!",
        "success"
      );
      ComponentStateObject.setShowUpdateRegistrationPage(false);
    }
  };

  const handleSubmitClick = async (pkClient, pkRoom) => {
    setIsSubmitButtonLoading(true);
    logger.info("Updating registration...");

    try {
      await client.graphql({
        query: updateRegistration,
        variables: {
          input: {
            id: registrationUpdate.cID,
            dateCreation: registrationUpdate.dateOfCreation,
            dateStart: registrationUpdate.dateStart,
            dateEnd: registrationUpdate.dateEnd,
            PKClient: pkClient,
            PKRoom: pkRoom,
          },
        },
      });

      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Registration updated successfully!",
        "success"
      );
      ComponentStateObject.setShowUpdateRegistrationPage(false);
    } catch (error) {
      logger.error(error);
      UtilsObject.showAlertBoxFull("error", error.errors[0].message, "error");
      setIsSubmitButtonLoading(false);
    }
  };

  return {
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    registrationUpdate,
    handleDeleteClick,
  };
}
