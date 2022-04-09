import { Card, CardContent } from "@mui/material";
import React from "react";
import Header from "./header";
import HeaderDetailCard from "./header-detail-card";

export interface Props {
  headerText: string;
}

const VotingWalletSetup = (props: Props) => {
  const { headerText } = props;
  return (
    <Card sx={{ minWidth: "100%", backgroundColor: "#202230", color: "white", borderRadius: 5 }} variant="outlined">
      <CardContent>
        <Header variant="h6">{headerText}</Header>
        <HeaderDetailCard variantHeader="h6" variantDetails="h4" header="xSUSHI / SUSHI-ETH balance" details="0.000000000" />
        <HeaderDetailCard
          variantHeader="h6"
          variantDetails="body1"
          header="Voting Set-up"
          details="You can either vote on each proposal yourself or delegate your votes to a third party. Sushi Governance puts you in charge of the future of Sushi. Learn more."
          action="Get Started"
        />
      </CardContent>
    </Card>
  );
};

export default VotingWalletSetup;
