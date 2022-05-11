import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from 'pages/VendingMachine';
import VMmangement from 'pages/VMmangement';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VendingMachine />} />
          <Route path="/mangement" element={<VMmangement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
