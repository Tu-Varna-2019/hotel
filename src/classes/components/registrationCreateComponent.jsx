import React from "react";

import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { createRegistration } from "../../graphql/mutations";

export function RegistrationCreateComponent() {
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] =
    React.useState(false);

  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { ClientObject, RegistrationObject } =
    React.useContext(DataModelContext);

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleCancelClick = (event) => {
    ComponentStateObject.setShowCreateRegistrationPage(false);
  };

  const handleSubmitClick = async (event) => {
    setIsSubmitButtonLoading(true);

    logger.info("Submitting registration...");

    try {
      await client.graphql({
        query: createRegistration,
        variables: {
          input: {
            dateCreation: UtilsObject.toAWSDateFormat(Date.now()),
            dateStart: UtilsObject.toAWSDateFormat(
              RegistrationObject.dateStart
            ),
            dateEnd: UtilsObject.toAWSDateFormat(RegistrationObject.dateEnd),
            // FKClients: {
            //   id: UtilsObject.dictFindKeyByValue(
            //     ClientObject.allClientIDNames,
            //     RegistrationObject.selectedClientName
            //   ),
            // },

            // FKRooms: {
            //   id: UtilsObject.dictFindKeyByValue(
            //     RoomObject.allRoomsIDNumbers,
            //     RegistrationObject.selectedRoomNumber
            //   ),
            // },
          },
        },
      });
      setIsSubmitButtonLoading(false);
      UtilsObject.showAlertBoxFull(
        "success",
        "Registration created successfully!",
        "success"
      );
      ComponentStateObject.setShowCreateRegistrationPage(false);
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
  };
}
