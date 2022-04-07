import { Button } from "@mui/material";
import React from "react";

export interface Props {
  timeRemaining: number;
}
// TODO: Calculate time remaining properly in days and hours
const TimeRemaining = (props: Props) => {
  return <Button color="error" variant="outlined" className="no-hover">6 Days Remaining</Button>;
};

export default TimeRemaining;
