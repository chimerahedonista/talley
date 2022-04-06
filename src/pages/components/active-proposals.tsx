import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Proposal } from "src/utils/dto";
import Header from "./header";
import ProgressWithLabel from "./progress-with-label";
import Status from "./status";
import TimeRemaining from "./time-remaining";
import User from "./user";

export interface Props {
  headerText: string;
}

const ActiveProposals = (props: Props) => {
  const proposals: Array<Proposal> = [
    {
      id: "#080",
      status: "REVIEW",
      title: "Sushi Treasury Multisig Relection",
      description:
        "This proposal is the bi-yearly reelection of the treasury multisigatory. The proposal outlines a selective candidates to oversee the treasury of Sushiswap.....",
      timeRemaining: 100000000,
      proposedBy: "0x34234234234234234234",
      details: "",
      votes: {
        for: 40,
        against: 35,
        abstain: 25,
      },
    },
  ];
  const { headerText } = props;
  return (
    <Card sx={{ minWidth: "100%", backgroundColor: "#202230", color: "white", borderRadius: 5, marginBottom: "20px" }} variant="outlined">
      <CardContent>
        <Header variant="h5">{headerText}</Header>
        {proposals.map((proposal) => (
          <Card sx={{ minWidth: "100%", backgroundColor: "#15081D", color: "white", borderRadius: 5, marginTop: "10px" }} variant="outlined">
            <CardContent>
              <Grid container spacing={5} style={{ marginTop: "20px" }}>
                <Grid item xs={6} sx={{padding: "5px"}}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ float: "left" }}>
                      {proposal.id}
                    </Grid>
                    <Grid item xs={6} sx={{ float: "right" }}>
                      <Status status={proposal.status} />
                    </Grid>

                    <Grid item xs={12}>
                      <Header variant="h4">{proposal.title}</Header>
                    </Grid>
                    <Grid item xs={12}>
                      <Header variant="body1">{proposal.description}</Header>
                    </Grid>
                    <Grid item xs={12}>
                      <TimeRemaining timeRemaining={proposal.timeRemaining} />
                    </Grid>
                    <Grid item xs={12}>
                      <User address={proposal.proposedBy} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={1} sx={{ borderLeft: "1px solid grey" }}></Grid>

                <Grid item xs={5}>
                  <ProgressWithLabel color="success" label="For" value={proposal.votes.for} />
                  <ProgressWithLabel color="error" label="Against" value={proposal.votes.against} />
                  <ProgressWithLabel color="warning" label="Abstain" value={proposal.votes.against} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActiveProposals;
