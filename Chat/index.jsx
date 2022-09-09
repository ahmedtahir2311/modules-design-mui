import React, { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import _ from "lodash";

//components
import UserChat from "@/components/Dashboard/Chat/UsersChat/UserChat";
import Messaging from "@/components/Dashboard/Chat//Messaging/Messaging";
import { useChatMessages, useChatThreads } from "@/hooks/chat.hook";

//hooks

const Chat = () => {
  const [activeChat, setActiveChat] = useState("");
  const [messagesData, setMessagesData] = useState({});

  const { data: chatThreads } = useChatThreads();
  const { data: chatMessages, refetch: refetchMessages } = useChatMessages(
    activeChat?.id
  );

  React.useEffect(() => {
    if (chatMessages?.data[0] && Object.keys(chatMessages?.data[0]).length) {
      let value = {
        conversationId: chatMessages?.data[0]?.conversationId,
        user: activeChat?.participant,
        messages: chatMessages?.data?.map((item) => {
          delete item?.conversationId;

          return item;
        }),
      };
      setMessagesData(value);
    }
  }, [chatMessages?.data]);

  useEffect(() => {
    activeChat?.id && refetchMessages();
  }, [activeChat?.id]);

  // console.log(chatThreads);

  console.log(messagesData);

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
          <Messaging messageData={messagesData} activeChat={activeChat} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
