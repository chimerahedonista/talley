import { Card, CardContent, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Header from "./header";
import ProgressWithLabel from "./progress-with-label";
import Status from "./status";
import TimeRemaining from "./time-remaining";
import User from "./user";

export interface Props {
  headerText: string;
  showProposalPanel: (data: any) => void;
  proposals: any;
}

const ActiveProposals = (props: Props) => {
  const { headerText, showProposalPanel, proposals } = props;
  return (
    <Fragment>
      <Card className="grey-card" variant="outlined">
        <CardContent>
          <Header variant="h6">{headerText}</Header>
          {proposals.map((proposal: any) => (
            <Card className="purple-card with-margin" variant="outlined" key={proposal.id}>
              <CardContent>
                <Grid container spacing={5} style={{ marginTop: "2px" }}>
                  <Grid item xs={6} sx={{ padding: "5px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        #{proposal.id}
                      </Grid>
                      <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <Status status={proposal.status} />
                      </Grid>

                      <Grid item xs={12}>
                        <Header variant="h5">{proposal.title}</Header>
                      </Grid>
                      <Grid item xs={12}>
                        <Header variant="body1">{proposal.description}</Header>
                      </Grid>
                      <Grid item xs={12}>
                        <TimeRemaining showRedButton={false} proposal={proposal} showProposalPanel={showProposalPanel} timeRemaining={1000} />
                      </Grid>
                      <Grid item xs={12}>
                        <User address={proposal.proposedBy} marginTop="20px" />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={1} sx={{ borderLeft: "1px solid grey", marginLeft: "20px" }}></Grid>

                  <Grid item xs={5} sx={{ marginLeft: "-55px" }}>
                    <ProgressWithLabel color="success" label="For" value={proposal.votes.for} />
                    <ProgressWithLabel color="error" label="Against" value={proposal.votes.against} />
                    <ProgressWithLabel color="warning" label="Abstain" value={proposal.votes.abstain} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default ActiveProposals;
