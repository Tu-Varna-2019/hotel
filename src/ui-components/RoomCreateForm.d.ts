/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoomCreateFormInputValues = {
    roomNumber?: number;
    category?: string;
    floor?: number;
    beds?: number;
    price?: number;
    PKRegistration?: string;
};
export declare type RoomCreateFormValidationValues = {
    roomNumber?: ValidationFunction<number>;
    category?: ValidationFunction<string>;
    floor?: ValidationFunction<number>;
    beds?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    PKRegistration?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomCreateFormOverridesProps = {
    RoomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    roomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    floor?: PrimitiveOverrideProps<TextFieldProps>;
    beds?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    PKRegistration?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RoomCreateFormProps = React.PropsWithChildren<{
    overrides?: RoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoomCreateFormInputValues) => RoomCreateFormInputValues;
    onSuccess?: (fields: RoomCreateFormInputValues) => void;
    onError?: (fields: RoomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoomCreateFormInputValues) => RoomCreateFormInputValues;
    onValidate?: RoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoomCreateForm(props: RoomCreateFormProps): React.ReactElement;
