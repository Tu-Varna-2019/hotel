import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { getClient, getRoom, listRegistrations } from "../../graphql/queries";
import {
  OutputAllSSNTableHome,
  OutputAvailableRoomsTableHome,
  OutputColumnTablesHome,
  OutputColumnTablesSSNHome,
} from "./outputTableHome";
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

      const registrationData = await client.graphql({
        query: listRegistrations,
        variables: {
          filter: {
            dateStart: {
              ge: dateYearAgoString,
            },
          },
        },
      });

      const registrations = registrationData.data.listRegistrations.items;

      const names = [];
      const ssns = [];
      const roomNumbers = [];
      const dateStarts = [];

      for (const registration of registrations) {
        const clientID = registration.PKClient;
        const roomID = registration.PKRoom;

        const clientData = await client.graphql({
          query: getClient,
          variables: { id: clientID },
        });

        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

        if (clientData.data.getClient) {
          names.push(clientData.data.getClient.name);
          ssns.push(clientData.data.getClient.ssn);
          dateStarts.push(registration.dateStart);
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

      const registrationData = await client.graphql({
        query: listRegistrations,
      });

      let registrations = registrationData.data.listRegistrations.items;

      registrations = registrations.filter((registration) => {
        const dateStart = new Date(registration.dateStart);
        const dateEnd = new Date(registration.dateEnd);

        return !(dateCurrent > dateStart && dateCurrent < dateEnd);
      });

      const roomNumbers = [];
      const categories = [];
      const floors = [];
      const beds = [];
      const prices = [];
      const dateStarts = [];
      const dateEnds = [];

      for (const registration of registrations) {
        const roomID = registration.PKRoom;

        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

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

  const calculateTurnover = async (dateStartArg, dateEndArg) => {
    try {
      let totalTurnover = 0;

      const registrationData = await client.graphql({
        query: listRegistrations,
      });

      let registrations = registrationData.data.listRegistrations.items;

      const activeRegistrations = registrations.filter((registration) => {
        const dateStart = new Date(registration.dateStart);
        const dateEnd = new Date(registration.dateEnd);

        return dateStart <= dateEndArg && dateEnd >= dateStartArg;
      });

      for (const registration of activeRegistrations) {
        const roomID = registration.PKRoom;

        const roomData = await client.graphql({
          query: getRoom,
          variables: { id: roomID },
        });

        if (roomData.data.getRoom) {
          totalTurnover += roomData.data.getRoom.price;
        }
      }

      return totalTurnover;
    } catch (err) {
      logger.error(err);
    }
  };

  const getDailyTurnover = async (targetDate) => {
    const targetDayStart = new Date(targetDate);
    targetDayStart.setHours(0, 0, 0, 0);
    const targetDayEnd = new Date(targetDate);
    targetDayEnd.setHours(23, 59, 59, 999);

    return await calculateTurnover(targetDayStart, targetDayEnd);
  };

  const getMonthlyTurnover = async (targetDate) => {
    const targetMonthStart = new Date(targetDate);
    targetMonthStart.setDate(1);
    targetMonthStart.setHours(0, 0, 0, 0);

    const targetMonthEnd = new Date(targetDate);
    targetMonthEnd.setMonth(targetMonthEnd.getMonth() + 1);
    targetMonthEnd.setDate(0);
    targetMonthEnd.setHours(23, 59, 59, 999);

    return await calculateTurnover(targetMonthStart, targetMonthEnd);
  };

  const getLastThreeMonthsTurnover = async (targetDate) => {
    const threeMonthsAgo = new Date(targetDate);
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 2);
    threeMonthsAgo.setDate(1);
    threeMonthsAgo.setHours(0, 0, 0, 0);

    const endOfCurrentMonth = new Date(targetDate);
    endOfCurrentMonth.setMonth(endOfCurrentMonth.getMonth() + 1);
    endOfCurrentMonth.setDate(0);
    endOfCurrentMonth.setHours(23, 59, 59, 999);

    return await calculateTurnover(threeMonthsAgo, endOfCurrentMonth);
  };

  const getLastSixMonthsTurnover = async (targetDate) => {
    const sixMonthsAgo = new Date(targetDate);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);
    sixMonthsAgo.setHours(0, 0, 0, 0);

    const endOfCurrentMonth = new Date(targetDate);
    endOfCurrentMonth.setMonth(endOfCurrentMonth.getMonth() + 1);
    endOfCurrentMonth.setDate(0);
    endOfCurrentMonth.setHours(23, 59, 59, 999);

    return await calculateTurnover(sixMonthsAgo, endOfCurrentMonth);
  };

  const getLastYearTurnover = async (targetDate) => {
    const twelveMonthsAgo = new Date(targetDate);
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 11);
    twelveMonthsAgo.setDate(1);
    twelveMonthsAgo.setHours(0, 0, 0, 0);

    const endOfCurrentMonth = new Date(targetDate);
    endOfCurrentMonth.setMonth(endOfCurrentMonth.getMonth() + 1);
    endOfCurrentMonth.setDate(0);
    endOfCurrentMonth.setHours(23, 59, 59, 999);

    return await calculateTurnover(twelveMonthsAgo, endOfCurrentMonth);
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
    let turnOver = null;
    switch (radioValue) {
      case "Day":
        turnOver = await getDailyTurnover(inputValue);
        break;
      case "Month":
        turnOver = await getMonthlyTurnover(inputValue);
        break;
      case "Last_3_months":
        turnOver = await getLastThreeMonthsTurnover(inputValue);
        break;
      case "Last_6_months":
        turnOver = await getLastSixMonthsTurnover(inputValue);
        break;
      case "Year":
        turnOver = await getLastYearTurnover(inputValue);
        break;
    }
    setTableResultTurnOver(
      <OutputTurnOverTableHead turnOverPrice={turnOver} />
    );
  };

  const getOutputTableData = async () => {
    if (ComponentStateObject.showAvailableRooms) {
      const { names, ssns, roomNumbers, dateStarts } =
        await getClientsAndRoomsByLastYearRegistrations();

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
