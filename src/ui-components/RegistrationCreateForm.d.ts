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
export declare type RegistrationCreateFormInputValues = {
    dateCreation?: string;
    dateStart?: string;
    dateEnd?: string;
    PKClient?: string;
    PKRoom?: string;
};
export declare type RegistrationCreateFormValidationValues = {
    dateCreation?: ValidationFunction<string>;
    dateStart?: ValidationFunction<string>;
    dateEnd?: ValidationFunction<string>;
    PKClient?: ValidationFunction<string>;
    PKRoom?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrationCreateFormOverridesProps = {
    RegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dateCreation?: PrimitiveOverrideProps<TextFieldProps>;
    dateStart?: PrimitiveOverrideProps<TextFieldProps>;
    dateEnd?: PrimitiveOverrideProps<TextFieldProps>;
    PKClient?: PrimitiveOverrideProps<AutocompleteProps>;
    PKRoom?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: RegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RegistrationCreateFormInputValues) => RegistrationCreateFormInputValues;
    onSuccess?: (fields: RegistrationCreateFormInputValues) => void;
    onError?: (fields: RegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegistrationCreateFormInputValues) => RegistrationCreateFormInputValues;
    onValidate?: RegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function RegistrationCreateForm(props: RegistrationCreateFormProps): React.ReactElement;
