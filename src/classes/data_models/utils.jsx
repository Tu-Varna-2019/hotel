import { ConsoleLogger } from "aws-amplify/utils";
import { post, generateClient } from "aws-amplify/api";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Utils() {
  const logger = new ConsoleLogger("Amplify_Log", "INFO");
  const client = generateClient();
  const navigate = useNavigate();

  const [showAlertBox, setShowAlertBox] = React.useState(false);
  const [alertBoxMessage, setAlertBoxMessage] = React.useState("");
  const [alertBoxHeading, setAlertBoxHeading] = React.useState("");
  const [alertBoxVariation, setAlertBoxVariation] = React.useState("");
  const [tableResultTurnOver, setTableResultTurnOver] = React.useState(null);

  const showAlertBoxFull = (heading, message, variation) => {
    setAlertBoxHeading(heading);
    setAlertBoxMessage(message);
    setAlertBoxVariation(variation);
    setShowAlertBox(true);
  };

  // REMOVE: Can be removed ?
  function dictFindKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  function dictFindValueByKey(object, key) {
    return object[key];
  }

  const allRegistrationIDNamesBySubID = (registerIDNames, subID) => {
    return registerIDNames.find((element) => element.includes(subID));
  };

  const toAWSDateFormat = (isoDateTime) => {
    const dateObject = new Date(isoDateTime);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // API calls
  const apiCreateHotel = async (event) => {
    try {
      const responseOperation = post({
        apiName: "apiHotelProd",
        path: "/create",
        options: {
          body: {
            message: event,
            path: "/create",
          },
        },
      });
      const response = await responseOperation.response;

      logger.info(response);
      return response;
    } catch (err) {
      logger.info(err);
    }
  };

  const apiUpdateHotel = async (event) => {
    try {
      const responseOperation = post({
        apiName: "apiHotelProd",
        path: "/update",
        options: {
          body: {
            message: event,
            path: "/update",
          },
        },
      });
      const response = await responseOperation.response;
      logger.info(response);
      return response;
    } catch (err) {
      logger.info(err);
    }
  };
  return {
    allRegistrationIDNamesBySubID,
    toAWSDateFormat,
    dictFindValueByKey,
    dictFindKeyByValue,
    showAlertBoxFull,
    showAlertBox,
    setShowAlertBox,
    alertBoxHeading,
    alertBoxMessage,
    alertBoxVariation,
    setAlertBoxHeading,
    setAlertBoxMessage,
    setAlertBoxVariation,
    client,
    navigate,
    logger,
    apiCreateHotel,
    apiUpdateHotel,
    tableResultTurnOver,
    setTableResultTurnOver,
  };
}
