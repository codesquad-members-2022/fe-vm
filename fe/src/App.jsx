import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VMmangement from 'pages/VMmangement';
import NotFound from 'pages/NotFound';
import VendingMachine from 'pages/VendingMachine';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VendingMachine />} />
          <Route path="mangement" element={<VMmangement />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
