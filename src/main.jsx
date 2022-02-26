import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApiProvider } from "./components/context/ApiContext";

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById("root")
);
