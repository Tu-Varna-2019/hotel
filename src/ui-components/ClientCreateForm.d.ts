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
export declare type ClientCreateFormInputValues = {
    name?: string;
    ssn?: string;
    address?: string;
    passport?: string;
    PKRegistration?: string;
};
export declare type ClientCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    ssn?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    passport?: ValidationFunction<string>;
    PKRegistration?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCreateFormOverridesProps = {
    ClientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    ssn?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    passport?: PrimitiveOverrideProps<TextFieldProps>;
    PKRegistration?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ClientCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onSuccess?: (fields: ClientCreateFormInputValues) => void;
    onError?: (fields: ClientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onValidate?: ClientCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCreateForm(props: ClientCreateFormProps): React.ReactElement;
