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
        case "PENDING":
          setColor("info");
          break;
        case "PASSED":
          setColor("success");
          break;
        case "FAILED":
          setColor("error");
          break;
        case "LIVE":
          setColor("primary");
          break;
        default:
          setColor("success");
      }
    }
  }, [status]);

  return (
    <Button variant="contained" color={color} size="small" sx={{ cursor: "none", pointerEvents: "none" }}>
      {status}
    </Button>
  );
};

export default Status;
