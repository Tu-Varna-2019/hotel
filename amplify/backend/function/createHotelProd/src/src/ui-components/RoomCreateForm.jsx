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
import { createRoom, updateRegistration } from "../graphql/mutations";
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
export default function RoomCreateForm(props) {
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
    roomNumber: "",
    category: "",
    floor: "",
    beds: "",
    price: "",
    FKRegistrations: [],
  };
  const [roomNumber, setRoomNumber] = React.useState(initialValues.roomNumber);
  const [category, setCategory] = React.useState(initialValues.category);
  const [floor, setFloor] = React.useState(initialValues.floor);
  const [beds, setBeds] = React.useState(initialValues.beds);
  const [price, setPrice] = React.useState(initialValues.price);
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
    setRoomNumber(initialValues.roomNumber);
    setCategory(initialValues.category);
    setFloor(initialValues.floor);
    setBeds(initialValues.beds);
    setPrice(initialValues.price);
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
    roomNumber: [],
    category: [],
    floor: [],
    beds: [],
    price: [],
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
          roomNumber,
          category,
          floor,
          beds,
          price,
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
            roomNumber: modelFields.roomNumber,
            category: modelFields.category,
            floor: modelFields.floor,
            beds: modelFields.beds,
            price: modelFields.price,
          };
          const room = (
            await client.graphql({
              query: createRoom.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createRoom;
          const promises = [];
          promises.push(
            ...FKRegistrations.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateRegistration.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      PKRoom: room.id,
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
      {...getOverrideProps(overrides, "RoomCreateForm")}
      {...rest}
    >
      <TextField
        label="Room number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={roomNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              roomNumber: value,
              category,
              floor,
              beds,
              price,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.roomNumber ?? value;
          }
          if (errors.roomNumber?.hasError) {
            runValidationTasks("roomNumber", value);
          }
          setRoomNumber(value);
        }}
        onBlur={() => runValidationTasks("roomNumber", roomNumber)}
        errorMessage={errors.roomNumber?.errorMessage}
        hasError={errors.roomNumber?.hasError}
        {...getOverrideProps(overrides, "roomNumber")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              roomNumber,
              category: value,
              floor,
              beds,
              price,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Floor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={floor}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              roomNumber,
              category,
              floor: value,
              beds,
              price,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.floor ?? value;
          }
          if (errors.floor?.hasError) {
            runValidationTasks("floor", value);
          }
          setFloor(value);
        }}
        onBlur={() => runValidationTasks("floor", floor)}
        errorMessage={errors.floor?.errorMessage}
        hasError={errors.floor?.hasError}
        {...getOverrideProps(overrides, "floor")}
      ></TextField>
      <TextField
        label="Beds"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={beds}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              roomNumber,
              category,
              floor,
              beds: value,
              price,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.beds ?? value;
          }
          if (errors.beds?.hasError) {
            runValidationTasks("beds", value);
          }
          setBeds(value);
        }}
        onBlur={() => runValidationTasks("beds", beds)}
        errorMessage={errors.beds?.errorMessage}
        hasError={errors.beds?.hasError}
        {...getOverrideProps(overrides, "beds")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              roomNumber,
              category,
              floor,
              beds,
              price: value,
              FKRegistrations,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              roomNumber,
              category,
              floor,
              beds,
              price,
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
