import React, { useEffect, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  let solutionSection = useRef(null);
  let section1 = useRef(null);
  let section1TopSub = useRef(null);
  let section1BottomSub = useRef(null);
  let section2 = useRef(null);
  let section3 = useRef(null);
  let section4 = useRef(null);
  let section5 = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   buttonRef,
    //   { width: 0, visibility: "hidden" },
    //   {
    //     width: "100%",
    //     visibility: "visible",
    //     duration: 1,
    //     ease: "power2",
    //     scrollTrigger: {
    //       trigger: buttonRef,
    //       start: "top bottom",
    //     },
    //   }
    // );
  }, []);

  useEffect(() => {
    gsap.to(solutionSection, {
      width: "100%",
      scrollTrigger: {
        trigger: solutionSection,
        markers: {
          startColor: "purple",
          endColor: "purple",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
        start: "top  bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        pin: true,
        pinType: "fixed",
        pinSpacing: false,
      },
    });
    // gsap.to(section1, {
    //   width: "100%",
    //   height: "85vh",
    //   scrollTrigger: {
    //     trigger: section1,
    //     markers: {
    //       startColor: "green",
    //       endColor: "green",
    //       fontSize: "18px",
    //       fontWeight: "bold",
    //     },
    //     start: "top 100px",
    //     // scrub: 1.4,
    //     toggleActions: "play none none reverse",
    //     pin: true,
    //     pinSpacing: false,
    //     // pinType: "fixed",
    //     // endTrigger: section1,
    //   },
    // });
    // gsap.to(section2, {
    //   duration: 1,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: section2,
    //     markers: {
    //       startColor: "yellow",
    //       endColor: "yellow",
    //       fontSize: "18px",
    //     },
    //     start: "top 100px",
    //     // scrub: 1.4,
    //     toggleActions: "play none none reverse",
    //     pin: true,
    //     pinSpacing: 0,
    //     // pinType: "fixed",
    //     // endTrigger: section1,
    //   },
    // });
    // gsap.to(section3, {
    //   duration: 1,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: section3,
    //     // markers: true,
    //     start: "top 100px",
    //     // scrub: 1.4,
    //     toggleActions: "play none none reverse",
    //     pin: true,
    //     pinSpacing: 0,
    //     // pinType: "fixed",
    //     // endTrigger: section1,
    //   },
    // });
    // gsap.to(section4, {
    //   duration: 0.2,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: section4,
    //     markers: true,
    //     start: "top 100px",
    //     // scrub: 1.4,
    //     pin: true,
    //     pinSpacing: 0,
    //     // pinType: "fixed",
    //     // endTrigger: section1,
    //   },
    // });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        //   maxHeight: "100vh",
        backgroundColor: "background.blue",
        position: "relative",
        zIndex: -1,

        // paddingBottom: "150px",
      }}
    >
      <Box
        ref={(el) => {
          solutionSection = el;
        }}
      >
        <Box
          sx={{
            height: "2px",
            width: "100%",
            backgroundColor: "background.paper",
            position: "absolute",
            top: "80px",
            left: 0,
          }}
        />
        <Box sx={{ padding: "0 80px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ marginTop: "50px" }}>
              <Box sx={{ paddingTop: "100px" }}>
                <Button
                  variant="outlined"
                  color="bright"
                  sx={{
                    borderRadius: "50px",
                    display: "flex",
                    fontStyle: "italic",
                    gap: "10px",
                    color: "#000",
                  }}
                  size="large"
                >
                  <Typography variant="f18" color="text.bright">
                    Consult with US
                  </Typography>
                  <EastIcon sx={{ color: "text.bright" }} />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: "2px",
                height: "100vh",
                backgroundColor: "background.paper",
              }}
            />
            <Box sx={{ width: "60%" }}>
              <Box
                sx={{
                  paddingTop: "100px ",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  ref={(el) => {
                    section1TopSub = el;
                  }}
                />
                <Box
                  ref={(el) => {
                    section1 = el;
                  }}
                  sx={{
                    backgroundColor: "red",
                    width: "100%",
                    height: "85vh",
                  }}
                ></Box>
                <Box
                  ref={(el) => {
                    section1BottomSub = el;
                  }}
                />
                <Box
                  ref={(el) => {
                    section2 = el;
                  }}
                  sx={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "85vh",
                  }}
                ></Box>

                <Box
                  ref={(el) => {
                    section3 = el;
                  }}
                  sx={{
                    backgroundColor: "purple",
                    width: "100%",
                    height: "85vh",
                  }}
                ></Box>
                <Box
                  ref={(el) => {
                    section4 = el;
                  }}
                  sx={{
                    backgroundColor: "yellow",
                    width: "100%",
                    height: "85vh",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Solutions;
