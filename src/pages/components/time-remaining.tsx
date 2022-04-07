import { Button } from "@mui/material";
import React from "react";

export interface Props {
  timeRemaining: number;
}
// TODO: Calculate time remaining properly in days and hours
const TimeRemaining = (props: Props) => {
  return <span>6 Days Remaining</span>;
};

export default TimeRemaining;
