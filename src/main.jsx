import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import amplifyconfig from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyconfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
