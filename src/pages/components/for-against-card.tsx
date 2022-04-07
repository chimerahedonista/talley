import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import Header from "./header";

export interface Props {
  votersFor: Array<{ address: string; votes: number }>;
  votersAgainst: Array<{ address: string; votes: number }>;
}

const ForAgainstCard = (props: Props) => {
  const { votersFor, votersAgainst } = props;
  const random = () => {
    return Math.random().toString();
  };

  const [voters, setVoters] = useState(votersFor);

  return (
    <Card className="grey-card" variant="outlined">
      <CardContent>
          <Grid container>
            <Grid item xs={3}>
              <Button variant="outlined" className="no-transform-button" onClick={() => setVoters(votersFor)}>
                For
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="outlined" className="no-transform-button" onClick={() => setVoters(votersAgainst)}>
                Against
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Button variant="outlined" className="no-transform-button no-hover">
                342,343
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Card className="purple-card with-margin with-border" variant="outlined">
                <CardContent>
                  <Grid container>
                    <Grid item xs={7}>
                      <Button variant="outlined" className="no-transform-button no-hover">
                        ADDRESS
                      </Button>
                    </Grid>
                    <Grid item xs={5} sx={{ textAlign: "right" }}>
                      <Button variant="outlined" className="no-transform-button no-hover">
                        VOTES
                      </Button>
                    </Grid>
                    {voters.slice(0, 10).map((vf) => (
                      <Fragment key={random()}>
                        <Grid item xs={7} sx={{ fontSize: "small" }}>
                          {vf.address}
                        </Grid>
                        <Grid item xs={5} sx={{ fontSize: "small", textAlign: "right" }}>
                          {vf.votes}
                        </Grid>
                      </Fragment>
                    ))}
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <Button color="success" variant="outlined" className="no-transform-button" sx={{ textAlign: "center", marginTop: "20px" }}>
                        VIEW ALL
                      </Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
};

export default ForAgainstCard;
