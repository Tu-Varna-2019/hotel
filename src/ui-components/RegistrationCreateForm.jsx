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
import { listClients, listRooms } from "../graphql/queries";
import { createRegistration } from "../graphql/mutations";
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
export default function RegistrationCreateForm(props) {
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
    dateCreation: "",
    dateStart: "",
    dateEnd: "",
    PKClient: undefined,
    PKRoom: undefined,
  };
  const [dateCreation, setDateCreation] = React.useState(
    initialValues.dateCreation
  );
  const [dateStart, setDateStart] = React.useState(initialValues.dateStart);
  const [dateEnd, setDateEnd] = React.useState(initialValues.dateEnd);
  const [PKClient, setPKClient] = React.useState(initialValues.PKClient);
  const [PKClientLoading, setPKClientLoading] = React.useState(false);
  const [pKClientRecords, setPKClientRecords] = React.useState([]);
  const [selectedPKClientRecords, setSelectedPKClientRecords] = React.useState(
    []
  );
  const [PKRoom, setPKRoom] = React.useState(initialValues.PKRoom);
  const [PKRoomLoading, setPKRoomLoading] = React.useState(false);
  const [pKRoomRecords, setPKRoomRecords] = React.useState([]);
  const [selectedPKRoomRecords, setSelectedPKRoomRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDateCreation(initialValues.dateCreation);
    setDateStart(initialValues.dateStart);
    setDateEnd(initialValues.dateEnd);
    setPKClient(initialValues.PKClient);
    setCurrentPKClientValue(undefined);
    setCurrentPKClientDisplayValue("");
    setPKRoom(initialValues.PKRoom);
    setCurrentPKRoomValue(undefined);
    setCurrentPKRoomDisplayValue("");
    setErrors({});
  };
  const [currentPKClientDisplayValue, setCurrentPKClientDisplayValue] =
    React.useState("");
  const [currentPKClientValue, setCurrentPKClientValue] =
    React.useState(undefined);
  const PKClientRef = React.createRef();
  const [currentPKRoomDisplayValue, setCurrentPKRoomDisplayValue] =
    React.useState("");
  const [currentPKRoomValue, setCurrentPKRoomValue] = React.useState(undefined);
  const PKRoomRef = React.createRef();
  const getDisplayValue = {
    PKClient: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    PKRoom: (r) => `${r?.roomNumber ? r?.roomNumber + " - " : ""}${r?.id}`,
  };
  const validations = {
    dateCreation: [],
    dateStart: [],
    dateEnd: [],
    PKClient: [{ type: "Required" }],
    PKRoom: [{ type: "Required" }],
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
  const fetchPKClientRecords = async (value) => {
    setPKClientLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listClients.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listClients?.items;
      var loaded = result.filter((item) => PKClient !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPKClientRecords(newOptions.slice(0, autocompleteLength));
    setPKClientLoading(false);
  };
  const fetchPKRoomRecords = async (value) => {
    setPKRoomLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { roomNumber: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listRooms.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listRooms?.items;
      var loaded = result.filter((item) => PKRoom !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPKRoomRecords(newOptions.slice(0, autocompleteLength));
    setPKRoomLoading(false);
  };
  React.useEffect(() => {
    fetchPKClientRecords("");
    fetchPKRoomRecords("");
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
          dateCreation,
          dateStart,
          dateEnd,
          PKClient,
          PKRoom,
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
            query: createRegistration.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RegistrationCreateForm")}
      {...rest}
    >
      <TextField
        label="Date creation"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateCreation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dateCreation: value,
              dateStart,
              dateEnd,
              PKClient,
              PKRoom,
            };
            const result = onChange(modelFields);
            value = result?.dateCreation ?? value;
          }
          if (errors.dateCreation?.hasError) {
            runValidationTasks("dateCreation", value);
          }
          setDateCreation(value);
        }}
        onBlur={() => runValidationTasks("dateCreation", dateCreation)}
        errorMessage={errors.dateCreation?.errorMessage}
        hasError={errors.dateCreation?.hasError}
        {...getOverrideProps(overrides, "dateCreation")}
      ></TextField>
      <TextField
        label="Date start"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dateCreation,
              dateStart: value,
              dateEnd,
              PKClient,
              PKRoom,
            };
            const result = onChange(modelFields);
            value = result?.dateStart ?? value;
          }
          if (errors.dateStart?.hasError) {
            runValidationTasks("dateStart", value);
          }
          setDateStart(value);
        }}
        onBlur={() => runValidationTasks("dateStart", dateStart)}
        errorMessage={errors.dateStart?.errorMessage}
        hasError={errors.dateStart?.hasError}
        {...getOverrideProps(overrides, "dateStart")}
      ></TextField>
      <TextField
        label="Date end"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dateCreation,
              dateStart,
              dateEnd: value,
              PKClient,
              PKRoom,
            };
            const result = onChange(modelFields);
            value = result?.dateEnd ?? value;
          }
          if (errors.dateEnd?.hasError) {
            runValidationTasks("dateEnd", value);
          }
          setDateEnd(value);
        }}
        onBlur={() => runValidationTasks("dateEnd", dateEnd)}
        errorMessage={errors.dateEnd?.errorMessage}
        hasError={errors.dateEnd?.hasError}
        {...getOverrideProps(overrides, "dateEnd")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              dateCreation,
              dateStart,
              dateEnd,
              PKClient: value,
              PKRoom,
            };
            const result = onChange(modelFields);
            value = result?.PKClient ?? value;
          }
          setPKClient(value);
          setCurrentPKClientValue(undefined);
        }}
        currentFieldValue={currentPKClientValue}
        label={"Pk client"}
        items={PKClient ? [PKClient] : []}
        hasError={errors?.PKClient?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("PKClient", currentPKClientValue)
        }
        errorMessage={errors?.PKClient?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.PKClient(
                pKClientRecords.find((r) => r.id === value) ??
                  selectedPKClientRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPKClientDisplayValue(
            value
              ? getDisplayValue.PKClient(
                  pKClientRecords.find((r) => r.id === value) ??
                    selectedPKClientRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPKClientValue(value);
          const selectedRecord = pKClientRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedPKClientRecords([selectedRecord]);
          }
        }}
        inputFieldRef={PKClientRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pk client"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Client"
          value={currentPKClientDisplayValue}
          options={pKClientRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.PKClient?.(r),
            }))}
          isLoading={PKClientLoading}
          onSelect={({ id, label }) => {
            setCurrentPKClientValue(id);
            setCurrentPKClientDisplayValue(label);
            runValidationTasks("PKClient", label);
          }}
          onClear={() => {
            setCurrentPKClientDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchPKClientRecords(value);
            if (errors.PKClient?.hasError) {
              runValidationTasks("PKClient", value);
            }
            setCurrentPKClientDisplayValue(value);
            setCurrentPKClientValue(undefined);
          }}
          onBlur={() => runValidationTasks("PKClient", currentPKClientValue)}
          errorMessage={errors.PKClient?.errorMessage}
          hasError={errors.PKClient?.hasError}
          ref={PKClientRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PKClient")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              dateCreation,
              dateStart,
              dateEnd,
              PKClient,
              PKRoom: value,
            };
            const result = onChange(modelFields);
            value = result?.PKRoom ?? value;
          }
          setPKRoom(value);
          setCurrentPKRoomValue(undefined);
        }}
        currentFieldValue={currentPKRoomValue}
        label={"Pk room"}
        items={PKRoom ? [PKRoom] : []}
        hasError={errors?.PKRoom?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("PKRoom", currentPKRoomValue)
        }
        errorMessage={errors?.PKRoom?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.PKRoom(
                pKRoomRecords.find((r) => r.id === value) ??
                  selectedPKRoomRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPKRoomDisplayValue(
            value
              ? getDisplayValue.PKRoom(
                  pKRoomRecords.find((r) => r.id === value) ??
                    selectedPKRoomRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPKRoomValue(value);
          const selectedRecord = pKRoomRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedPKRoomRecords([selectedRecord]);
          }
        }}
        inputFieldRef={PKRoomRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Pk room"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Room"
          value={currentPKRoomDisplayValue}
          options={pKRoomRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.PKRoom?.(r),
            }))}
          isLoading={PKRoomLoading}
          onSelect={({ id, label }) => {
            setCurrentPKRoomValue(id);
            setCurrentPKRoomDisplayValue(label);
            runValidationTasks("PKRoom", label);
          }}
          onClear={() => {
            setCurrentPKRoomDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchPKRoomRecords(value);
            if (errors.PKRoom?.hasError) {
              runValidationTasks("PKRoom", value);
            }
            setCurrentPKRoomDisplayValue(value);
            setCurrentPKRoomValue(undefined);
          }}
          onBlur={() => runValidationTasks("PKRoom", currentPKRoomValue)}
          errorMessage={errors.PKRoom?.errorMessage}
          hasError={errors.PKRoom?.hasError}
          ref={PKRoomRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PKRoom")}
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
