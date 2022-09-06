import React, { useState } from "react";

import { Badge, Box, IconButton, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

//components
import Avatar from "@/components/Dashboard/Chat/UsersChat/Avatar";

import { Controller, useForm } from "react-hook-form";

const UserChat = () => {
  const { control, handleSubmit, formState } = useForm();

  const [activeTab, setActiveTab] = useState("All");
  const [activeChat, setActiveChat] = useState("");

  return (
    <Box
      sx={{
        backgroundColor: "#e5e5e5",
        height: "100vh",
        width: "100%",
        padding: "8px 0",
      }}
    >
      <Box padding={"0 14px"}>
        <Controller
          control={control}
          name="search"
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              //   className={`${classes.inputBox} ${classes.inputBoxRadius}`}
              variant="outlined"
              placeholder="Find people and conversations"
              className="searchChat"
              type="search"
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
                startAdornment: <SearchOutlinedIcon position="start" />,
                endAdornment: (
                  <Box sx={{ position: "relative", marginLeft: "40px" }}>
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        padding: "10px",
                        backgroundColor: "#2E4765",
                        position: "absolute",
                        right: "0",
                        top: "0",
                        borderRadius: "50%",

                        filter: "drop-shadow(1px 2px 0.5rem #2E4765)",
                        cursor: "pointer",
                      }}
                    >
                      <AddOutlinedIcon
                        sx={{
                          fontSize: "30px",
                          fontWeight: 900,
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </Box>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          margin: "5px 10px 10px",
          padding: "5px 14px",
        }}
      >
        {filter.map((item) => {
          return (
            <Box
              key={item?.name}
              sx={
                activeTab === item.name
                  ? { ...styleActive }
                  : {
                      fontWeight: 500,
                      cursor: "pointer",
                      color: "#9095A4",
                      padding: "0 10px",
                    }
              }
            >
              <Typography
                variant="body1"
                onClick={() => {
                  setActiveTab(item?.name);
                }}
              >
                {item?.name}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "75%",
          padding: "5px 0",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7]?.map((item) => {
          return (
            <Box
              key={item}
              sx={
                activeChat === item
                  ? {
                      borderLeft: "5px solid #40D39C",
                      borderRadius: "5px 5px 0 0",
                    }
                  : {
                      borderLeft: "5px solid #40D39C00",
                    }
              }
              onClick={() => {
                setActiveChat(item);
              }}
            >
              <Box
                sx={{
                  margin: "0 5px",
                  padding: "5px",
                  background: "#F0F0FB ",
                  // background: "red ",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Avatar />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <Typography variant="h6">Michael Honge</Typography>
                    <Typography variant="body2" color="text.gray.A1A1A1">
                      This the Chat
                    </Typography>{" "}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <IconButton>
                      <MoreHorizOutlinedIcon />
                    </IconButton>
                    <Typography variant="body1" color="text.gray.A1A1A1">
                      7:45PM
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ margin: "10px 16px" }}>
        <Avatar user={true} />
      </Box>
    </Box>
  );
};

export default React.memo(UserChat);

const filter = [{ name: "Recent" }, { name: "Unread" }, { name: "All" }];

const styleActive = {
  borderBottom: "3px solid #40D39C",
  color: "#40D39C",
  fontWeight: 600,
  cursor: "pointer",
  borderRadius: "5px 5px 0  0",
  padding: "0 10px",
};
