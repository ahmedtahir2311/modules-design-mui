import React, { useState, useEffect, useRef } from "react";

import {
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

import { format } from "date-fns";

import { Controller, useForm } from "react-hook-form";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

//components
import ProductWidget from "./ProductWidget";

//hooks
import { useSendMessage } from "@/hooks/chat.hook";
import { useGetCurrentUser } from "@/hooks/user.hook";

//utils
import imageLinkFormat from "@/utils/imageUrl";

const Messaging = ({ messageData, activeChat }) => {
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
        backgroundColor: "background.paper",
        height: "100vh",
        width: "100%",
        padding: "10px 14px",
      }}
    >
      {allMessages?.messages ? (
        <>
          <Box
            className={"Head"}
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "start",
              alignItems: "center",
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
              src={imageLinkFormat(allMessages?.user?.image)}
            />
            <Typography variant="body1">
              {allMessages?.user?.fullName}
            </Typography>
            <Badge
              color="primary"
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            />
          </Box>

          <Box
            sx={{
              margin: "5px 0",
              height: "85%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              borderTop: "1px solid #F0F0FB",
              borderBottom: "1px solid #F0F0FB",
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
                      justifyItems: "flex-end",
                      padding: "0 0 14px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
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
                        {item?.senderId === userData?.data?.userId
                          ? userData?.data?.fullName
                          : allMessages?.user?.fullName}
                        ,{" "}
                        {item?.updatedAt &&
                          format(new Date(item?.updatedAt), "p")}
                      </Typography>

                      {item?.senderId === userData?.data?.userId && (
                        <Box
                          component="img"
                          sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src={imageLinkFormat(userData?.data?.image)}
                        />
                      )}
                    </Box>

                    {item.type === "link" &&
                    item?.message === "{{ProductLink}}" ? (
                      <ProductWidget
                        productId={item?.metadata?.productId}
                        item={item}
                        userData={userData}
                      />
                    ) : (
                      <Box
                        sx={{
                          display: "inline-block",
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
                              item?.senderId === userData?.data?.userId &&
                              "#fff",
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

            <Box
              sx={{
                margin: "5px 0",
                height: "85%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {chatMessage?.length !== 0 &&
                chatMessage?.messages?.map((senderText) => {
                  return (
                    <Box
                      key={senderText?.id}
                      sx={{
                        width: "100%",

                        justifyItems: "flex-end",
                        padding: "0 0 14px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Typography
                          variant="f10"
                          sx={{
                            textAlign: "right",
                          }}
                        >
                          {userData?.data?.fullName},{" "}
                          {senderText?.updatedAt &&
                            format(new Date(senderText?.updatedAt), "p")}
                        </Typography>

                        <Box
                          component="img"
                          sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                          src={imageLinkFormat(userData?.data?.image)}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        {sending && (
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress size={20} />
                          </Box>
                        )}
                        {isError && (
                          <IconButton
                            size="small"
                            color="warning"
                            onClick={(e) => onSendMessage(e, { retry: true })}
                          >
                            <ReplayOutlinedIcon></ReplayOutlinedIcon>Retry
                          </IconButton>
                        )}
                        <Box
                          sx={{
                            display: "inline-block",

                            // width: "max-content",
                            padding: "13px 17px",
                            backgroundColor:
                              senderText?.senderId === userData?.data?.userId
                                ? "#40D39C"
                                : "#F0F0FB",
                            borderRadius: "7px",
                            textAlign:
                              senderText?.senderId === userData?.data?.userId
                                ? "right"
                                : "left",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 400,
                              color:
                                senderText?.senderId ===
                                  userData?.data?.userId && "#fff",
                            }}
                          >
                            {senderText.type === "link" ? (
                              <Link href={senderText?.message}>
                                {senderText?.message}
                              </Link>
                            ) : (
                              senderText?.message + "HMNO"
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>

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
                placeholder={`Message ${
                  allMessages?.user?.fullName || "Michael"
                }`}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                className="searchChat"
                type="text"
                error={formState?.errors?.content && true}
                // helperText={formState?.errors?.content?.message}
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
                    <Box
                      sx={{
                        position: "relative",
                        marginLeft: "40px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <IconButton>
                        <EmojiEmotionsOutlinedIcon position="start" />
                      </IconButton>
                      <Divider
                        orientation="vertical"
                        flexItem
                        variant="middle"
                      />
                      <IconButton type="submit" disabled={sending || isError}>
                        <SendOutlinedIcon position="start" />
                      </IconButton>
                    </Box>
                  ),
                }}
              />
            </form>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box component="img" src="/preshent/logo-black.png" />
        </Box>
      )}
    </Box>
  );
};

export default Messaging;
