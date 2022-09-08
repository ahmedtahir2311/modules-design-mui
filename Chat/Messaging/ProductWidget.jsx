import React from "react";
import Link from "next/link";

import { Box, Typography } from "@mui/material";

//hooks
import { useProductDetails } from "@/hooks/listing.hook";
import imageLinkFormat from "@/utils/imageUrl";

const ProductWidget = ({ productId, item, userData }) => {
  const { data: productDetails } = useProductDetails(productId);

  console.log(productDetails);
  return (
    <Box
      sx={{
        display: "inline-block",
        float: item?.senderId === userData?.id ? "right" : "left",
        padding: "20px 0",
        backgroundColor: "#F0F0FB50",
        maxWidth: "600px",
        minWidth: "400px",
        overflow: "hidden",
        borderRadius: "13px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            margin: "0 5px",
            padding: "5px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            component="img"
            src={imageLinkFormat(productDetails?.data?.images[0]?.key)}
            width="80px"
            height="80px"
          />
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
              <Box>
                <Link
                  href=""
                  //   href={`/${getPageName(row?.productType)}/${row?.productId}`}
                >
                  <a>
                    <Typography
                      variant="body1"
                      color="text.main"
                      sx={{
                        fontWeight: 600,
                        textTransform: "capitalize",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {productDetails?.data?.name}
                    </Typography>
                  </a>
                </Link>

                {row?.options && (
                  <Typography>
                    {Object.entries(row?.options || {}).map((arr) => {
                      return (
                        <Box key={arr[0]} sx={{ margin: "5px 0" }}>
                          <Typography
                            variant="body2"
                            color="text.main"
                            noWrap
                            component={"span"}
                            sx={{
                              textTransform: "capitalize",
                            }}
                          >
                            {arr[0]}{" "}
                          </Typography>
                          :{" "}
                          <Typography
                            component={"span"}
                            variant="body2"
                            color="text.main"
                            noWrap
                            sx={{
                              textTransform: "capitalize",
                            }}
                          >
                            {arr[1]}{" "}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Typography>
                )}
              </Box>
              <Typography
                variant="body1"
                color="text.green.40D39C"
                sx={{ fontWeight: 600 }}
              >
                ${" "}
                {productDetails?.data?.Variants?.price ||
                  productDetails?.data?.metadata?.price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductWidget;

const row = {
  options: {
    color: "White",
    size: "L",
    Material: "Wool",
  },
};
