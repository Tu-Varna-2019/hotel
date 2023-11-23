# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Bugs identified & best practices to follow

- if you don't want to retrigger `useEffect()` twice, instead of doing something like:

```
useEffect(() => {
response.data.listRegistrations.items.forEach((c1ient) {
setAllRegistrationIDNames((prevState) => [
... prevState,
${new Date(client.datestart).toLoca1eDateString()}
```

do:

```
useEffect(() => {
    const newRegistrationIDNames =
          response.data.listRegistrations.items.map(
            (client) =>
 ${new Date(client.dateStart).toLocaleDateString()} - ${client.id});
        // PREVENT FROM useEffect LOOPING 2x TIMES
        setAllRegistrationIDNames(newRegistrationIDNames);
```


## Make the text in the select field not visible (after the text has been chosen)

```
    select_field_update: {
      onChange: (event) => handleSelectFieldUpdateOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldBookARoomOptions,
    },
```



### TODO

- [] fix date comparison for `getRoomDetailsByLastYearRegistrations`. For some reason it doesn't exclude dateStart and dateEnd if they are in the same day as the currentDate



### roomCreateComponent -> handleSubmit Click

```
  let extractedPKRegistration = "";
  if (index !== 0) {
    // Regular expression to match the pattern
    const regex = /\d{1,2}\/\d{1,2}\/\d{4} - (.+)/;
  // Extract the substring
    const match =
      RegistrationObject.allRegistrationIDNames[index - 1].match(regex);
    extractedPKRegistration = match ? match[1] : null;
  }


  const apiResponse = await UtilsObject.apiCreateHotel({
    DataModel: "Room",
    Inputs: {
      category: RoomObject.category,
      floor: RoomObject.floor,
      beds: RoomObject.beds,
      price: RoomObject.price,
      PKRegistration: extractedSubstring,
    },
  });
  logger.info("apiResponse:", apiResponse);
```


- `src\classes\data_models\client.jsx` : setCllientByAllClientIDNames

```
    Get a specific item
    const oneRegistration = await client.graphql({
      query: getRegistration,
      variables: { id: selectedClient.data.getClient.PKRegistration },
    });

    const foundRegistrationNameID = UtilsObject.allRegistrationIDNamesBySubID(
      registrationIDNamesArr,
      oneRegistration.data.getRegistration.id
    );
    setSelectedRegistrationName(foundRegistrationNameID);

```
