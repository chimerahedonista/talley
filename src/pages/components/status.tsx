import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface Props {
  status: string;
}

const Status = (props: Props) => {
  const [color, setColor] = useState<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined>();
  const { status } = props;

  useEffect(() => {
    if (status) {
      switch (status) {
        case "REVIEW":
          setColor("warning");
          break;
        default:
          setColor("success");
      }
    }
  }, [status]);

  return (
      <Button variant="contained" color={color} size="small">
          {status}
      </Button>
  );
};

export default Status;
