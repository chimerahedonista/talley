import { Grid, LinearProgress, LinearProgressProps, Typography } from "@mui/material";
import React from "react";

export interface Props extends LinearProgressProps {
  value: number;
  label: string;
}

const ProgressWithLabel = (props: Props) => {
  return (
    <Grid container spacing={1} style={{ marginTop: "1px", marginBottom: "80px" }}>
      <Grid item xs={8}>
        <Typography variant="body2" color="white">
          {props.label}
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{textAlign: "right"}}>
        <Typography variant="body2" color="white">{`${Math.round(props.value)}%`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress variant="determinate" color={props.color} {...props} />
      </Grid>
    </Grid>
  );
};

export default ProgressWithLabel;
