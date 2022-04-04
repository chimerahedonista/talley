import { Grid } from '@mui/material'
import React from 'react'

export interface Props {
    address: string;
}

const User = (props: Props) => {
  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12}>
            0xMasterCef
        </Grid>
        <Grid item xs={12}>
            {props.address}
        </Grid>
    </Grid>
  )
}

export default User