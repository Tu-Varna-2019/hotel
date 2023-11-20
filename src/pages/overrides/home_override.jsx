import { HomeComponent } from "../../classes/components/homeComponent";

export function FuncHomeOverride() {
  const {
    selectFieldBookARoomOptions,
    handleSelectFieldUpdateOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    selectFieldCreate,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  } = HomeComponent();

  const homeOverride = {
    select_field_update: {
      onChange: (event) => handleSelectFieldUpdateOptions(event),
      style: { backgroundColor: "transparent" },
      options: selectFieldBookARoomOptions,
    },
    select_field_inquery: {
      onChange: (event) => handleSelectFieldInqueryOptions(event),
      style: { backgroundColor: "transparent" },
      options: selectFieldInquery,
    },
    select_field_create: {
      onChange: (event) => handleSelectFieldCreateOptions(event),
      style: { backgroundColor: "transparent" },
      options: selectFieldCreate,
    },
    button_logout: {
      onClick: (event) => handleLogOutClick(event),
    },
  };

  return { homeOverride };
}
