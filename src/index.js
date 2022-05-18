import MachineProvider from "contexts/MachineProvider";
import WalletProvider from "contexts/WalletProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "routers/AppRouter";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletProvider>
      <MachineProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </MachineProvider>
    </WalletProvider>
  </React.StrictMode>
);
