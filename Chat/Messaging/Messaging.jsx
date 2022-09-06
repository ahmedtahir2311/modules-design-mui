import React, { useState } from "react";
import { Badge, Box, TextField, Typography } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { Controller, useForm } from "react-hook-form";

const Messaging = () => {
  const [showDate, setShowDate] = useState(0);
  const { control, handleSubmit, formState } = useForm();

  console.log();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        height: "100vh",
        width: "100%",
        padding: "10px 14px",
      }}
    >
      <Box
        className={"Head"}
        sx={{
          display: "flex",
          gap: "20px",
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
          sx={{}}
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
          borderTop: "1px solid #F0F0FB",
          borderBottom: "1px solid #F0F0FB",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {messages
          .sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
          })
          .map((item, index, preitem) => {
            const preDate = new Date(preitem[index - 1]?.createdAt);
            const currentDate = new Date(item?.createdAt);

            return (
              <Box
                key={item}
                sx={{
                  width: "100%",
                  justifyItems: "flex-end",
                  //   alignSelf: item.User ? "flex-end" : "flex-start",
                  padding: "0 0 14px",
                }}
                onClick={() => {
                  showDate === item?.id
                    ? setShowDate(0)
                    : setShowDate(item?.id);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20xp",
                    alignItems: "center",
                    justifyContent: item.User ? "flex-end" : "flex-start",
                  }}
                >
                  <Typography
                    variant="f11"
                    sx={{
                      textAlign: item.User ? "right" : "left",
                    }}
                  >
                    Tim David, {item?.createdAt}
                  </Typography>

                  {item.User && (
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

                <Box
                  sx={{
                    display: "inline-block",
                    float: item.User ? "right" : "left",
                    // width: "max-content",
                    padding: "13px 17px",
                    backgroundColor: item.User ? "#40D39C" : "#F0F0FB",
                    borderRadius: "7px",
                    textAlign: item.User ? "right" : "left",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, color: item.User && "#fff" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
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
                startAdornment: <AddOutlinedIcon position="start" />,
                endAdornment: (
                  <Box sx={{ position: "relative", marginLeft: "40px" }}>
                    <SearchOutlinedIcon position="start" />
                  </Box>
                ),
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Messaging;

const messages = [
  {
    createdAt: "9/15/2021",
    description: "Water flowers",
    User: false,
    id: 1,
  },
  {
    createdAt: "9/15/2021",
    description: "They need water, or they will die.",
    User: false,
    id: 2,
  },
  {
    createdAt: "9/15/2021",
    description: "Call Mom",
    User: true,
    id: 3,
  },
  {
    createdAt: "9/15/2021",
    description: "It's her birthday!",
    User: true,
    id: 4,
  },
  {
    createdAt: "9/15/2021",
    description: "Clean the kitchen",
    User: true,
    id: 5,
  },
  {
    createdAt: "9/15/2021",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    User: true,
    id: 6,
  },
  {
    createdAt: "9/15/2021",
    description: "Water flowers",
    User: true,
    id: 7,
  },
  {
    createdAt: "9/15/2021",
    description: "They need water, or they will die.",
    User: false,
    id: 8,
  },
  {
    createdAt: "9/15/2021",
    description: "Call Mom",
    User: true,
    id: 9,
  },
  {
    createdAt: "9/15/2021",
    description: "It's her birthday!",
    User: false,
    id: 10,
  },
  {
    createdAt: "9/15/2021",
    description: "Clean the kitchen",
    User: true,
    id: 11,
  },
  {
    createdAt: "9/15/2021",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    User: false,
    id: 12,
  },
  {
    createdAt: "9/15/2021",
    description: "Water flowers",
    User: true,
    id: 13,
  },
  {
    createdAt: "9/15/2021",
    description: "They need water, or they will die.",
    User: false,
    id: 14,
  },
  {
    createdAt: "8/26/2022",
    description: "Call Mom",
    User: true,
    id: 15,
  },
  {
    createdAt: "8/26/2022",
    description: "It's her birthday!",
    User: false,
    id: 16,
  },
  {
    createdAt: "8/26/2022",
    description: "Clean the kitchen",
    User: true,
    id: 17,
  },
  {
    createdAt: "8/26/2022",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    User: false,
    id: 18,
  },
  {
    createdAt: "8/26/2022",
    description: "Water flowers",
    User: true,
    id: 19,
  },
  {
    createdAt: "8/26/2022",
    description: "They need water, or they will die.",
    User: false,
    id: 20,
  },
  {
    createdAt: "8/26/2022",
    description: "Call Mom",
    User: true,
    id: 21,
  },
  {
    createdAt: "5/2/2022",
    description: "It's her birthday!",
    User: false,
    id: 22,
  },
  {
    createdAt: "5/2/2022",
    description: "Clean the kitchen",
    User: true,
    id: 23,
  },
  {
    createdAt: "5/2/2022",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    User: false,
    id: 24,
  },
  {
    createdAt: "5/2/2022",
    description: "Water flowers",
    User: true,
    id: 25,
  },
  {
    createdAt: "5/2/2022",
    description: "They need water, or they will die.",
    User: false,
    id: 26,
  },
  {
    createdAt: "5/2/2022",
    description: "Call Mom",
    User: true,
    id: 27,
  },
  {
    createdAt: "5/2/2022",
    description: "It's her birthday!",
    User: false,
    id: 28,
  },
  {
    createdAt: "5/2/2022",
    description: "Clean the kitchen",
    User: true,
    id: 29,
  },
  {
    createdAt: "5/2/2022",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash!",
    User: false,
    id: 30,
  },
  {
    createdAt: "5/2/2022",
    description: "Water flowers",
    User: false,
    id: 31,
  },
  {
    createdAt: "5/2/2022",
    description: "They need water, or they will die.",
    User: true,
    id: 32,
  },
];
