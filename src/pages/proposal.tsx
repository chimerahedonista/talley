import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./components/header";
import ForAgainstCard from "./components/proposal/for-against-card";
import ProposalHistory from "./components/proposal/history";
import Information from "./components/proposal/information";
import Status from "./components/status";
import TimeRemaining from "./components/time-remaining";
import User from "./components/user";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
            <Grid item xs={1}>
              <Button onClick={back}>
                <ArrowBackIcon />
              </Button>
            </Grid>
            <Grid item xs={11}></Grid>
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
                    <TimeRemaining showRedButton={true} proposal={data} showProposalPanel={(data) => {}} timeRemaining={1000} />
                  </Grid>
                </Grid>
              </Header>
            </Grid>
            <Grid item xs={4}>
              <User address={data.creator} marginTop="0" />
            </Grid>
          </Grid>

          <Grid container spacing={5} style={{ marginTop: "1px" }}>
            <Grid item xs={5}>
              <Grid container>
                <Grid item xs={12}>
                  <ForAgainstCard votersFor={data.voters.for} votersAgainst={data.voters.against} />
                </Grid>
                <Grid item xs={12}>
                  <Information data={data} />
                </Grid>
                <Grid item xs={12}>
                  <ProposalHistory data={data} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Card className="grey-card" variant="outlined">
                <CardContent>
                  <Header variant="h5">Proposal Details</Header>
                  <Card className="purple-card with-border with-margin" variant="outlined">
                    <CardContent>
                      <div style={{padding: "35px"}} dangerouslySetInnerHTML={{ __html: data.details }} />
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Proposal;
