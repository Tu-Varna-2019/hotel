import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import { HelpersContext } from "../../contexts/data_models/context";
import React, { useEffect } from "react";
import { OutputTableComponent } from "./outputTableComponent";

export function OutputTableHome() {
  const { UtilsObject } = React.useContext(HelpersContext);
  const { getOutputTableData } = OutputTableComponent();

  const { tableResultTurnOver } = UtilsObject;

  const theme = {
    name: "table-theme",
    tokens: {
      components: {
        table: {
          row: {
            hover: {
              // Set hover background color to white
              backgroundColor: { value: "{colors.white}" },
            },

            striped: {
              // Set striped rows background color to white
              backgroundColor: { value: "{colors.white}" },
            },
          },

          header: {
            // Set header text color to white
            color: { value: "{colors.white}" },
            fontSize: { value: "{fontSizes.xl}" },
          },

          data: {
            // Set data text color to white and font weight
            color: { value: "{colors.white}" },
            fontWeight: { value: "{fontWeights.semibold}" },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme} colorMode="light">
      <Table highlightOnHover variation="striped">
        {tableResultTurnOver}
      </Table>
    </ThemeProvider>
  );
}

export function OutputAvailableRoomsTableHome({ outputColumns }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">SSN</TableCell>
          <TableCell as="th">Room number</TableCell>
          <TableCell as="th">Date</TableCell>
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
  );
}

export function OutputAllSSNTableHome({ outputColumns }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell as="th">room Number</TableCell>
          <TableCell as="th">category</TableCell>
          <TableCell as="th">floor</TableCell>
          <TableCell as="th">beds</TableCell>
          <TableCell as="th">price</TableCell>
          <TableCell as="th">Date Start</TableCell>
          <TableCell as="th">Date End</TableCell>
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
  );
}

export function OutputColumnTablesSSNHome({
  roomNumbers,
  categories,
  floors,
  beds,
  prices,
  dateStarts,
  dateEnds,
}) {
  return (
    <TableBody>
      {roomNumbers.map((roomNumber, index) => (
        <TableRow key={index}>
          <TableCell>{roomNumber}</TableCell>
          <TableCell>{categories[index]}</TableCell>
          <TableCell>{floors[index]}</TableCell>
          <TableCell>{beds[index]}</TableCell>
          <TableCell>{prices[index]}</TableCell>
          <TableCell>{dateStarts[index]}</TableCell>
          <TableCell>{dateEnds[index]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export function OutputColumnTablesHome({
  names,
  ssns,
  roomNumbers,
  dateStarts,
}) {
  return (
    <TableBody>
      {names.map((name, index) => (
        <TableRow key={index}>
          <TableCell>{name}</TableCell>
          <TableCell>{ssns[index]}</TableCell>
          <TableCell>{roomNumbers[index]}</TableCell>{" "}
          {/* Now handling room numbers */}
          <TableCell>{dateStarts[index]}</TableCell> {/* And date starts */}
        </TableRow>
      ))}
    </TableBody>
  );
}
