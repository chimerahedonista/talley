import { Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDataContext } from "src/hooks/DataContext";
import ActiveProposals from "./components/active-proposals";
import Header from "./components/header";
import VotingWalletSetup from "./components/voting-wallet-setup";
import Proposal from "./proposal";

const App = () => {
  const proposals: Array<any> = useDataContext();
  const [showProposal, setShowProposal] = useState(false);
  const [proposal, setProposal] = useState<any>(undefined);

  const showProposalPanel = (proposal: any) => {
    setShowProposal(true);
    setProposal(proposal);
  };

  const hideProposalPanel = () => {
    setShowProposal(false);
    setProposal(undefined);
  };

  return (
    <Fragment>
      {!showProposal ? (
        <Fragment>
          <Header variant="h3">Sushi Governance</Header>
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={4}>
              <VotingWalletSetup headerText="Your Voting Wallet" />
            </Grid>
            <Grid item xs={8}>
              <ActiveProposals proposals={proposals} headerText="Active Proposals" showProposalPanel={showProposalPanel} />
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <Proposal data={proposal} back={hideProposalPanel} />
      )}
    </Fragment>
  );
};

export default App;
