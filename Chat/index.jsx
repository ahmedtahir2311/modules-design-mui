import React, { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";

//components
import UserChat from "@/components/Dashboard/Chat/UsersChat/UserChat";
import Messaging from "@/components/Dashboard/Chat//Messaging/Messaging";
import { useChatMessages, useChatThreads } from "@/hooks/chat.hook";

//hooks

const Chat = () => {
  const [activeChat, setActiveChat] = useState("");

  const { data: chatThreads } = useChatThreads();
  const { data: chatMessages, refetch: refetchMessages } =
    useChatMessages(activeChat);

  useEffect(() => {
    activeChat && refetchMessages();
  }, [activeChat]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid item lg={4} xl={4}>
          <UserChat
            chats={chatThreads?.data}
            setActiveChat={setActiveChat}
            activeChat={activeChat}
          />
        </Grid>
        <Grid item lg={8} xl={8}>
          <Messaging
            chatMessages={chatMessages}
            refetchMessages={refetchMessages}
            activeChat={activeChat}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
