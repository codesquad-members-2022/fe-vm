import App from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import VMRouter from "routers/VMRouter";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VMRouter />
    </BrowserRouter>
  </React.StrictMode>
);
