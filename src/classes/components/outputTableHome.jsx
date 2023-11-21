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

export async function OutputTableHome() {
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

  // return (
  //   <ThemeProvider theme={theme} colorMode="light">
  //     <Table highlightOnHover variation="striped">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell as="th">Citrus</TableCell>
  //           <TableCell as="th">Stone Fruit</TableCell>
  //           <TableCell as="th">Berry</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         <TableRow>
  //           <TableCell>Orange</TableCell>
  //           <TableCell>Nectarine</TableCell>
  //           <TableCell>Raspberry</TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell>Grapefruit</TableCell>
  //           <TableCell>Apricot</TableCell>
  //           <TableCell>Blueberry</TableCell>
  //         </TableRow>
  //         <TableRow>
  //           <TableCell>Lime</TableCell>
  //           <TableCell>Peach</TableCell>
  //           <TableCell>Strawberry</TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //   </ThemeProvider>
  // );
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

export function OutputColumnTablesHome({ names, ssns }) {
  return (
    <TableBody>
      {" "}
      {names.map((name, index) => (
        <TableRow key={index}>
          <TableCell>{name}</TableCell>
          <TableCell>{ssns[index]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
