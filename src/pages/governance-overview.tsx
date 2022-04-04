import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import ActiveProposals from "./components/active-proposals";
import GovernanceStats from "./components/governance-stats";
import Header from "./components/header";

const GovernanceOverview = () => {
  return (
    <Fragment>
      <Header variant="h2">Governance Overview</Header>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={4}>
          <GovernanceStats />
        </Grid>
        <Grid item xs={8}>
          <ActiveProposals headerText="Active Proposals" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default GovernanceOverview;
