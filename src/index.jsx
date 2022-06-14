import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import newStore from "./redux/store";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={newStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
