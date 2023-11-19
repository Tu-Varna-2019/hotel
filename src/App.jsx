import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataModelProvider } from "./providers/data_models/provider";
import HomeLayout from "./pages/layouts/home_layout";
import { ComponentStateProvider } from "./providers/component_provider/provider";

//Amplify.configure(awsExports);

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
        <DataModelProvider>
          <ComponentStateProvider>
            <Routes>
              <Route path="/" element={<HomeLayout />} />
            </Routes>
          </ComponentStateProvider>
        </DataModelProvider>
      </BrowserRouter>
    </Authenticator>
  );
}

//export default withAuthenticator(App, components.Authenticator);
