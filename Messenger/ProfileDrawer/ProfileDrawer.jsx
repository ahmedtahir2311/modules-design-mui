import React from "react";

import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const ProfileDrawer = ({ open, setOpen }) => {
  const [mediaAll, setMediaAll] = useState(false);
  const [linkAll, setLinkAll] = useState(false);

  useEffect(() => {
    setMediaAll(false), setLinkAll(false);
  }, [open]);

  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "400px",
          height: "100vh",
          padding: "2%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0 10px",
          }}
        >
          <Box
            component={"img"}
            src="/images/detail/dummy.png"
            sx={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <Typography variant="f18" sx={{ fontWeight: "600" }}>
            Bob Marley
          </Typography>
          <Typography variant="body2" color="text.gray.A1A1A1">
            Random Industries
          </Typography>
        </Box>
        <Divider
          variant="middle"
          sx={{
            margin: "10px 0",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "#EEF0F6",
          }}
        />
        <Box sx={{ padding: "10px 30px " }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="f16" sx={{ fontWeight: 600 }}>
              Media
            </Typography>
            <Button onClick={() => setMediaAll(true)}>See all</Button>
          </Box>
          <Box
            sx={{
              // backgroundColor: "red",
              width: "100%",
              height: { lg: "25vh", xl: "33vh" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              overflow: mediaAll ? "auto" : "hidden",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 5, 43, 2, 2, 4, 5]?.map((item) => {
              return (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    src="/images/detail/dummy.png"
                    sx={{ width: "33px", height: "33px", borderRadius: "6px" }}
                  />
                  <Box
                    sx={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="body1" noWrap>
                      plan.zip
                    </Typography>
                    <Typography variant="f10" color="text.gray.A1A1A1">
                      24-02-2022{" "}
                    </Typography>
                  </Box>
                  <Typography
                    variant="f10"
                    color="text.gray.A1A1A1"
                    sx={{
                      justifySelf: "baseline",
                      alignSelf: "end",
                      width: "20%",
                    }}
                  >
                    12.0 mb
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Divider
          variant="middle"
          sx={{
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "#EEF0F6",
          }}
        />
        <Box sx={{ padding: "10px 30px " }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="f16" sx={{ fontWeight: 600 }}>
              Links
            </Typography>
            <Button onClick={() => setLinkAll(true)}>See all</Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: { lg: "25vh", xl: "33vh" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              overflow: linkAll ? "auto" : "hidden",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 9, 7, 8, 9]?.map((item) => {
              return (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {" "}
                  <Typography variant="body1" noWrap overflow="hidden">
                    www.facebook.com{" "}
                  </Typography>
                  <Typography variant="f10" color="text.gray.A1A1A1">
                    24-02-2022{" "}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ProfileDrawer;
