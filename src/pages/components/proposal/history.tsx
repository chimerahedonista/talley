import { Card, CardContent, Checkbox, Grid } from "@mui/material";
import React from "react";
import Header from "../header";
import CheckCircleIcon from "@mui/icons-material/Check";

export interface Props {
  data: any;
}

const ProposalHistory = (props: Props) => {
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
            <Header variant="h5">Proposal History</Header>
          </Grid>
          <Grid item xs={12}>
            <Card className="purple-card with-margin with-border" variant="outlined">
              <CardContent>
                <Grid container className="with-margin-bottom">
                  <Grid item xs={1} className="greyed-out">
                    <Checkbox
                      sx={{ margin: 0, padding: 0 }}
                      icon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                      checkedIcon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    Created
                  </Grid>
                  <Grid item xs={5} className="align-right">
                    {getStartDate()}
                  </Grid>
                </Grid>

                <Grid container className="with-margin-bottom">
                  <Grid item xs={1} className="greyed-out">
                    <Checkbox
                      sx={{ margin: 0, padding: 0 }}
                      icon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                      checkedIcon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    Active
                  </Grid>
                  <Grid item xs={5} className="align-right">
                    {getStartDate()}
                  </Grid>
                </Grid>

                <Grid container className="with-margin-bottom">
                  <Grid item xs={1} className="greyed-out">
                    <Checkbox
                      sx={{ margin: 0, padding: 0 }}
                      icon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                      checkedIcon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    Succeeded
                  </Grid>
                  <Grid item xs={5} className="align-right">
                    {getEndDate()}
                  </Grid>
                </Grid>         

                <Grid container className="with-margin-bottom">
                  <Grid item xs={1} className="greyed-out">
                    <Checkbox
                      sx={{ margin: 0, padding: 0 }}
                      icon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                      checkedIcon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    Queued
                  </Grid>
                  <Grid item xs={5} className="align-right">
                    {getStartDate()}
                  </Grid>
                </Grid>  

                <Grid container className="with-margin-bottom">
                  <Grid item xs={1} className="greyed-out">
                    <Checkbox
                      sx={{ margin: 0, padding: 0 }}
                      icon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                      checkedIcon={<CheckCircleIcon color="success" sx={{ width: "0.75em" }} />}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    Executed
                  </Grid>
                  <Grid item xs={5} className="align-right">
                    {getEndDate()}
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

export default ProposalHistory;
