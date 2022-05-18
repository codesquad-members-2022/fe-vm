import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VMmangement from 'pages/VMmangement';
import NotFound from 'pages/NotFound';
import VendingMachine from 'pages/VendingMachine';
import { ROUTE } from 'constant/route';
import PublicRoute from 'hoc/PublicRoute';
import AdminRoute from 'hoc/AdminRoute';
import { useUserContext } from 'context/User';
import Layout from './layout';

function App() {
  const { isManager } = useUserContext();
  return (
    <Router>
      <Routes>
        <Route path={ROUTE.HOME} element={<Layout />}>
          <Route index element={<PublicRoute Component={VendingMachine} restricted={false} />} />
          <Route
            path={ROUTE.MANGEMENT}
            element={<AdminRoute Component={VMmangement} isAdmin={!!isManager} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
