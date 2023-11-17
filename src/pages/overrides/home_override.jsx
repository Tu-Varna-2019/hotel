import { HomeComponent } from "../../classes/components/homeComponent";

export function FuncHomeOverride() {
  const {
    selectFieldBookARoomOptions,
    handleSelectFieldBookARoomOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    selectFieldCreate,
    handleSelectFieldCreateOptions,
    handleSettingsButton,
    imgHotelLogo,
    textWelcomeText,
  } = HomeComponent();

  const homeOverride = {
    // img_hotel_logo: {
    //   style: { display: imgHotelLogo ? "block" : "none" },
    // },
    // text_welcome_text: textWelcomeText
    //   ? {
    //       style: { display: "block" },
    //     }
    //   : null,
    select_field_book_a_room: {
      onChange: (event) => handleSelectFieldBookARoomOptions(event),
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
    button_settings: {
      onClick: (event) => handleSettingsButton(event),
      //style: { display: hideConfCanButton },
      //isDisabled: !regexEmail,
      //isLoading: isConfirmInfoBtnLoading,
    },
  };

  return { homeOverride };
}
