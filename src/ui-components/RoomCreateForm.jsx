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
import { createRoom } from "../graphql/mutations";
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
    PKRegistration: undefined,
  };
  const [roomNumber, setRoomNumber] = React.useState(initialValues.roomNumber);
  const [category, setCategory] = React.useState(initialValues.category);
  const [floor, setFloor] = React.useState(initialValues.floor);
  const [beds, setBeds] = React.useState(initialValues.beds);
  const [price, setPrice] = React.useState(initialValues.price);
  const [PKRegistration, setPKRegistration] = React.useState(
    initialValues.PKRegistration
  );
  const [PKRegistrationLoading, setPKRegistrationLoading] =
    React.useState(false);
  const [PKRegistrationRecords, setPKRegistrationRecords] = React.useState([]);
  const [selectedPKRegistrationRecords, setSelectedPKRegistrationRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRoomNumber(initialValues.roomNumber);
    setCategory(initialValues.category);
    setFloor(initialValues.floor);
    setBeds(initialValues.beds);
    setPrice(initialValues.price);
    setPKRegistration(initialValues.PKRegistration);
    setCurrentPKRegistrationValue(undefined);
    setCurrentPKRegistrationDisplayValue("");
    setErrors({});
  };
  const [
    currentPKRegistrationDisplayValue,
    setCurrentPKRegistrationDisplayValue,
  ] = React.useState("");
  const [currentPKRegistrationValue, setCurrentPKRegistrationValue] =
    React.useState(undefined);
  const PKRegistrationRef = React.createRef();
  const getDisplayValue = {
    PKRegistration: (r) =>
      `${r?.registrationNumber ? r?.registrationNumber + " - " : ""}${r?.id}`,
  };
  const validations = {
    roomNumber: [],
    category: [],
    floor: [],
    beds: [],
    price: [],
    PKRegistration: [{ type: "Required" }],
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
  const fetchPKRegistrationRecords = async (value) => {
    setPKRegistrationLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { registrationNumber: { contains: value } },
            { id: { contains: value } },
          ],
        },
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
      var loaded = result.filter((item) => PKRegistration !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPKRegistrationRecords(newOptions.slice(0, autocompleteLength));
    setPKRegistrationLoading(false);
  };
  React.useEffect(() => {
    fetchPKRegistrationRecords("");
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
          PKRegistration,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await client.graphql({
            query: createRoom.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
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
              PKRegistration,
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
              PKRegistration,
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
              PKRegistration,
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
              PKRegistration,
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
              PKRegistration,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              roomNumber,
              category,
              floor,
              beds,
              price,
              PKRegistration: value,
            };
            const result = onChange(modelFields);
            value = result?.PKRegistration ?? value;
          }
          setPKRegistration(value);
          setCurrentPKRegistrationValue(undefined);
        }}
        currentFieldValue={currentPKRegistrationValue}
        label={"Pk registration"}
        items={PKRegistration ? [PKRegistration] : []}
        hasError={errors?.PKRegistration?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("PKRegistration", currentPKRegistrationValue)
        }
        errorMessage={errors?.PKRegistration?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.PKRegistration(
                pKRegistrationRecords.find((r) => r.id === value) ??
                  selectedPKRegistrationRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPKRegistrationDisplayValue(
            value
              ? getDisplayValue.PKRegistration(
                  pKRegistrationRecords.find((r) => r.id === value) ??
                    selectedPKRegistrationRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPKRegistrationValue(value);
          const selectedRecord = pKRegistrationRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedPKRegistrationRecords([selectedRecord]);
          }
        }}
        inputFieldRef={PKRegistrationRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pk registration"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Registration"
          value={currentPKRegistrationDisplayValue}
          options={pKRegistrationRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.PKRegistration?.(r),
            }))}
          isLoading={PKRegistrationLoading}
          onSelect={({ id, label }) => {
            setCurrentPKRegistrationValue(id);
            setCurrentPKRegistrationDisplayValue(label);
            runValidationTasks("PKRegistration", label);
          }}
          onClear={() => {
            setCurrentPKRegistrationDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchPKRegistrationRecords(value);
            if (errors.PKRegistration?.hasError) {
              runValidationTasks("PKRegistration", value);
            }
            setCurrentPKRegistrationDisplayValue(value);
            setCurrentPKRegistrationValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("PKRegistration", currentPKRegistrationValue)
          }
          errorMessage={errors.PKRegistration?.errorMessage}
          hasError={errors.PKRegistration?.hasError}
          ref={PKRegistrationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PKRegistration")}
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
