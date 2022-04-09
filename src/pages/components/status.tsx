import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface Props {
  status: string;
}

const Status = (props: Props) => {
  const [color, setColor] = useState<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined>();
  const [variant, setVariant] = useState<"outlined"|"contained"|undefined>("contained")
  const { status } = props;

  useEffect(() => {
    if (status) {
      switch (status) {
        case "REVIEW":
          setColor("warning");
          break;
        case "PENDING":
          setColor("info");
          setVariant("outlined");
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
    <Button variant={variant} color={color} size="small" sx={{ cursor: "none", pointerEvents: "none", borderRadius: "10px" }}>
      {status}
    </Button>
  );
};

export default Status;
