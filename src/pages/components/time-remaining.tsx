import { Button } from "@mui/material";
import React, { Fragment } from "react";

export interface Props {
  timeRemaining: number;
  proposal: any;
  showRedButton: boolean;
  showProposalPanel: (p: any) => void;
}
// TODO: Calculate time remaining properly in days and hours
const TimeRemaining = (props: Props) => {
  const { showRedButton, proposal, showProposalPanel } = props;
  return (
    <Fragment>
      {showRedButton ? (
        <Button color="error" variant="outlined" className="no-hover">
          6 Days Remaining
        </Button>
      ) : (
        <Button
          color="secondary"
          variant="contained"
          size="small"
          onClick={() => {
            showProposalPanel(proposal);
          }}>
          6 Days Remaining
        </Button>
      )}
    </Fragment>
  );
};

export default TimeRemaining;
