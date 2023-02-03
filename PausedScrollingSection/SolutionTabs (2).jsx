import React, { useEffect, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import UnderLinerWrapper from "@/components/Wrapper/UnderlinerWrapper";
gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  let buttonOne = useRef(null);

  let section1 = useRef(null);
  let lineOne = useRef(null);
  let lineTwo = useRef(null);

  let sectionRed = useRef(null);
  let sectionBlack = useRef(null);
  // let sectionPurple = useRef(null);
  let sectionYellow = useRef(null);

  let frontendText = useRef(null);
  let backendText = useRef(null);
  let UiUxText = useRef(null);

  useEffect(() => {
    gsap?.to(buttonOne, {
      // duration: 8,
      scrollTrigger: {
        trigger: section1,
        start: `top top`,
        end: "bottom top",
        pin: buttonOne,
        scrub: 4,
      },
    });
    gsap?.to(lineOne, {
      // duration: 8,
      scrollTrigger: {
        trigger: section1,
        endTrigger: section1,
        start: `top top`,

        pin: lineOne,
        scrub: 4,
      },
    });
    gsap?.to(lineTwo, {
      // duration: 0,
      scrollTrigger: {
        trigger: section1,
        start: `top top`,
        end: "bottom bottom",

        pin: lineTwo,
        scrub: 4,
      },
    });

    gsap?.to(sectionRed, {
      duration: 0,
      scrollTrigger: {
        trigger: sectionRed,
        start: `top 100px`,
        end: "bottom 100px",

        toggleClass: "enable",
        pin: true,
        pinSpacing: false,
        // scrub: 4,
      },
    });
    gsap?.to(frontendText, {
      opacity: 1,
      fontWeight: "bold",
      scrollTrigger: {
        trigger: sectionRed,
        start: `top 100px`,
        end: "bottom 100px",
        toggleActions: "restart reset restart reset",
        // scrub: 4,
      },
    });

    gsap?.to(sectionBlack, {
      duration: 0,
      scrollTrigger: {
        trigger: sectionBlack,
        start: `top 100px`,
        end: "bottom 100px",

        toggleClass: "enable",
        pin: true,
        pinSpacing: false,
        // scrub: 4,
      },
    });
    gsap?.to(backendText, {
      opacity: 1,
      fontWeight: "bold",

      scrollTrigger: {
        trigger: sectionBlack,
        start: `top 100px`,
        end: "bottom 100px",
        toggleActions: "restart reset restart reset",

        // scrub: 4,
      },
    });
    // gsap?.to(sectionPurple, {
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: sectionPurple,
    //     start: `top 100px`,
    //     end: "bottom 100px",

    //     toggleClass: "enable",
    //     pin: true,
    //     pinSpacing: false,
    //     // scrub: 4,
    //   },
    // });
    // gsap?.to(UiUxText, {
    //   opacity: 1,
    //   duration: 0.5,
    //   fontWeight: "bold",
    //   scrollTrigger: {
    //     trigger: sectionPurple,
    //     start: `top 100px`,
    //     // end: "bottom 100px",
    //     endTrigger: section1,
    //     end: "bottom top",

    //     toggleClass: "enable",
    //     pin: true,
    //     pinSpacing: false,
    //     // scrub: 4,
    //   },
    // });
    gsap?.to(sectionYellow, {
      duration: 0,
      scrollTrigger: {
        trigger: sectionYellow,
        start: `top 100px`,
        endTrigger: section1,
        end: "bottom top",

        toggleClass: "enable",
        pin: true,
        pinSpacing: false,
        // scrub: 4,
      },
    });
    gsap?.to(UiUxText, {
      opacity: 1,
      fontWeight: "bold",

      scrollTrigger: {
        trigger: sectionYellow,
        start: `top 100px`,
        endTrigger: section1,
        end: "bottom top",

        toggleActions: "restart reset restart reset",

        // scrub: 4,
      },
    });
  }, []);

  return (
    <>
      <Box
        ref={(el) => (section1 = el)}
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.blue",
          position: "relative",
          zIndex: -1,
          paddingBottom: "10px",
        }}
      >
        <Box>
          <Box
            ref={(el) => (lineOne = el)}
            sx={{
              height: "2px",
              width: "100%",
              backgroundColor: "#fff",
              position: "absolute",
              top: "80px",
              left: 0,
            }}
          />
          <Box sx={{ padding: "0 40px" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  marginTop: "50px",
                  width: "30%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ paddingTop: "100px" }}>
                  <Box ref={(el) => (buttonOne = el)}>
                    <Box width={"300px"}>
                      {" "}
                      <Button
                        variant="outlined"
                        sx={{
                          width: "100%",
                          borderRadius: "50px",
                          display: "flex",
                          fontStyle: "italic",
                          gap: "10px",
                          color: "#000",
                        }}
                      >
                        <Typography variant="f18" color="text.bright">
                          Consult with US
                        </Typography>
                        <EastIcon sx={{ color: "text.bright" }} />
                      </Button>
                    </Box>
                    {/* content Tabs */}
                    <Box
                      sx={{
                        width: "100%",
                        marginTop: "30px",
                        height: { lg: "60vh", xl: "72vh" },
                        color: "text.bright",
                      }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          gap: "15px",
                        }}
                      >
                        <Typography variant="h3">Our Solutions</Typography>
                        <Typography
                          ref={(el) => (frontendText = el)}
                          variant="f16"
                          sx={{
                            opacity: 0.5,
                          }}
                        >
                          Front End Development
                        </Typography>
                        <Typography
                          ref={(el) => (backendText = el)}
                          variant="f16"
                          sx={{
                            opacity: 0.5,
                          }}
                        >
                          Back End Development
                        </Typography>
                        <Typography
                          ref={(el) => (UiUxText = el)}
                          variant="f16"
                          sx={{
                            opacity: 0.5,
                          }}
                        >
                          UI/UX Designing
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                ref={(el) => (lineTwo = el)}
                sx={{
                  width: "2px",
                  height: "100vh",
                  backgroundColor: "#fff",
                }}
              />
              {/* content */}
              <Box sx={{ width: "70%" }}>
                <Box
                  sx={{
                    paddingTop: "100px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    ref={(el) => (sectionRed = el)}
                    sx={{
                      // backgroundColor: "red",
                      width: "100%",
                      height: { lg: "80vh", xl: "85vh" },
                      opacity: 0,
                    }}
                  ></Box>
                  <Box
                    ref={(el) => (sectionBlack = el)}
                    sx={{
                      // backgroundColor: "black",
                      width: "100%",
                      height: { lg: "80vh", xl: "85vh" },
                      opacity: 0,
                    }}
                  ></Box>
                  {/* <Box
                    ref={(el) => (sectionPurple = el)}
                    sx={{
                      backgroundColor: "purple",
                      width: "100%",
                      height: { lg: "80vh", xl: "85vh" },
                      opacity: 0,
                    }}
                  ></Box> */}
                  <Box
                    ref={(el) => (sectionYellow = el)}
                    sx={{
                      // backgroundColor: "yellow",
                      width: "100%",
                      height: { lg: "80vh", xl: "85vh" },
                      opacity: 0,
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Solutions;
