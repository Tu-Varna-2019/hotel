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
export default function FigUpdateUser(props) {
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
      {...getOverrideProps(overrides, "FigUpdateUser")}
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
        top="115px"
        left="calc(50% - 174.5px - 43.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Update User"
        {...getOverrideProps(overrides, "Update User")}
      ></Text>
      <View
        width="678px"
        height="751px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25px"
        left="554px"
        border="3px SOLID rgba(255,255,255,1)"
        borderRadius="219px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Button
        width="142px"
        height="63px"
        position="absolute"
        top="646px"
        left="996px"
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
        top="646px"
        left="831px"
        backgroundColor="rgba(92,102,112,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Cancel"
        {...getOverrideProps(overrides, "button_cancel")}
      ></Button>
      <Button
        width="142px"
        height="63px"
        position="absolute"
        top="646px"
        left="664px"
        size="default"
        isDisabled={false}
        variation="destructive"
        children="Delete"
        {...getOverrideProps(overrides, "button_delete")}
      ></Button>
      <SelectField
        width="323px"
        height="unset"
        label="User"
        placeholder=" "
        position="absolute"
        top="279px"
        left="805px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "select_field_user")}
      ></SelectField>
      <TextField
        width="300px"
        height="unset"
        label="Name"
        placeholder="Add"
        position="absolute"
        top="373px"
        left="805px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "textfield_name")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="Address"
        placeholder="Add"
        position="absolute"
        top="471px"
        left="805px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "textfield_address")}
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
        top="273px"
        left="657px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="User"
        {...getOverrideProps(overrides, "User")}
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
        top="382px"
        left="657px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name"
        {...getOverrideProps(overrides, "Name")}
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
        top="477px"
        left="657px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Address"
        {...getOverrideProps(overrides, "Address")}
      ></Text>
    </View>
  );
}
