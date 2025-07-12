
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/app/store.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

axios.get(`${API}/check`)
  .then(res => {
    console.log(res.data); // should be "welcome to fastf"
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
