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
export declare type RoomUpdateFormInputValues = {
    roomNumber?: number;
    category?: string;
    floor?: number;
    beds?: number;
    price?: number;
    PKRegistration?: string;
};
export declare type RoomUpdateFormValidationValues = {
    roomNumber?: ValidationFunction<number>;
    category?: ValidationFunction<string>;
    floor?: ValidationFunction<number>;
    beds?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    PKRegistration?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomUpdateFormOverridesProps = {
    RoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    roomNumber?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    floor?: PrimitiveOverrideProps<TextFieldProps>;
    beds?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    PKRegistration?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    room?: any;
    onSubmit?: (fields: RoomUpdateFormInputValues) => RoomUpdateFormInputValues;
    onSuccess?: (fields: RoomUpdateFormInputValues) => void;
    onError?: (fields: RoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoomUpdateFormInputValues) => RoomUpdateFormInputValues;
    onValidate?: RoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoomUpdateForm(props: RoomUpdateFormProps): React.ReactElement;
