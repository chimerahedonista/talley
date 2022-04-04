import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutes from "./all-routes";
import App from "./app";
import GovernanceOverview from "./governance-overview";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRoutes />}>
          <Route index element={<App />} />
          <Route path="govover" element={<GovernanceOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
