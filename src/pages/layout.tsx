import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "src/hooks/DataContext";
import { useData } from "src/hooks/useData";
import App from "./app";
import ButtonNavBar from "./components/button-nav-bar";
import GovernanceLeaderboard from "./governance-leaderboard";
import GovernanceOverview from "./governance-overview";

const Layout = () => {
  const data = useData();
  return (    
    <DataContextProvider data={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonNavBar />}>
            <Route index element={<App />} />
            <Route path="talley" element={<App />} />
            <Route path="govover" element={<GovernanceOverview />} />
            <Route path="govlead" element={<GovernanceLeaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
};

export default Layout;
