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
export declare type RegistrationUpdateFormInputValues = {
    dateCreation?: string;
    dateStart?: string;
    dateEnd?: string;
    PKClient?: string;
    PKRoom?: string;
};
export declare type RegistrationUpdateFormValidationValues = {
    dateCreation?: ValidationFunction<string>;
    dateStart?: ValidationFunction<string>;
    dateEnd?: ValidationFunction<string>;
    PKClient?: ValidationFunction<string>;
    PKRoom?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RegistrationUpdateFormOverridesProps = {
    RegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    dateCreation?: PrimitiveOverrideProps<TextFieldProps>;
    dateStart?: PrimitiveOverrideProps<TextFieldProps>;
    dateEnd?: PrimitiveOverrideProps<TextFieldProps>;
    PKClient?: PrimitiveOverrideProps<AutocompleteProps>;
    PKRoom?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    registration?: any;
    onSubmit?: (fields: RegistrationUpdateFormInputValues) => RegistrationUpdateFormInputValues;
    onSuccess?: (fields: RegistrationUpdateFormInputValues) => void;
    onError?: (fields: RegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RegistrationUpdateFormInputValues) => RegistrationUpdateFormInputValues;
    onValidate?: RegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RegistrationUpdateForm(props: RegistrationUpdateFormProps): React.ReactElement;
