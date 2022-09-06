import React, { useState } from "react";

import { Box, Grid } from "@mui/material";

//components
import UserChat from "@/components/Dashboard/Chat/UsersChat/UserChat";
import Messaging from "@/components/Dashboard/Chat//Messaging/Messaging";

//hooks
import { useForm } from "react-hook-form";

const Chat = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid item lg={4} xl={4}>
          <UserChat />
        </Grid>
        <Grid item lg={8} xl={8}>
          <Messaging />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
