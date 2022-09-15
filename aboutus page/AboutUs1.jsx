import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Head from "next/head";

// components
import Navbar from "@/components/Navbar/Navbar";
import AboutUsBanner from "@/components/Banners/AboutUsBanner";

import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import Reviews from "@/components/Reviews";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />

      <AboutUsBanner
        title={"About Us"}
        discription={
          "Preshent is the first AI and human experience powered solution-engine for clean techcombining a massive AI-curated global clean tech & sustainability marketplace with best in-class project management tools and a path to financing."
        }
      />

      <Box
        sx={{
          padding: "8% 12%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <Box sx={{ marginBottom: "10px" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item lg={3}>
              <Typography variant="h1" sx={{ fontWeight: "500" }}>
                Loreum Ipsum Big Projects
              </Typography>
            </Grid>
            <Grid item lg={7}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography variant="f22">
                  Ability to put themselves in the merchant's shoes. It is meant
                  to partner on the long run, and work as an extension of the
                  merchant's team.
                </Typography>
                <Typography variant="f22">
                  A digital agency is a business you hire to outsource your
                  digital marketing efforts, instead of handling in-house. They
                  can provide your business with a variety of digital solutions
                  to promote your product or service online and help you.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: "10px 0" }}>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item lg={5} xl={6}>
              {" "}
              <Box
                component="img"
                src="/images/listing/backyard.png"
                borderRadius={"6px"}
                width="100%"
              />
            </Grid>
            <Grid lg={5} item xl={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "35px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "35px" }}
                >
                  <Box
                    component="img"
                    src="/images/listing/backyard.png"
                    width="100%"
                    borderRadius={"6px"}
                  />
                  <Box
                    component="img"
                    src="/images/listing/backyard.png"
                    width="100%"
                    borderRadius={"6px"}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "35px" }}
                >
                  <Box
                    component="img"
                    src="/images/listing/backyard.png"
                    width="100%"
                    borderRadius={"6px"}
                  />
                  <Box
                    component="img"
                    src="/images/listing/backyard.png"
                    width="100%"
                    borderRadius={"6px"}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            margin: "100px 0",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 150px",
            }}
          >
            <Typography variant="h1">Expanding World Wide</Typography>

            <Typography variant="f22">
              Preshent is the first AI and human experience powered
              solution-engine for clean tech combining a massive AI-curated
              global clean tech & sustainability marketplace with best in-class
              project management tools and a path to financing.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {expanding?.map((item) => {
              return (
                <Box
                  key={item}
                  sx={{
                    width: "25%",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    border: "1px solid #2E4765",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#40D39C",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    width="80px"
                    height={"80px"}
                    borderRadius={"50%"}
                  >
                    {item?.icon}
                  </Box>
                  <Typography variant="h1"> {item?.title}</Typography>
                  <Typography variant="f24"> {item?.subTitle}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          padding: "60px 0 20px",
          backgroundColor: "#FBFBFB",
        }}
      >
        <Typography variant="h1">Checkout Recent Reviews</Typography>
        <Box sx={{ padding: "50px 200px" }}>
          <SlickSlider
            data={{
              slidesToShow: 3,
              ChatThreads: true,
              arrows: false,
              dots: true,
              responsive: [
                {
                  breakpoint: 1366,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            }}
          >
            {reviews?.map((item) => {
              const leftStar = Array.from({ length: 5 - item?.count }, () =>
                Math.floor(Math.random() * 40)
              );
              const Star = Array.from({ length: item?.count }, () =>
                Math.floor(Math.random() * 40)
              );

              return (
                <Box
                  key={item}
                  sx={{ padding: "10px 30px", textAlign: "left" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "background.paper",
                      padding: "60px 30px",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/detail/dummy.png"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        width="80px"
                        height={"80px"}
                        borderRadius={"50%"}
                      />
                      <Typography variant="f20" sx={{ fontWeight: 500 }}>
                        Jermy Mecleran
                      </Typography>
                    </Box>
                    <Typography
                      variant="f18"
                      color={"text.dark"}
                      sx={{ fontWeight: 500 }}
                    >
                      {" "}
                      Professional
                    </Typography>
                    <Typography variant="f16">
                      Full service range including technical skills, design.
                    </Typography>
                    <Box
                      sx={{
                        dispaly: "flex",
                        justifyContent: "flex-start",
                        gap: "10px",
                      }}
                    >
                      {Star?.map((item) => {
                        return (
                          <StarIcon
                            key={item}
                            sx={{ color: "#40D39C", fontSize: "28px" }}
                          />
                        );
                      })}

                      {leftStar?.map((item) => {
                        return (
                          <StarBorderIcon
                            key={item}
                            sx={{ color: "#40D39C", fontSize: "28px" }}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SlickSlider>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "8% 12%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
        }}
      >
        <Box sx={{ margin: "10px 0" }}>
          <Grid container spacing={2}>
            <Grid item lg={5} xl={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "0 30px",
                }}
              >
                <Typography variant="h1" sx={{ fontWeight: "500" }}>
                  Core Values
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Typography variant="f22">
                    Ability to put themselves in the merchant's shoes. It is
                    meant to partner on the long run, and work as an extension
                    of the merchant's team.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid lg={5} item xl={7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "35px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "35px" }}
                >
                  <Box
                    sx={{
                      padding: "30px",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      boxShadow: "5px 10px 50px rgba(0, 0, 0, 0.2)",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#40D39C",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      width="80px"
                      height={"80px"}
                      borderRadius={"50%"}
                    ></Box>
                    <Typography variant="f18" color={"text.dark"}>
                      {" "}
                      Professional
                    </Typography>
                    <Typography variant="f16">
                      {" "}
                      Full service range including technical skills, design.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "30px",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      boxShadow: "5px 10px 50px rgba(0, 0, 0, 0.2)",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#40D39C",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      width="80px"
                      height={"80px"}
                      borderRadius={"50%"}
                    ></Box>
                    <Typography variant="f18" color={"text.dark"}>
                      {" "}
                      Professional
                    </Typography>
                    <Typography variant="f16">
                      {" "}
                      Full service range including technical skills, design.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "35px" }}
                >
                  <Box
                    sx={{
                      padding: "30px",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      boxShadow: "5px 10px 50px rgba(0, 0, 0, 0.2)",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#40D39C",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      width="80px"
                      height={"80px"}
                      borderRadius={"50%"}
                    ></Box>
                    <Typography variant="f18" color={"text.dark"}>
                      {" "}
                      Professional
                    </Typography>
                    <Typography variant="f16">
                      {" "}
                      Full service range including technical skills, design.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "30px",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      boxShadow: "5px 10px 50px rgba(0, 0, 0, 0.2)",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#40D39C",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      width="80px"
                      height={"80px"}
                      borderRadius={"50%"}
                    ></Box>
                    <Typography variant="f18" color={"text.dark"}>
                      {" "}
                      Professional
                    </Typography>
                    <Typography variant="f16">
                      {" "}
                      Full service range including technical skills, design.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "100px 0 0",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 350px",
          textAlign: "center",

          backgroundColor: "#FBFBFB",
        }}
      >
        <Typography variant="h1">Start your business journey</Typography>

        <Typography variant="f22">
          Preshent is the first AI and human experience powered solution-engine
          for clean tech combining a massive AI-curated global clean tech &
          sustainability marketplace with best in-class project management tools
          and a path to financing.
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: "180px",
            height: { xs: "44px", md: "50px", lg: "52px", xl: "56px" },
            fontSize: { xs: "18px", lg: "20px", xl: "22px" },
            fontWeight: "400",
          }}
        >
          Get Started
        </Button>
      </Box>
    </>
  );
}

const expanding = [
  {
    icon: <StyleOutlinedIcon sx={{ color: "#fff", fontSize: "36px" }} />,
    title: "42%",
    subTitle: "Market Share",
  },
  {
    icon: <StyleOutlinedIcon sx={{ color: "#fff", fontSize: "36px" }} />,
    title: "73+",
    subTitle: "Outlets",
  },
  {
    icon: <StyleOutlinedIcon sx={{ color: "#fff", fontSize: "36px" }} />,
    title: "5000",
    subTitle: "Projects complete",
  },
  {
    icon: <StyleOutlinedIcon sx={{ color: "#fff", fontSize: "36px" }} />,
    title: "4300",
    subTitle: "Products Shipped",
  },
];
const reviews = [
  {
    name: "Jermy Mecleran",
    review: "Excellent Products",
    reviewDes: "Full service range including technical skills, design.",
    count: 4,
  },
  {
    name: "Jermy Mecleran",
    review: "Excellent Products",
    reviewDes: "Full service range including technical skills, design.",
    count: 4,
  },
  {
    name: "Jermy Mecleran",
    review: "Excellent Products",
    reviewDes: "Full service range including technical skills, design.",
    count: 4,
  },
  {
    name: "Jermy Mecleran",
    review: "Excellent Products",
    reviewDes: "Full service range including technical skills, design.",
    count: 4,
  },
];
