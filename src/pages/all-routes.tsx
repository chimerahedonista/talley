import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Typography variant="h6" color="white">
                Sushi Governance
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/govover">
              <Typography variant="h6" color="white">
                Governance Overview
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/govlead">
              <Typography variant="h6" color="white">
                Governance Leaderboard
              </Typography>
            </Link>
          </li>          
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default AllRoutes;
