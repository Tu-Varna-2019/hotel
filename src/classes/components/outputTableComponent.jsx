import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import {
  OutputAvailableRoomsTableHome,
  OutputColumnTablesHome,
} from "./outputTableHome";
import {
  listClients,
  getClient,
  listRegistrations,
  listRooms,
  getRoom,
} from "../../graphql/queries";

export function OutputTableComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const getClientsAndRoomsByLastYearRegistrations = async () => {
    try {
      const dateOneYearAgo = new Date();
      dateOneYearAgo.setFullYear(dateOneYearAgo.getFullYear() - 1);
      const dateYearAgoString = dateOneYearAgo.toISOString().split("T")[0];

      // Fetch registrations from the last year, including client and room details
      const registrationData = await client.graphql({
        query: listRegistrations, // Adjust this query to include client and room details
        variables: {
          filter: {
            dateStart: {
              ge: dateYearAgoString,
            },
          },
        },
      });

      const registrations = registrationData.data.listRegistrations.items;

      // Prepare arrays to store the results
      const names = [];
      const ssns = [];
      const roomNumbers = [];
      const dateStarts = [];

      // Loop through each registration
      for (const registration of registrations) {
        const clientID = registration.PKClient;
        const roomID = registration.PKRoom;

        // Fetch client data
        // Assuming getClient and getRoom are queries for individual client and room
        const clientData = await client.graphql({
          query: getClient,
          variables: { id: clientID },
        });

        // Fetch room data
        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

        // Add client and room details to arrays
        if (clientData.data.getClient) {
          names.push(clientData.data.getClient.name);
          ssns.push(clientData.data.getClient.ssn);
          dateStarts.push(registration.dateStart); // Assuming dateStart is part of registration
        }

        if (roomData.data.getRoom) {
          roomNumbers.push(roomData.data.getRoom.roomNumber);
        }
      }

      return { names, ssns, roomNumbers, dateStarts };
    } catch (err) {
      console.error("Error fetching data:", err);
      return { names: [], ssns: [], roomNumbers: [], dateStarts: [] };
    }
  };

  const handleExitClick = (event) => {
    if (ComponentStateObject.showAvailableRooms) {
      ComponentStateObject.setShowAvailableRooms(false);
    } else if (ComponentStateObject.showAllSSNs) {
      ComponentStateObject.setShowAllSSNs(false);
    } else if (ComponentStateObject.showBookingTurnover) {
      ComponentStateObject.setShowBookingTurnover(false);
    }
  };

  const getOutputTableData = async () => {
    if (ComponentStateObject.showAvailableRooms) {
      const { names, ssns, roomNumbers, dateStarts } =
        await getClientsAndRoomsByLastYearRegistrations();

      // Pass the fetched data to the OutputColumnTablesHome component
      const outputColumns = (
        <OutputColumnTablesHome
          names={names}
          ssns={ssns}
          roomNumbers={roomNumbers}
          dateStarts={dateStarts}
        />
      );

      return <OutputAvailableRoomsTableHome outputColumns={outputColumns} />;
    } else if (ComponentStateObject.showAllSSNs) {
      ComponentStateObject.setShowAllSSNs(false);
    } else if (ComponentStateObject.showBookingTurnover) {
      ComponentStateObject.setShowBookingTurnover(false);
    }
  };

  return {
    handleExitClick,
    getOutputTableData,
  };
}
