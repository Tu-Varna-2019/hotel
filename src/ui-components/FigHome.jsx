/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LogoWithText from "./LogoWithText";
import {
  Button,
  Flex,
  Image,
  Placeholder,
  Rating,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function FigHome(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FigHome")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="1920px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="calc(50% - 960px - 0px)"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(50,50,51,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      >
        <LogoWithText
          width="127.88px"
          height="18.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          color="brand"
          {...getOverrideProps(overrides, "LogoWithText")}
        ></LogoWithText>
        <Flex
          gap="120px"
          direction="row"
          width="851px"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 83px"
          {...getOverrideProps(overrides, "Frame 32138621474")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Book a room"
            {...getOverrideProps(overrides, "text_book_a_room38621475")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Inquery"
            {...getOverrideProps(overrides, "text_inquery")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create"
            {...getOverrideProps(overrides, "text_create")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Update"
            {...getOverrideProps(overrides, "text_book_a_room3887580")}
          ></Text>
        </Flex>
        <SelectField
          width="172px"
          height="unset"
          placeholder=" "
          shrink="0"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "select_field_update")}
        ></SelectField>
        <Flex
          gap="0"
          direction="row"
          width="613px"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32138621479")}
        >
          <Button
            width="111px"
            height="39px"
            shrink="0"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Settings"
            {...getOverrideProps(overrides, "button_settings")}
          ></Button>
          <Text
            fontFamily="Itim"
            fontSize="24px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="190px"
            height="48px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="John doe"
            {...getOverrideProps(overrides, "text_Username")}
          ></Text>
          <Image
            width="45px"
            height="45px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "img_User")}
          ></Image>
        </Flex>
      </Flex>
      <View
        width="1920px"
        height="987px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="93px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(56,59,64,1)"
        {...getOverrideProps(overrides, "rectangle_main_gray")}
      ></View>
      <Text
        fontFamily="Harlow Solid Italic"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        fontStyle="italic"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="741px"
        height="62px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="615px"
        left="calc(50% - 370.5px - -22.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to my Personal Hotel application"
        {...getOverrideProps(overrides, "text_welcome_text")}
      ></Text>
      <Image
        width="311px"
        height="308px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="293px"
        left="calc(50% - 155.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_hotel_logo")}
      ></Image>
      <Image
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="548px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_bed")}
      ></Image>
      <Image
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="767px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_inquery")}
      ></Image>
      <Image
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="937px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_create")}
      ></Image>
      <Rating
        width="unset"
        height="unset"
        position="absolute"
        top="1018px"
        left="1715px"
        size="default"
        {...getOverrideProps(overrides, "rating_rate_us")}
      ></Rating>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="98px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1013px"
        left="1610px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rate us !"
        {...getOverrideProps(overrides, "text_rate_us")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="98px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1015px"
        left="57px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Follow us on: "
        {...getOverrideProps(overrides, "text_follow_us_on")}
      ></Text>
      <Placeholder
        width="1810px"
        height="6px"
        position="absolute"
        top="988px"
        left="57px"
        size="Default"
        {...getOverrideProps(overrides, "Placeholder")}
      ></Placeholder>
      <Image
        width="33px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1015px"
        left="184px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_twitter")}
      ></Image>
      <Image
        width="33px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1015px"
        left="240px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_facebook")}
      ></Image>
      <Image
        width="33px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1015px"
        left="296px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "img_youtube")}
      ></Image>
      <SelectField
        width="172px"
        height="unset"
        placeholder=" "
        position="absolute"
        top="31px"
        left="431px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_book_a_room")}
      ></SelectField>
      <SelectField
        width="172px"
        height="unset"
        placeholder=" "
        position="absolute"
        top="30px"
        left="638px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_inquery")}
      ></SelectField>
      <SelectField
        width="172px"
        height="unset"
        placeholder=" "
        position="absolute"
        top="32px"
        left="822px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_create")}
      ></SelectField>
    </View>
  );
}
