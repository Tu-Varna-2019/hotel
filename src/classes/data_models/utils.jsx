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

  const showAlertBoxFull = (heading, message, variation) => {
    setAlertBoxHeading(heading);
    setAlertBoxMessage(message);
    setAlertBoxVariation(variation);
    setShowAlertBox(true);
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
  };
}
