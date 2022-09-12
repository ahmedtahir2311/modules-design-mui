import React from "react";

import { Controller, useForm } from "react-hook-form";

import { Box, Typography, Divider, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

//component
import SlickSlider from "@/components/SlickSlider/Slider";

//hooks
import { useGetCurrentUser } from "@/hooks/user.hook";

//utils
import imageLinkFormat from "@/utils/imageUrl";

const ChatThreads = ({ chats, activeChat, setActiveChat }) => {
  const { data: userData } = useGetCurrentUser();

  const { control, formState } = useForm();
  return (
    <Box sx={{ padding: "10px ", height: "100vh" }}>
      <Box sx={{ padding: "30px 25px " }}>
        <Typography variant="f18" sx={{ fontWeight: "500" }}>
          Online now
        </Typography>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {true && (
            <Box
              sx={{
                width: { sx: "100px", md: "150px", lg: "200px", xl: "300px" },
              }}
            >
              <SlickSlider
                data={{
                  slidesToShow: 5,
                  ChatThreads: true,
                  responsive: [
                    {
                      breakpoint: 1366,
                      settings: {
                        slidesToShow: 4,
                      },
                    },
                    {
                      breakpoint: 900,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                  ],
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Box key={item.id}>
                    <Box
                      width={"36px"}
                      height={"36px"}
                      component={"img"}
                      src="/images/listing/backyard.png"
                      sx={{ borderRadius: " 50%" }}
                    />
                  </Box>
                ))}
              </SlickSlider>
            </Box>
          )}
        </Box>
        <Divider
          sx={{
            borderWidth: "1px",
          }}
        />
      </Box>
      <Box sx={{ padding: "10px 0 0" }}>
        <Typography variant="f20" sx={{ fontWeight: "500", padding: "0 25px" }}>
          Chats
        </Typography>

        <Controller
          control={control}
          name="search"
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              //   className={`${classes.inputBox} ${classes.inputBoxRadius}`}
              variant="outlined"
              placeholder="Search for chats"
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
                padding: "0",
                "& .MuiOutlinedInput-input": {
                  borderRadius: "4px",
                  padding: "7px",
                },
              }}
              InputProps={{
                startAdornment: <SearchOutlinedIcon position="start" />,
              }}
            />
          )}
        />

        <Box
          sx={{
            marginTop: "15px",
            width: "100%",
            height: { lg: "55vh", xl: "70vh" },
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            overflow: "auto",
          }}
        >
          {chats?.map((item) => {
            return (
              <Box
                key={item?.id}
                sx={{
                  borderLeft:
                    activeChat?.id === item?.id
                      ? "5px solid #40D39C"
                      : " 5px solid #40D39C",
                  borderRadius: "5px 5px 0 0",
                  cursor: "pointer",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "15px",
                }}
                onClick={() => {
                  setActiveChat(item);
                }}
              >
                <Box
                  width={"36px"}
                  height={"36px"}
                  component={"img"}
                  src={imageLinkFormat(item?.participant?.image)}
                  sx={{ borderRadius: " 50%" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    width: "80%",
                    overflow: "hidden",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item?.participant?.fullName}
                  </Typography>
                  <Typography variant="body2" color="text.gray.A1A1A1" noWrap>
                    {item?.lastMessage?.message === "{{ProductLink}}"
                      ? "Sent a Product"
                      : item?.lastMessage?.message}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(ChatThreads);
