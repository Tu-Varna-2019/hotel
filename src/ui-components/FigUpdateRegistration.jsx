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
export default function FigUpdateRegistration(props) {
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
      {...getOverrideProps(overrides, "FigUpdateRegistration")}
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
        width="495px"
        height="97px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="124px"
        left="calc(50% - 247.5px - -1.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Update  Registration"
        {...getOverrideProps(overrides, "Update Registration")}
      ></Text>
      <View
        width="766px"
        height="713px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="91px"
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
        top="664px"
        left="1019px"
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
        top="664px"
        left="757px"
        backgroundColor="rgba(92,102,112,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Cancel"
        {...getOverrideProps(overrides, "button_cancel")}
      ></Button>
      <SelectField
        width="323px"
        height="unset"
        label="Client"
        placeholder=" "
        position="absolute"
        top="489px"
        left="984px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "select_field_client")}
      ></SelectField>
      <SelectField
        width="323px"
        height="unset"
        label="Room"
        placeholder=" "
        position="absolute"
        top="489px"
        left="617px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "select_field_room")}
      ></SelectField>
      <SelectField
        width="300px"
        height="unset"
        label="Rooms"
        placeholder=" "
        position="absolute"
        top="221px"
        left="812px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "selectfield_rooms")}
      ></SelectField>
      <TextField
        width="300px"
        height="unset"
        label="Date Start"
        placeholder="Add"
        position="absolute"
        top="355px"
        left="617px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "textfield_datestart")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Date End"
        placeholder="Add"
        position="absolute"
        top="347px"
        left="984px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "textfield_dateend")}
      ></TextField>
    </View>
  );
}
