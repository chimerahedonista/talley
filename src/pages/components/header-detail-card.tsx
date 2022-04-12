import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import Header from "./header";
import { Link } from "react-router-dom";

export interface Props {
  header: string;
  details: string;
  action?: string;
  variantHeader:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  variantDetails:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
}
const HeaderDetailCard = (props: Props) => {
  const { header, details } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className="purple-card with-margin with-border" variant="outlined">
          <CardContent sx={{marginBottom: props.action ? "20px" : "0px"}}>
            <Header color="#A8A8A8" variant={props.variantHeader}>
              {header}
            </Header>
            <Header variant={props.variantDetails}>{details}</Header>
          </CardContent>
        </Card>
      </Grid>
      {props.action && (
        <Grid item xs={12} >
          <Link to="/govover">
            <Button variant="contained" color="secondary" fullWidth sx={{ marginTop: "-61px", borderRadius: "20px" }}>
              {props.action}
            </Button>
          </Link>
        </Grid>
      )}
    </Grid>
  );
};

export default HeaderDetailCard;
