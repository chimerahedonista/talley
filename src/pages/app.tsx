
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import ActiveProposals from "./components/active-proposals";
import Header from "./components/header";
import VotingWalletSetup from "./components/voting-wallet-setup";

const App = () => {
  return (
    <Fragment>
      <Header variant="h2">
        Sushi Governance
      </Header>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={4}>
          <VotingWalletSetup headerText="Your Voting Wallet"/>
        </Grid>
        <Grid item xs={8}>
          <ActiveProposals headerText="Active Proposals"/>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
