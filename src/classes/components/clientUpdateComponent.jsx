import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { updateClient, deleteClient } from "../../graphql/mutations";
import { Client } from "../data_models/client";
import { deleteUser, updateUserAttribute } from "aws-amplify/auth";

export function ClientUpdateComponent() {
  const clientUpdate = Client();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowUpdateClientPage(false);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      await client.graphql({
        query: deleteClient,
        variables: {
          input: {
            id: clientUpdate.cID,
          },
        },
      });

      await deleteUser();
    }
  };

  const handleSubmitClick = async () => {
    setIsSubmitButtonLoading(true);

    logger.info("Updating client...");

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
            //PKRegistration: pkregister,
          },
        },
      });

      await updateUserAttribute({
        userAttribute: {
          attributeKey: "name", // the attribute you want to update
          value: clientUpdate.name, // the new value for the attribute
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
    handleDeleteClick,
    isSubmitButtonLoading,
    handleCancelClick,
    handleSubmitClick,
    clientUpdate,
  };
}
