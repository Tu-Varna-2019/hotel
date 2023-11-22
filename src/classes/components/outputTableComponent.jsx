import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import {
  OutputAllSSNTableHome,
  OutputAvailableRoomsTableHome,
  OutputColumnTablesHome,
  OutputColumnTablesSSNHome,
} from "./outputTableHome";
import {
  listClients,
  getClient,
  listRegistrations,
  listRooms,
  getRoom,
} from "../../graphql/queries";
import { OutputTurnOverTableHead } from "./outputTableTurnOver";

export function OutputTableComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client, setTableResultTurnOver } = UtilsObject;

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

  const getRoomDetailsByLastYearRegistrations = async () => {
    try {
      const dateCurrent = new Date();
      dateCurrent.setHours(0, 0, 0, 0);

      // Fetch registrations from the last year, including room details
      const registrationData = await client.graphql({
        query: listRegistrations,
      });

      let registrations = registrationData.data.listRegistrations.items;

      registrations = registrations.filter((registration) => {
        const dateStart = new Date(registration.dateStart);
        const dateEnd = new Date(registration.dateEnd);

        return !(dateCurrent > dateStart && dateCurrent < dateEnd);
      });

      // Prepare arrays to store the results
      const roomNumbers = [];
      const categories = [];
      const floors = [];
      const beds = [];
      const prices = [];
      const dateStarts = [];
      const dateEnds = [];

      // Loop through each registration
      for (const registration of registrations) {
        const roomID = registration.PKRoom;

        // Fetch room data
        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

        // Add room details to arrays
        if (roomData.data.getRoom) {
          const room = roomData.data.getRoom;
          roomNumbers.push(room.roomNumber);
          categories.push(room.category);
          floors.push(room.floor);
          beds.push(room.beds);
          prices.push(room.price);
          dateStarts.push(registration.dateStart);
          dateEnds.push(registration.dateEnd);
        }
      }

      return {
        roomNumbers,
        categories,
        floors,
        beds,
        prices,
        dateStarts,
        dateEnds,
      };
    } catch (err) {
      console.error("Error fetching data:", err);
      return {
        roomNumbers: [],
        categories: [],
        floors: [],
        beds: [],
        prices: [],
        dateStarts: [],
        dateEnds: [],
      };
    }
  };

  const getDailyTurnover = async (targetDate) => {
    try {
      const targetDayStart = new Date(targetDate);
      targetDayStart.setHours(0, 0, 0, 0); // Set to start of the day

      const targetDayEnd = new Date(targetDate);
      targetDayEnd.setHours(23, 59, 59, 999); // Set to end of the day

      // Fetch all registrations
      const registrationData = await client.graphql({
        query: listRegistrations,
      });

      let registrations = registrationData.data.listRegistrations.items;

      // Filter registrations active during the target day
      const activeRegistrations = registrations.filter((registration) => {
        const dateStart = new Date(registration.dateStart);
        const dateEnd = new Date(registration.dateEnd);
        return dateStart <= targetDayEnd && dateEnd >= targetDayStart;
      });

      let totalTurnover = 0;

      // Loop through each active registration to calculate total turnover
      for (const registration of activeRegistrations) {
        const roomID = registration.PKRoom;

        // Fetch room data
        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

        // Add room's price to total turnover
        if (roomData.data.getRoom) {
          totalTurnover += roomData.data.getRoom.price;
        }
      }

      return totalTurnover;
    } catch (err) {
      console.error("Error calculating turnover:", err);
      return 0;
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

  const handleRadioTurnOverClick = async (radioValue, inputValue) => {
    let component = null;
    switch (radioValue) {
      case "Day":
        const dailyTurnOver = await getDailyTurnover(inputValue);
        setTableResultTurnOver(
          <OutputTurnOverTableHead turnOverPrice={dailyTurnOver} />
        );
        break;

      case "Month":
        break;
      case "Last_3_months":
        break;
      case "Last_6_months":
        break;
      case "Year":
        break;
      default:
        break;
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
      const {
        roomNumbers,
        categories,
        floors,
        beds,
        prices,
        dateStarts,
        dateEnds,
      } = await getRoomDetailsByLastYearRegistrations();
      // Pass the fetched data to the OutputColumnTablesHome component
      const outputColumns = (
        <OutputColumnTablesSSNHome
          roomNumbers={roomNumbers}
          categories={categories}
          floors={floors}
          beds={beds}
          prices={prices}
          dateStarts={dateStarts}
          dateEnds={dateEnds}
        />
      );

      return <OutputAllSSNTableHome outputColumns={outputColumns} />;
    } else if (ComponentStateObject.showBookingTurnover) {
      console.log("Booking Turnover");
    }
  };

  return {
    handleRadioTurnOverClick,
    handleExitClick,
    getOutputTableData,
  };
}
