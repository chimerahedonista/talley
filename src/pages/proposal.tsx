import { Button, Grid } from "@mui/material";
import React, { Fragment } from "react";
import ForAgainstCard from "./components/for-against-card";
import Header from "./components/header";
import Status from "./components/status";
import TimeRemaining from "./components/time-remaining";
import User from "./components/user";

export interface Props {
  data: any;
  back: () => void;
}

const Proposal = (props: Props) => {
  const { data, back } = props;
  return (
    <Fragment>
      {data && (
        <Fragment>
          <Grid container spacing={5} style={{ marginTop: "1px" }}>
            <Grid item xs={12}>
              <Grid container spacing={5} style={{ marginTop: "20px" }}>
                <Grid item xs={4}>
                  <Button color="secondary" variant="contained" fullWidth onClick={back}>
                    Back
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              #{data.id}
            </Grid>
            <Grid item xs={7}>
              <Header variant="h4" color="white">
                <Grid container>
                  <Grid item xs={12}>
                    {data.title}
                  </Grid>
                  <Grid item xs={3}>
                    <Status status={data.status} />
                  </Grid>
                  <Grid item xs={4}>
                    <TimeRemaining timeRemaining={1000} />
                  </Grid>
                </Grid>
              </Header>
            </Grid>
            <Grid item xs={4}>
              <User address={data.creator} marginTop="0" />
            </Grid>
          </Grid>

          <Grid container spacing={5} style={{ marginTop: "1px" }}>
            <Grid item xs={4}>
              <ForAgainstCard />
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Proposal;
