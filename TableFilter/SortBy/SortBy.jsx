import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";

export default function SortBy({ query, setQuery }) {
  const [sort, setSort] = useState("");

  useEffect(() => {
    setQuery((pre) => ({ ...pre, sort }));
  }, [sort]);

  useEffect(() => {
    !query.sort && setSort("");
  }, [query]);

  return (
    <Select
      displayEmpty
      sx={sx}
      MenuProps={MenuProps}
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      renderValue={(selected) => (selected ? selected : "SortBy")}
    >
      {["ASC", "DESC"]?.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "40vh",
    },
  },
};

const sx = {
  width: "100px",
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
};
