import { Button } from "@mui/material";
import React from "react";

export interface Props {
  timeRemaining: number;
}
// TODO: Calculate time remaining properly in days and hours
const TimeRemaining = (props: Props) => {
  return <Button color="error" variant="outlined" sx={{cursor: "none", pointerEvents: "none"}}>6 Days Remaining</Button>;
};

export default TimeRemaining;
