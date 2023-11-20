/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoWithTextProps } from "./LogoWithText";
import { ButtonProps, FlexProps, ImageProps, PlaceholderProps, RatingProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FigHomeOverridesProps = {
    FigHome?: PrimitiveOverrideProps<ViewProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "Frame 32138621474"?: PrimitiveOverrideProps<FlexProps>;
    text_book_a_room38621475?: PrimitiveOverrideProps<TextProps>;
    text_inquery?: PrimitiveOverrideProps<TextProps>;
    text_create?: PrimitiveOverrideProps<TextProps>;
    text_book_a_room3887580?: PrimitiveOverrideProps<TextProps>;
    select_field_update?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 32138621479"?: PrimitiveOverrideProps<FlexProps>;
    button_settings?: PrimitiveOverrideProps<ButtonProps>;
    text_Username?: PrimitiveOverrideProps<TextProps>;
    img_User?: PrimitiveOverrideProps<ImageProps>;
    rectangle_main_gray?: PrimitiveOverrideProps<ViewProps>;
    text_welcome_text?: PrimitiveOverrideProps<TextProps>;
    img_hotel_logo?: PrimitiveOverrideProps<ImageProps>;
    img_bed?: PrimitiveOverrideProps<ImageProps>;
    img_inquery?: PrimitiveOverrideProps<ImageProps>;
    img_create?: PrimitiveOverrideProps<ImageProps>;
    rating_rate_us?: PrimitiveOverrideProps<RatingProps>;
    text_rate_us?: PrimitiveOverrideProps<TextProps>;
    text_follow_us_on?: PrimitiveOverrideProps<TextProps>;
    Placeholder?: PrimitiveOverrideProps<PlaceholderProps>;
    img_twitter?: PrimitiveOverrideProps<ImageProps>;
    img_facebook?: PrimitiveOverrideProps<ImageProps>;
    img_youtube?: PrimitiveOverrideProps<ImageProps>;
    select_field_book_a_room?: PrimitiveOverrideProps<SelectFieldProps>;
    select_field_inquery?: PrimitiveOverrideProps<SelectFieldProps>;
    select_field_create?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FigHomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FigHomeOverridesProps | undefined | null;
}>;
export default function FigHome(props: FigHomeProps): React.ReactElement;
