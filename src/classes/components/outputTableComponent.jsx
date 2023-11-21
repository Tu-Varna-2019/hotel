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
} from "../../graphql/queries";

export function OutputTableComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const getClientsByLastYearDate = async () => {
    try {
      const dateOneYearAgo = new Date();
      dateOneYearAgo.setFullYear(dateOneYearAgo.getFullYear() - 1);
      const dateYearAgoString = dateOneYearAgo.toISOString().split("T")[0]; // Format as YYYY-MM-DD

      // First, fetch registrations from the last year.
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

      // Extract the IDs of those registrations.
      const registrationIds = registrationData.data.listRegistrations.items.map(
        (reg) => reg.id
      );

      // Now, use those IDs to query for clients associated with those registrations.
      const clientsDataPromises = registrationIds.map((regId) =>
        client.graphql({
          query: listClients,
          variables: {
            filter: {
              PKRegistration: {
                eq: regId,
              },
            },
          },
        })
      );

      // Await all the client data queries.
      const clientsResults = await Promise.all(clientsDataPromises);

      // Flatten the result arrays and extract the client data.
      const clients = clientsResults.flatMap(
        (result) => result.data.listClients.items
      );

      // Now you have an array of clients which you can map to names and SSNs.
      const names = clients.map((client) => client.name);
      const ssns = clients.map((client) => client.ssn);

      logger.info("Clients fetched successfully.", names, ssns);
      return { names, ssns };
    } catch (err) {
      console.error("Error fetching customers:", err);
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
      const { names, ssns } = await getClientsByLastYearDate();
      const outputColumns = (
        <OutputColumnTablesHome names={names} ssns={ssns} />
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
