import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Authcontextprovider } from "./context/Authcontext.jsx";
import { Socketprovider } from "./context/socketcontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authcontextprovider>
        <Socketprovider>
          <App />
        </Socketprovider>
      </Authcontextprovider>
    </BrowserRouter>
  </React.StrictMode>
);
