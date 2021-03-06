import { Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { Fragment } from "react";
import GovernanceStats from "./components/governance-stats";
import Header from "./components/header";

const GovernanceLeaderboard = () => {
  const table = [
    {
      rank: 1,
      address: "0x1231231231123123213",
      voteWeight: "16%",
      proposalsVoted: 5,
    },
  ].flatMap((x) => Array.from({ length: 10 }).fill(x));

  const columns = ["Rank", "Address", "Vote Weight", "Proposals Voted"];

  return (
    <Fragment>
      <Header variant="h5">Governance Overview</Header>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={4}>
          <GovernanceStats />
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ minWidth: "100%", backgroundColor: "#202230", color: "white", borderRadius: 5 }} variant="outlined">
            <CardContent>
              <Header variant="h6">Leaderboard</Header>
              <TableContainer component={Paper} sx={{ backgroundColor: "#15081D", marginTop: "10px", borderRadius: 5 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((col) => (
                        <TableCell sx={{ color: "white" }}>{col}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.map((row: any, i) => (
                      <TableRow key={i}>
                        <TableCell sx={{ color: "white", borderBottom: "none", textAlign: "center" }}>{row.rank}</TableCell>
                        <TableCell sx={{ color: "white", borderBottom: "none" }}>{row.address}</TableCell>
                        <TableCell sx={{ color: "white", borderBottom: "none", textAlign: "center" }}>{row.voteWeight}</TableCell>
                        <TableCell sx={{ color: "white", borderBottom: "none", textAlign: "center" }}>{row.proposalsVoted}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default GovernanceLeaderboard;
