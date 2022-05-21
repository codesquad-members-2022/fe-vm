import ComposedProivider from "contexts/core/ComposedProivider";
import MachineProvider from "contexts/MachineProvider";
import ProductProvider from "contexts/ProductProvider";
import WalletProvider from "contexts/WalletProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "routers/AppRouter";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const providers = [React.StrictMode, WalletProvider, MachineProvider, ProductProvider];

root.render(
  <ComposedProivider components={providers}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRouter />
    </BrowserRouter>
  </ComposedProivider>
);
