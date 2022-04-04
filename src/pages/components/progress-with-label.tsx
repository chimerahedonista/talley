import { Grid, LinearProgress, LinearProgressProps, Typography } from "@mui/material";
import React from "react";

export interface Props extends LinearProgressProps {
  value: number;
  label: string;
}

const ProgressWithLabel = (props: Props) => {
  return (
    <Grid container spacing={5} style={{ marginTop: "1px" }}>
      <Grid item xs={12}>
        <Typography variant="body2" color="white">
          {props.label}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <LinearProgress variant="determinate" color={props.color} {...props} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" color="white">{`${Math.round(props.value)}%`}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProgressWithLabel;
