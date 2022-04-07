import { Grid } from "@mui/material";
import React from "react";

export interface Props {
  address: string;
  marginTop: string;
}

const User = (props: Props) => {
  const { address, marginTop } = props;
  return (
    <Grid container spacing={2} style={{ marginTop: marginTop }}>
      <Grid item xs={12}>
        0xMasterCef
      </Grid>
      <Grid item xs={12}>
        {address}
      </Grid>
    </Grid>
  );
};

export default User;
