/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listRegistrations } from "../graphql/queries";
import { createClient, updateRegistration } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ClientCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    ssn: "",
    address: "",
    passport: "",
    FKRegistrations: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [ssn, setSsn] = React.useState(initialValues.ssn);
  const [address, setAddress] = React.useState(initialValues.address);
  const [passport, setPassport] = React.useState(initialValues.passport);
  const [FKRegistrations, setFKRegistrations] = React.useState(
    initialValues.FKRegistrations
  );
  const [FKRegistrationsLoading, setFKRegistrationsLoading] =
    React.useState(false);
  const [fKRegistrationsRecords, setFKRegistrationsRecords] = React.useState(
    []
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setSsn(initialValues.ssn);
    setAddress(initialValues.address);
    setPassport(initialValues.passport);
    setFKRegistrations(initialValues.FKRegistrations);
    setCurrentFKRegistrationsValue(undefined);
    setCurrentFKRegistrationsDisplayValue("");
    setErrors({});
  };
  const [
    currentFKRegistrationsDisplayValue,
    setCurrentFKRegistrationsDisplayValue,
  ] = React.useState("");
  const [currentFKRegistrationsValue, setCurrentFKRegistrationsValue] =
    React.useState(undefined);
  const FKRegistrationsRef = React.createRef();
  const getIDValue = {
    FKRegistrations: (r) => JSON.stringify({ id: r?.id }),
  };
  const FKRegistrationsIdSet = new Set(
    Array.isArray(FKRegistrations)
      ? FKRegistrations.map((r) => getIDValue.FKRegistrations?.(r))
      : getIDValue.FKRegistrations?.(FKRegistrations)
  );
  const getDisplayValue = {
    FKRegistrations: (r) => r?.id,
  };
  const validations = {
    name: [],
    ssn: [],
    address: [],
    passport: [],
    FKRegistrations: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchFKRegistrationsRecords = async (value) => {
    setFKRegistrationsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: { or: [{ id: { contains: value } }] },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listRegistrations.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listRegistrations?.items;
      var loaded = result.filter(
        (item) => !FKRegistrationsIdSet.has(getIDValue.FKRegistrations?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setFKRegistrationsRecords(newOptions.slice(0, autocompleteLength));
    setFKRegistrationsLoading(false);
  };
  React.useEffect(() => {
    fetchFKRegistrationsRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          ssn,
          address,
          passport,
          FKRegistrations,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            ssn: modelFields.ssn,
            address: modelFields.address,
            passport: modelFields.passport,
          };
          const client = (
            await client.graphql({
              query: createClient.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createClient;
          const promises = [];
          promises.push(
            ...FKRegistrations.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateRegistration.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      PKClient: client.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClientCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              ssn,
              address,
              passport,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Ssn"
        isRequired={false}
        isReadOnly={false}
        value={ssn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ssn: value,
              address,
              passport,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.ssn ?? value;
          }
          if (errors.ssn?.hasError) {
            runValidationTasks("ssn", value);
          }
          setSsn(value);
        }}
        onBlur={() => runValidationTasks("ssn", ssn)}
        errorMessage={errors.ssn?.errorMessage}
        hasError={errors.ssn?.hasError}
        {...getOverrideProps(overrides, "ssn")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ssn,
              address: value,
              passport,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Passport"
        isRequired={false}
        isReadOnly={false}
        value={passport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              ssn,
              address,
              passport: value,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.passport ?? value;
          }
          if (errors.passport?.hasError) {
            runValidationTasks("passport", value);
          }
          setPassport(value);
        }}
        onBlur={() => runValidationTasks("passport", passport)}
        errorMessage={errors.passport?.errorMessage}
        hasError={errors.passport?.hasError}
        {...getOverrideProps(overrides, "passport")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              ssn,
              address,
              passport,
              FKRegistrations: values,
            };
            const result = onChange(modelFields);
            values = result?.FKRegistrations ?? values;
          }
          setFKRegistrations(values);
          setCurrentFKRegistrationsValue(undefined);
          setCurrentFKRegistrationsDisplayValue("");
        }}
        currentFieldValue={currentFKRegistrationsValue}
        label={"Fk registrations"}
        items={FKRegistrations}
        hasError={errors?.FKRegistrations?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "FKRegistrations",
            currentFKRegistrationsValue
          )
        }
        errorMessage={errors?.FKRegistrations?.errorMessage}
        getBadgeText={getDisplayValue.FKRegistrations}
        setFieldValue={(model) => {
          setCurrentFKRegistrationsDisplayValue(
            model ? getDisplayValue.FKRegistrations(model) : ""
          );
          setCurrentFKRegistrationsValue(model);
        }}
        inputFieldRef={FKRegistrationsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Fk registrations"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Registration"
          value={currentFKRegistrationsDisplayValue}
          options={fKRegistrationsRecords
            .filter(
              (r) => !FKRegistrationsIdSet.has(getIDValue.FKRegistrations?.(r))
            )
            .map((r) => ({
              id: getIDValue.FKRegistrations?.(r),
              label: getDisplayValue.FKRegistrations?.(r),
            }))}
          isLoading={FKRegistrationsLoading}
          onSelect={({ id, label }) => {
            setCurrentFKRegistrationsValue(
              fKRegistrationsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFKRegistrationsDisplayValue(label);
            runValidationTasks("FKRegistrations", label);
          }}
          onClear={() => {
            setCurrentFKRegistrationsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchFKRegistrationsRecords(value);
            if (errors.FKRegistrations?.hasError) {
              runValidationTasks("FKRegistrations", value);
            }
            setCurrentFKRegistrationsDisplayValue(value);
            setCurrentFKRegistrationsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "FKRegistrations",
              currentFKRegistrationsDisplayValue
            )
          }
          errorMessage={errors.FKRegistrations?.errorMessage}
          hasError={errors.FKRegistrations?.hasError}
          ref={FKRegistrationsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "FKRegistrations")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
