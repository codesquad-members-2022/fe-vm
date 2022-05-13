import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import VendingMachine from '../Components/Contents/VendingMachine/index';
import Wallet from '../Components/Contents/Wallet/index';

export default function Main() {
  const [payTotal, setPayTotal] = useState(0);
  const [printMessage, setPrintMessage] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <VendingMachine
            payTotal={{ value: payTotal, set: setPayTotal }}
            message={{ value: printMessage, set: setPrintMessage }}
          />
        }
      />
      <Route
        path="/vending-machine"
        element={
          <VendingMachine
            payTotal={{ value: payTotal, set: setPayTotal }}
            message={{ value: printMessage, set: setPrintMessage }}
          />
        }
      />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
