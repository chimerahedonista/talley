import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutes from "./all-routes";
import App from "./app";
import GovernanceLeaderboard from "./governance-leaderboard";
import GovernanceOverview from "./governance-overview";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRoutes />}>
          <Route index element={<App />} />
          <Route path="talley" element={<GovernanceOverview />} />
          <Route path="govover" element={<GovernanceOverview />} />          
          <Route path="govlead" element={<GovernanceLeaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
