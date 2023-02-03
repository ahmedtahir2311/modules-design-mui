import * as React from "react";

// package
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";

// components
import SearchBar from "@/components/Table/TableFilter/SearchBarwithCatagory";
import Category from "@/components/Table/TableFilter/SearchBarwithCatagory/Catagory";
import DateRange from "@/components/Table/TableFilter/DateRange";
import SortBy from "./SortBy/SortBy";

import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import CloseIcon from "@mui/icons-material/Close";
import { format } from "date-fns";

export default function TableFilter({
  filter,
  activeTab,
  setActiveTab,
  setQuery,
  query,
}) {
  let filters = Object.assign({}, query);
  delete filters.publishStatus;

  const removeHandler = (value) => {
    setQuery({ ...query, [value]: "" });
  };

  const clearAll = () => {
    setQuery({ publishStatus: query.publishStatus });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          {filter ? (
            <Box sx={Styles.filterBtnContainer}>
              {filter?.map((ele) => (
                <Box
                  key={ele.name}
                  sx={Styles.filterBtn(ele.name === activeTab)}
                  onClick={() => setActiveTab(ele.name)}
                >
                  {ele.name}
                </Box>
              ))}
            </Box>
          ) : (
            <Box display={"flex"} gap="5px">
              <SearchBar query={query} setQuery={setQuery} />
              <Category query={query} setQuery={setQuery} />
            </Box>
          )}
        </Grid>
        <Grid
          item
          lg={6}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="10px"
        >
          {!filter && <SortBy query={query} setQuery={setQuery} />}
          <DateRange query={query} setQuery={setQuery} />
        </Grid>
      </Grid>
      {Object.entries(filters)?.filter((item) => !!item[1])?.length > 0 && (
        <Box
          sx={{
            margin: "10px 0 0 0 ",
            display: "flex",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <FilterListOutlinedIcon />
          {Object.entries(filters)
            ?.filter((item) => !!item[1])
            ?.map((item) => {
              return (
                <Button
                  key={item[0]}
                  sx={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    alignSelf: "flex-end",
                    gap: "10px",
                    backgroundColor: "#E3E6F190",
                  }}
                  onClick={() => removeHandler(item[0])}
                >
                  <Typography variant="f12">
                    {" "}
                    {item[0] === "startDate" || item[0] === "endDate"
                      ? format(new Date(item[1]), "d LLL, y")
                      : item[1]}
                  </Typography>

                  <CloseIcon fontSize="12px" />
                </Button>
              );
            })}
          <Button
            sx={{
              padding: "5px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              alignSelf: "flex-end",
              gap: "10px",
              backgroundColor: "#E3E6F190",
            }}
            onClick={clearAll}
          >
            {" "}
            <Typography sx={{ cursor: "pointer" }} variant="f12">
              {" "}
              Remove All
            </Typography>
            <CloseIcon fontSize="12px" />
          </Button>
        </Box>
      )}
    </>
  );
}

const Styles = {
  filterBtnContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: "30px",
  },
  filterBtn: (active) => {
    return {
      color: active ? "text.main" : "text.secondary",
      fontSize: active ? "22px" : "16px",
      fontWeight: active ? "600" : "400",
      fontFamily: "font.main",
      cursor: "pointer",
    };
  },
};
