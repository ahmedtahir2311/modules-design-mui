import React, { useEffect, useRef, useState } from "react";

import { TextField, InputAdornment } from "@mui/material";
import _ from "lodash";

import SearchIcon from "@mui/icons-material/Search";

const Index = ({ query, setQuery }) => {
  const refSearch = useRef(null);

  const [search, setSearch] = useState();

  const debouncedChangeHandler = React.useCallback(
    _.debounce((value) => {
      setSearch(value);
    }, 1000),
    []
  );

  useEffect(() => {
    setQuery((pre) => ({ ...pre, name: search }));
  }, [search]);

  const clearHandler = function () {
    refSearch.current.value = "";
  };

  useEffect(() => {
    !query.name && setSearch("");
    !query.name && clearHandler();
  }, [query]);

  return (
    <TextField
      inputRef={refSearch}
      type="text"
      placeholder="Search here..."
      disable
      sx={{
        width: "400px",
        backgroundColor: "#fff",
        color: "text.A1A1A1",
        borderRadius: "8px",
        "& .MuiOutlinedInput-input": {
          padding: "10.5px",
        },

        "& fieldset": {
          borderWidth: 0,
          borderRadius: "8px",
        },
      }}
      onChange={(e) => debouncedChangeHandler(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "text.A1A1A1" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default React.memo(Index);
