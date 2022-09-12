import React, { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import _ from "lodash";

//components
import ChatThreads from "@/components/Dashboard/Messenger/chatThreads/ChatThreads";
import Messaging from "@/components/Dashboard/Chat//Messaging/Messaging";
import { useChatMessages, useChatThreads } from "@/hooks/chat.hook";
import ChatMessages from "./ChatMessages/ChatMessages";

//hooks

const Messenger = () => {
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

  React.useEffect(() => {
    chatThreads?.data?.length !== 0 && setActiveChat(chatThreads?.data[0]);
  }, [chatThreads?.data]);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "25%" }}>
        <ChatThreads
          chats={chatThreads?.data}
          setActiveChat={setActiveChat}
          activeChat={activeChat}
        />
      </Box>
      <Box sx={{ width: "75%" }}>
        <ChatMessages messageData={messagesData} activeChat={activeChat} />
      </Box>
    </Box>
  );
};

export default Messenger;
