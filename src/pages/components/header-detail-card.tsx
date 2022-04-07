import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import Header from "./header";

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
    <Card className="purple-card with-margin with-border" variant="outlined">
      <CardContent>
        <Header color="#A8A8A8" variant={props.variantHeader}>
          {header}
        </Header>
        <Header variant={props.variantDetails}>{details}</Header>
        {props.action && (
          <Button variant="contained" color="secondary" fullWidth sx={{ marginTop: "10px" }}>
            {props.action}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default HeaderDetailCard;
