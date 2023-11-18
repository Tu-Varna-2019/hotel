import React, { useState } from "react";
import { ComponentStateContext } from "../../contexts/data_models/context";

export function HomeComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const selectFieldBookARoomOptions = ["Book", "Edit", "Cancel"];
  const selectFieldInquery = [
    "all available rooms at the current date and time, sorted by room category",
    "booking turnover derived by setting a time period",
    "displaying all names, TINs of customers who occupied rooms in the last year",
    "to draw a schedule - most frequently booked room: Room-Period by months",
  ];
  const selectFieldCreate = ["Client", "Room", "Registration"];

  // Select Fields
  const imgHotelLogo = useState(false);
  const textWelcomeText = useState(true);

  const handleSelectFieldBookARoomOptions = (event) => {
    switch (event.target.value) {
      case "Book":
        break;
      case "Edit":
        break;
      case "Cancel":
        break;
      default:
        break;
    }
  };

  const handleSelectFieldInqueryOptions = (event) => {
    switch (event.target.value) {
      case "all available rooms at the current date and time, sorted by room category":
        break;
      case "booking turnover derived by setting a time period":
        break;
      case "displaying all names, TINs of customers who occupied rooms in the last year":
        break;
      case "to draw a schedule - most frequently booked room: Room-Period by months":
        break;
      default:
        break;
    }
  };

  const handleSelectFieldCreateOptions = (event) => {
    switch (event.target.value) {
      case "Client":
        break;
      case "Room":
        ComponentStateObject.setShowCreateRoomPage(true);
        break;
      case "Registration":
        break;
      default:
        break;
    }
  };

  // Buttons

  const handleSettingsButton = (event) => {
    console.log("Settings Button");
  };

  return {
    imgHotelLogo,
    textWelcomeText,
    selectFieldBookARoomOptions,
    handleSelectFieldBookARoomOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    selectFieldCreate,
    handleSelectFieldCreateOptions,
    handleSettingsButton,
  };
}
