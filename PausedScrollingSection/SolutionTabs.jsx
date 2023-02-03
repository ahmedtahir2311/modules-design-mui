import React, { useEffect, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  let buttonOne = useRef(null);
  let section1 = useRef(null);
  let lineOne = useRef(null);
  let lineTwo = useRef(null);

  let sectionRed = useRef(null);
  let sectionBlack = useRef(null);
  let sectionPurple = useRef(null);
  let sectionYellow = useRef(null);

  useEffect(() => {
    gsap?.to(buttonOne, {
      duration: 8,
      scrollTrigger: {
        trigger: section1,
        start: `top top`,
        pin: buttonOne,
        scrub: 4,
      },
    });
    gsap?.to(lineOne, {
      duration: 8,
      scrollTrigger: {
        trigger: section1,
        endTrigger: section1,
        start: `top top`,

        pin: lineOne,
        scrub: 4,
      },
    });
    gsap?.to(lineTwo, {
      duration: 8,
      scrollTrigger: {
        trigger: section1,
        start: `top top`,
        end: "bottom bottom",
        markers: true,
        pin: lineTwo,
        scrub: 4,
      },
    });

    gsap?.to(sectionRed, {
      duration: 5,
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

    gsap?.to(sectionBlack, {
      duration: 5,
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
    gsap?.to(sectionPurple, {
      duration: 5,
      scrollTrigger: {
        trigger: sectionPurple,
        start: `top 100px`,
        end: "bottom 100px",

        toggleClass: "enable",
        pin: true,
        pinSpacing: false,
        // scrub: 4,
      },
    });
    gsap?.to(sectionYellow, {
      duration: 5,
      scrollTrigger: {
        trigger: sectionYellow,
        start: `top 100px`,
        endTrigger: section1,
        end: "bottom top",

        markers: {
          startColor: "purple",
          endColor: "green",
        },
        toggleClass: "enable",
        pin: true,
        pinSpacing: false,
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
              <Box sx={{ marginTop: "50px", width: "20%" }}>
                <Box sx={{ paddingTop: "100px" }}>
                  <Button
                    ref={(el) => (buttonOne = el)}
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      display: "flex",
                      fontStyle: "italic",
                      gap: "10px",
                      color: "#000",
                    }}
                    size="large"
                  >
                    <Typography variant="f18" color="#fff">
                      Consult with US
                    </Typography>
                  </Button>
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
              <Box sx={{ width: "80%" }}>
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
                      backgroundColor: "red",
                      width: "100%",
                      height: "85vh",
                      opacity: 0,
                    }}
                  ></Box>
                  <Box
                    ref={(el) => (sectionBlack = el)}
                    sx={{
                      backgroundColor: "black",
                      width: "100%",
                      height: "85vh",
                      opacity: 0,
                    }}
                  ></Box>
                  <Box
                    ref={(el) => (sectionPurple = el)}
                    sx={{
                      backgroundColor: "purple",
                      width: "100%",
                      height: "85vh",
                      opacity: 0,
                    }}
                  ></Box>
                  <Box
                    ref={(el) => (sectionYellow = el)}
                    sx={{
                      backgroundColor: "yellow",
                      width: "100%",
                      height: "85vh",
                      opacity: 0,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      height: "85vh",
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
