import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layouts/home_layout";
import { ComponentStateProvider } from "./providers/component_provider/provider";
import { DataModelProvider } from "./providers/data_models/provider";
import { HelpersProvider } from "./providers/helpers_provider/provider";

const signUpFields = {
  signUp: {
    "custom:Passport": {
      placeHolder: "Enter your Passport Number",
      isRequired: true,
      label: "Passport",
      order: 4,
    },
    "custom:SocialSecurityNumber": {
      placeHolder: "Enter your Social Security Number",
      isRequired: true,
      label: "Social Security Number",
      order: 4,
    },
    address: {
      placeHolder: "Enter your Address",
      isRequired: true,
      label: "Address",
      order: 4,
    },
  },
};

export default function App() {
  return (
    <Authenticator formFields={signUpFields}>
      <BrowserRouter>
        <HelpersProvider>
          <DataModelProvider>
            <ComponentStateProvider>
              <Routes>
                <Route path="/" element={<HomeLayout />} />
              </Routes>
            </ComponentStateProvider>
          </DataModelProvider>
        </HelpersProvider>
      </BrowserRouter>
    </Authenticator>
  );
}

//export default withAuthenticator(App, components.Authenticator);
