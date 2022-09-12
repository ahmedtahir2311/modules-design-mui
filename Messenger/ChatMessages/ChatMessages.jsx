import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";

import { Box, Typography, Divider, TextField, IconButton } from "@mui/material";
import { format } from "date-fns";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

//hooks
import { useSendMessage } from "@/hooks/chat.hook";
import { useGetCurrentUser } from "@/hooks/user.hook";

//components
import ProductWidget from "./ProductWidget";

//utils
import imageLinkFormat from "@/utils/imageUrl";

const ChatMessages = ({ messageData, activeChat }) => {
  const { data: userData } = useGetCurrentUser();

  const bottomRef = useRef(null);

  const [message, setmessage] = useState("");
  const [type, setType] = useState("text");

  const [allMessages, setAllMessages] = useState(messageData);

  const [chatMessage, setChatmessage] = useState({
    messages: [],
  });

  const {
    mutateAsync: sendMessaage,
    data: sentmessage,
    isLoading: sending,
    isError,
    isSuccess,
  } = useSendMessage();

  const { control, handleSubmit, formState, setValue } = useForm();

  async function onSendMessage(e, { retry }) {
    e.preventDefault();
    if (message !== "") {
      !retry &&
        setChatmessage({
          messages: [
            {
              id: allMessages?.messages?.length - 1 + 1,
              senderId: userData?.data?.userId,
              message: message,
              type: type,
              metadata: null,
              createdAt: new Date().toDateString(),
              updatedAt: new Date(),
            },
          ],
        });
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });

      const body = {
        content: message,
        type: type,
      };
      setmessage("");

      await sendMessaage({
        conversationId: allMessages?.conversationId,
        body,
      });
    }
  }

  useEffect(() => {
    setValue("content", "");
    setAllMessages(messageData);
  }, [activeChat?.id, messageData]);

  useEffect(() => {
    if (sentmessage?.data) {
      const data = { ...allMessages };
      data?.messages?.push({
        createdAt: sentmessage?.data?.createdAt,
        id: sentmessage?.data?.id,
        message: sentmessage?.data?.message,
        metadata: sentmessage?.data?.metadata,
        senderId: sentmessage?.data?.senderId,
        type: sentmessage?.data?.type,
        updatedAt: sentmessage?.data?.updatedAt,
      });
      setAllMessages(data);

      setChatmessage({
        messages: [],
      });
    }
  }, [sentmessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages, activeChat?.id, messageData]);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "100vh",
        padding: "2%",
      }}
    >
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Controller
          control={control}
          name="search"
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Search for chats"
              //   className="searchChat"
              type="search"
              error={formState?.errors?.search && true}
              helperText={formState?.errors?.search?.message}
              disableUnderline
              sx={{
                color: "#B6B9C3",
                width: "60%",
                backgroundColor: "#F0F0FB",

                borderRadius: "7px",
                outline: "none",
                padding: "0",
              }}
              InputProps={{
                startAdornment: <SearchOutlinedIcon position="start" />,
              }}
            />
          )}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Typography variant="f26" sx={{ fontWeight: 600 }}>
            {allMessages?.user?.fullName}
          </Typography>
          <Typography variant="body2" color="text.gray.A1A1A1">
            Typing ...{" "}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "30px",
          //   backgroundColor: "red",
          width: "100%",
          height: { lg: "55vh", xl: "70vh" },
          overflow: "auto",
        }}
      >
        {allMessages?.messages?.map((item, index) => {
          const previousDate =
            index != 0 && allMessages?.messages[index - 1]?.createdAt
              ? format(
                  new Date(allMessages?.messages[index - 1]?.createdAt),
                  "d"
                )
              : null;
          const currentDate = item?.createdAt
            ? format(new Date(item?.createdAt), "d")
            : null;

          return (
            <Box key={item?.id}>
              {previousDate < currentDate && (
                <Divider
                  textAlign="center"
                  fullwidth
                  light
                  sx={{ margin: "20px 0" }}
                >
                  {item?.createdAt &&
                    format(new Date(item?.createdAt), "eeee, do MMMM, yyy")}
                </Divider>
              )}
              <Box
                sx={{
                  width: "100%",
                  padding: "0 0 50px",
                }}
              >
                <Box
                  sx={{
                    margin: "8px 0",
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    justifyContent:
                      item?.senderId === userData?.data?.userId
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <Typography
                    variant="f10"
                    sx={{
                      textAlign:
                        item?.senderId === userData?.data?.userId
                          ? "right"
                          : "left",
                    }}
                  >
                    {item?.updatedAt && format(new Date(item?.updatedAt), "p")}
                  </Typography>
                </Box>

                {item.type === "link" && item?.message === "{{ProductLink}}" ? (
                  <ProductWidget
                    productId={item?.metadata?.productId}
                    item={item}
                    userData={userData}
                  />
                ) : (
                  <Box
                    sx={{
                      display: "inline-block",
                      maxWidth: "80%",
                      float:
                        item?.senderId === userData?.data?.userId
                          ? "right"
                          : "left",
                      // width: "max-content",
                      padding: "13px 17px",
                      backgroundColor:
                        item?.senderId === userData?.data?.userId
                          ? "#40D39C"
                          : "#F0F0FB",
                      borderRadius: "7px",
                      textAlign:
                        item?.senderId === userData?.data?.userId
                          ? "right"
                          : "left",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 400,
                        color:
                          item?.senderId === userData?.data?.userId && "#fff",
                      }}
                    >
                      {item.type === "link" ? (
                        <Link href={item?.message}>{item?.message}</Link>
                      ) : (
                        item?.message
                      )}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          );
        })}
        <Box ref={bottomRef} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <form
          style={{ width: "100%" }}
          onSubmit={(e) => onSendMessage(e, { retry: false })}
        >
          <TextField
            variant="outlined"
            placeholder="Write here"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            className="searchChat"
            type="text"
            error={formState?.errors?.content && true}
            helperText={formState?.errors?.content?.message}
            value={message}
            disableUnderline
            sx={{
              color: "#B6B9C3",
              width: "100%",
              backgroundColor: "#F0F0FB",
              borderRadius: "7px",
              outline: "none",
            }}
            InputProps={{
              startAdornment: (
                <IconButton>
                  <AddOutlinedIcon position="start" />
                </IconButton>
              ),
              endAdornment: (
                <IconButton type="submit" variant="contained">
                  <SendOutlinedIcon position="start" />
                </IconButton>
              ),
            }}
          />
        </form>
      </Box>
    </Box>
  );
};

export default ChatMessages;
