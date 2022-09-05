import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getContract } from "./ethereum";

const root = ReactDOM.createRoot(document.getElementById("root"));
getContract().then((contract) =>
  root.render(
    <React.StrictMode>
      <App contract={contract} />
    </React.StrictMode>
  )
);
