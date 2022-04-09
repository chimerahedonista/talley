import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Header from "../header";

export interface Props {
  data: any;
}

const Information = (props: Props) => {
  const { data } = props;

  const getStartDate = () => {
    return new Date(data.startDate).toLocaleString();
  };

  const getEndDate = () => {
    return new Date(data.endDate).toLocaleString();
  };

  return (
    <Card className="grey-card" variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Header variant="h5">Information</Header>
          </Grid>
          <Grid item xs={12}>
            <Card className="purple-card with-margin with-border" variant="outlined">
              <CardContent>
                <Grid container className="with-margin-bottom">
                  <Grid item xs={4} className="greyed-out">
                    Stage
                  </Grid>
                  <Grid item xs={8} className="align-right">
                    {data.stage}
                  </Grid>
                </Grid>

                <Grid container className="with-margin-bottom">
                  <Grid item xs={4} className="greyed-out">
                    Start Date
                  </Grid>
                  <Grid item xs={8} className="align-right">
                    {getStartDate()}
                  </Grid>
                </Grid>

                <Grid container className="with-margin-bottom">
                  <Grid item xs={4} className="greyed-out">
                    End Date
                  </Grid>
                  <Grid item xs={8} className="align-right">
                    {getEndDate()}
                  </Grid>
                </Grid>

                <Grid container className="with-margin-bottom">
                  <Grid item xs={4} className="greyed-out">
                    Proposal #
                  </Grid>
                  <Grid item xs={8} className="align-right">
                    {data.id}
                  </Grid>
                </Grid>                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Information;
