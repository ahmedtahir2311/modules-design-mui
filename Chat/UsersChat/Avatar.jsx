import imageLinkFormat from "@/utils/imageUrl";
import { Badge, Box } from "@mui/material";
import React from "react";

const Avatar = ({ image, user = false }) => {
  return (
    <Box
      sx={{
        maxWidth: "60px",
        maxHeight: "60px",
      }}
    >
      <Badge
        badgeContent={Math.ceil(Math.random() * 10)}
        color="primary"
        overlap="circular"
        max={9}
        sx={{}}
        invisible={user}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Badge
          color="primary"
          overlap="circular"
          badgeContent=" "
          variant="dot"
          sx={{}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            src={imageLinkFormat(image)}
          />
        </Badge>
      </Badge>
    </Box>
  );
};

export default Avatar;
