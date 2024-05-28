import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./ToDo";
import CoinTracker from "./CoinTracker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDo />
    <hr />
    <CoinTracker />
  </React.StrictMode>
);
