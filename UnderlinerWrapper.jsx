import { Box } from "@mui/system";
import React from "react";

const UnderLinerWrapper = ({ sx, children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        fontSize: "2rem",
        width: "100%",
        marginBottom: "2rem",
        padding: " 1rem 0",
        cursor: "pointer",
        transition: "0.5s",
        ...sx,

        "&:hover": {
          fontWeight: "500",
        },

        "&:before": {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "0",
          height: "1px",
          width: "100%",
          background: " #fff",
          opacity: ".2",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          left: "0",
          bottom: "0",
          height: " 1px",
          width: "100%",
          transformOrigin: "left",
          transform: "scaleX(0)",
          background: " #fff",
          transition: "transform 1s cubic-bezier(.075,.82,.165,1)",
        },
        "&:hover:after": {
          transform: "scaleX(1)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default UnderLinerWrapper;
