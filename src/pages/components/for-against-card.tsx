import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Header from "./header";
import HeaderDetailCard from "./header-detail-card";

const ForAgainstCard = () => {
  return (
    <Card className="grey-card" variant="outlined">
      <CardContent>
        <Header variant="h5">
          <Grid container>
            <Grid item xs={3}>
              <Button variant="outlined" className="no-transform-button">
                For
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="outlined" className="no-transform-button">
                Against
              </Button>
            </Grid>
          </Grid>
        </Header>
      </CardContent>
    </Card>
  );
};

export default ForAgainstCard;
