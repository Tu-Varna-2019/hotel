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
export declare type FigCreateUserOverridesProps = {
    FigCreateUser?: PrimitiveOverrideProps<ViewProps>;
    rectangle_child_grey?: PrimitiveOverrideProps<ViewProps>;
    "Create User"?: PrimitiveOverrideProps<TextProps>;
    textfield_name?: PrimitiveOverrideProps<TextFieldProps>;
    textfield_ssn38741533?: PrimitiveOverrideProps<TextFieldProps>;
    textfield_ssn38741540?: PrimitiveOverrideProps<TextFieldProps>;
    textfield_passport?: PrimitiveOverrideProps<TextFieldProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    button_submit?: PrimitiveOverrideProps<ButtonProps>;
    button_cancel?: PrimitiveOverrideProps<ButtonProps>;
    select_field_registration?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FigCreateUserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FigCreateUserOverridesProps | undefined | null;
}>;
export default function FigCreateUser(props: FigCreateUserProps): React.ReactElement;
