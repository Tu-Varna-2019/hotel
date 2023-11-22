import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ThemeProvider,
  RadioGroupField,
  Radio,
  Label,
  Input,
  Flex,
  View,
  Divider,
  Button,
} from "@aws-amplify/ui-react";
import { HelpersContext } from "../../contexts/data_models/context";
import React, { useEffect } from "react";
import { OutputTableComponent } from "./outputTableComponent";

export function OutputTableTurnOver() {
  const { UtilsObject } = React.useContext(HelpersContext);
  const { tableResultTurnOver, setTableResultTurnOver } = UtilsObject;

  const { getOutputTableData, handleRadioTurnOverClick } =
    OutputTableComponent();

  const [radioValue, setRadioValue] = React.useState("Day");
  const [inputValue, setInputValue] = React.useState("");

  const themeRadio = {
    name: "radiogroup-theme",
    tokens: {
      components: {
        radiogroup: {
          radio: {
            borderWidth: { value: "{borderWidths.small}" },
            borderColor: { value: "{colors.blue.60}" },
            backgroundColor: { value: "{colors.blue.20}" },
            _checked: {
              color: { value: "{colors.blue.80}" },
            },
            label: {
              color: { value: "{colors.blue.80}" },
            },
          },
          legend: {
            color: { value: "{colors.blue.80}" },
            fontWeight: { value: "{fontWeights.bold}" },
          },
        },
      },
    },
  };

  return (
    <>
      <ThemeProvider theme={themeRadio} colorMode="light">
        <View>
          <RadioGroupField
            legend="TurnOver"
            name="themed"
            defaultValue="blue"
            onChange={(e) => setRadioValue(e.target.value)}
          >
            <Radio value="Day">Day</Radio>
            <Radio value="Month">Month</Radio>
            <Radio value="Last_3_months">Last 3 months</Radio>
            <Radio value="Last_6_months">Last 6 months</Radio>
            <Radio value="Year">Year</Radio>
          </RadioGroupField>
          <Divider />
          <Flex direction="column" gap="small">
            <Label htmlFor="quantity">
              Enter number for calculating TurnOver:{" "}
            </Label>
            <Input
              id="departing"
              type="date"
              onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <Button
              ariaLabel="To the moon!"
              loadingText=""
              style={{
                background: "#ADD8E6",
              }}
              onClick={() => handleRadioTurnOverClick(radioValue, inputValue)}
              isDisabled={inputValue === ""}
            >
              Go 🚀
            </Button>
          </Flex>
        </View>
      </ThemeProvider>
      {tableResultTurnOver}
      {/*
      <ThemeProvider theme={theme} colorMode="light">
        <Table highlightOnHover variation="striped">
          {tableResult}
        </Table>
      </ThemeProvider> */}
    </>
  );
}

export function OutputTurnOverTableHead({ turnOverPrice }) {
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
    <>
      <ThemeProvider theme={theme} colorMode="light">
        <Table highlightOnHover variation="striped">
          <TableHead>
            <TableRow>
              <TableCell as="th">TurnOver</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{turnOverPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ThemeProvider>
    </>
  );
}
