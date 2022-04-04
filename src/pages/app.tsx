
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./components/header";
import RightPanel from "./components/right-panel";

const App = () => {
  return (
    <Fragment>
      <Header variant="h2">
        Sushi Governance
      </Header>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={4}>
          <RightPanel headerText="Your Voting Wallet"/>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
