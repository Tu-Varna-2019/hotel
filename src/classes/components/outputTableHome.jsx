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

  const [tableResult, setTableResult] = React.useState(null);

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

  useEffect(() => {
    // Define the async function inside the effect
    const fetchData = async () => {
      const outputData = await getOutputTableData();
      setTableResult(outputData); // Set the data to state
    };

    // Call the async function
    fetchData().catch(console.error);
  }, [getOutputTableData]);

  return (
    <ThemeProvider theme={theme} colorMode="light">
      <Table highlightOnHover variation="striped">
        {tableResult}
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
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
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

export function OutputColumnTablesSSNHome({
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
