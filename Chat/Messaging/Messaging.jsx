import React, { useState } from "react";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

//components
import ProductWidget from "./ProductWidget";

//hooks
import { useAuthContext } from "@/context/auth.context";
import { useEffect } from "react";

const Messaging = ({ chatMessages, refetchMessages, activeChat }) => {
  const { userData } = useAuthContext();

  const { control, handleSubmit, formState, setValue } = useForm();

  const onSendMessage = (data) => {
    console.log(data);

    refetchMessages();
  };

  useEffect(() => {
    setValue("message", "");
  }, [activeChat]);

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        width: "100%",
        padding: "10px 14px",
      }}
    >
      {chatMessages ? (
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
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <Typography variant="body1">Michael Honge</Typography>
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
              backgroundImage: "url(/images/)",
              height: "85%",
              borderTop: "1px solid #F0F0FB",
              borderBottom: "1px solid #F0F0FB",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {chatMessages?.data?.map((item, index, preitem) => {
              const preDate = new Date(preitem[index - 1]?.createdAt);
              const currentDate = new Date(item?.createdAt);

              return (
                <Box
                  key={item?.id}
                  sx={{
                    width: "100%",
                    justifyItems: "flex-end",
                    //   alignSelf: item.User ? "flex-end" : "flex-start",
                    padding: "0 0 14px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20xp",
                      alignItems: "center",
                      justifyContent:
                        item?.senderId === userData?.id
                          ? "flex-end"
                          : "flex-start",
                    }}
                  >
                    <Typography
                      variant="f10"
                      sx={{
                        textAlign:
                          item?.senderId === userData?.id ? "right" : "left",
                      }}
                    >
                      {item?.senderId === userData?.id
                        ? item?.User?.Buyer.fullName
                        : item?.User?.Vendor.fullName}
                      , {item?.createdAt}
                    </Typography>

                    {item?.senderId === userData?.id && (
                      <Box
                        component="img"
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
                          item?.senderId === userData?.id ? "right" : "left",
                        // width: "max-content",
                        padding: "13px 17px",
                        backgroundColor:
                          item?.senderId === userData?.id
                            ? "#40D39C"
                            : "#F0F0FB",
                        borderRadius: "7px",
                        textAlign:
                          item?.senderId === userData?.id ? "right" : "left",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 400,
                          color: item?.senderId === userData?.id && "#fff",
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
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #F0F0FB",
            }}
          >
            <form
              style={{ width: "100%" }}
              onSubmit={handleSubmit(onSendMessage)}
            >
              <Controller
                control={control}
                name="message"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    placeholder={`Message ${
                      chatMessages?.data?.user || "Michael"
                    }`}
                    className="searchChat"
                    type="text"
                    error={formState?.errors?.search && true}
                    helperText={formState?.errors?.search?.message}
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
                          <IconButton sx={{}} type="submit">
                            <SendOutlinedIcon position="start" />
                          </IconButton>
                        </Box>
                      ),
                    }}
                  />
                )}
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
