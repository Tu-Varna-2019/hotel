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
