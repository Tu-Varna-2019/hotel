/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function FigCreateRegistration(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="895px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FigCreateRegistration")}
      {...rest}
    >
      <View
        width="1920px"
        height="895px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(56,59,64,1)"
        {...getOverrideProps(overrides, "rectangle_child_grey")}
      ></View>
      <Text
        fontFamily="Hind Mysuru"
        fontSize="48px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="349px"
        height="97px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="74px"
        left="calc(50% - 174.5px - 25.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Registration"
        {...getOverrideProps(overrides, "Create User")}
      ></Text>
      <View
        width="664px"
        height="819px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="579px"
        border="3px SOLID rgba(255,255,255,1)"
        borderRadius="219px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Button
        width="142px"
        height="63px"
        position="absolute"
        top="723px"
        left="954px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        {...getOverrideProps(overrides, "button_submit")}
      ></Button>
      <Button
        width="142px"
        height="63px"
        position="absolute"
        top="723px"
        left="752px"
        backgroundColor="rgba(92,102,112,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Cancel"
        {...getOverrideProps(overrides, "button_cancel")}
      ></Button>
      <TextField
        width="300px"
        height="unset"
        label="Date Start"
        placeholder="Add"
        position="absolute"
        top="228px"
        left="794px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "textfield_datestart")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Date End"
        placeholder="Add"
        position="absolute"
        top="338px"
        left="787px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "textfield_dateend")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="228px"
        left="649px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date start"
        {...getOverrideProps(overrides, "Date start")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="327px"
        left="649px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Date End"
        {...getOverrideProps(overrides, "Date End")}
      ></Text>
      <SelectField
        width="323px"
        height="unset"
        label="Client"
        placeholder=" "
        position="absolute"
        top="587px"
        left="769px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "select_field_client")}
      ></SelectField>
      <SelectField
        width="323px"
        height="unset"
        label="Room"
        placeholder=" "
        position="absolute"
        top="464px"
        left="771px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "select_field_room")}
      ></SelectField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="455px"
        left="649px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rooms"
        {...getOverrideProps(overrides, "Rooms")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="578px"
        left="649px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Client"
        {...getOverrideProps(overrides, "Client")}
      ></Text>
    </View>
  );
}
