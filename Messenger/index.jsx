import React, { useEffect, useState } from "react";

import { Box, Button, Drawer, Grid } from "@mui/material";
import _ from "lodash";

//components
import ChatThreads from "@/components/Dashboard/Messenger/ChatThreads/ChatThreads";
import ChatMessages from "@/components/Dashboard/Messenger/ChatMessages/ChatMessages";
import ProfileDrawer from "@/components/Dashboard/Messenger/ProfileDrawer/ProfileDrawer";

//hooks
import { useChatMessages, useChatThreads } from "@/hooks/chat.hook";
import { useSocketContext } from "@/context/socket.context";

const Messenger = () => {
  const { socket, isConnected } = useSocketContext();
  const [activeChat, setActiveChat] = useState("");
  const [messagesData, setMessagesData] = useState({});

  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    chatThreads?.data?.length !== 0 && setActiveChat(chatThreads?.data[0]);
  }, [chatThreads?.data]);

  useEffect(() => {
    if (isConnected) {
      if (socket._callbacks["$thread"] == undefined) {
        socket.on("thread", (data) => {
          console.log("thread new");
        });
      }
      // if (socket._callbacks["$message"] == undefined) {
      //   socket.on("message", (data) => {
      //     //jab ye data aye ga issy main array mai push karwa dena hao sender ID aur user Id ko match karny k bad
      //     console.log("message", data, socket);
      //     refetchMessages();
      //   });
      // }
    }
  }, [isConnected]);

  useEffect(() => {
    activeChat?.identifier &&
      socket.emit("joinRoom", `${activeChat?.identifier}`);
  }, [activeChat, isConnected]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "25%" }}>
          <ChatThreads
            chats={chatThreads?.data}
            setActiveChat={setActiveChat}
            activeChat={activeChat}
            setOpen={setOpen}
          />
        </Box>
        <Box sx={{ width: "75%" }}>
          <ChatMessages
            messageData={messagesData}
            activeChat={activeChat}
            setOpen={setOpen}
          />
        </Box>
      </Box>

      <ProfileDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Messenger;
