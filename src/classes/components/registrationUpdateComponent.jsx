import React from "react";
import { Client } from "../data_models/client";
import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { updateClient } from "../../graphql/mutations";

export function ClientUpdateComponent() {
  const clientUpdate = Client();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { RoomObject, RegistrationObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowUpdateClientPage(false);
  };

  const handleSubmitClick = async (pkregister) => {
    setIsSubmitButtonLoading(true);

    logger.info("Updating client...");

    console.log("Input variables:", {
      name: clientUpdate.name,
      ssn: clientUpdate.ssn,
      address: clientUpdate.address,
      passport: clientUpdate.passport,
      PKRegistration: pkregister,
    });

    try {
      await client.graphql({
        query: updateClient,
        variables: {
          input: {
            id: clientUpdate.cID,
            name: clientUpdate.name,
            ssn: clientUpdate.ssn,
            address: clientUpdate.address,
            passport: clientUpdate.passport,
            PKRegistration: pkregister,
          },
        },
      });
      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Client updated successfully!",
        "success"
      );
      ComponentStateObject.setShowUpdateClientPage(false);
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
    clientUpdate,
  };
}
