/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FigUpdateUserOverridesProps = {
    FigUpdateUser?: PrimitiveOverrideProps<ViewProps>;
    rectangle_child_grey?: PrimitiveOverrideProps<ViewProps>;
    "Update User"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    button_submit?: PrimitiveOverrideProps<ButtonProps>;
    button_cancel?: PrimitiveOverrideProps<ButtonProps>;
    select_field_registration?: PrimitiveOverrideProps<SelectFieldProps>;
    textfield_name?: PrimitiveOverrideProps<TextFieldProps>;
    textfield_address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FigUpdateUserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FigUpdateUserOverridesProps | undefined | null;
}>;
export default function FigUpdateUser(props: FigUpdateUserProps): React.ReactElement;
