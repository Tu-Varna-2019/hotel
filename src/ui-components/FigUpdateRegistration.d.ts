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
export declare type FigUpdateRegistrationOverridesProps = {
    FigUpdateRegistration?: PrimitiveOverrideProps<ViewProps>;
    rectangle_child_grey?: PrimitiveOverrideProps<ViewProps>;
    "Update Registration"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    button_submit?: PrimitiveOverrideProps<ButtonProps>;
    button_cancel?: PrimitiveOverrideProps<ButtonProps>;
    selectfield_registrations?: PrimitiveOverrideProps<SelectFieldProps>;
    textfield_datestart?: PrimitiveOverrideProps<TextFieldProps>;
    textfield_dateend?: PrimitiveOverrideProps<TextFieldProps>;
    Registrations?: PrimitiveOverrideProps<TextProps>;
    "Date Start"?: PrimitiveOverrideProps<TextProps>;
    "Date End"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FigUpdateRegistrationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FigUpdateRegistrationOverridesProps | undefined | null;
}>;
export default function FigUpdateRegistration(props: FigUpdateRegistrationProps): React.ReactElement;
