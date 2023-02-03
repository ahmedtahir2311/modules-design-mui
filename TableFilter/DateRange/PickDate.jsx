import * as React from "react";

// package
import { Box, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//
import { formatDate } from "@/utils/formatDate";

export default function PickDate({
  setDate,
  date,
  startDate,
  endDate,
  placeholder,
}) {
  return (
    <Box
      sx={{
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "background.paper",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          minDate={startDate}
          maxDate={endDate}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <>
              <Typography
                variant="body1"
                color="text.main"
                ref={inputRef}
                {...inputProps}
              >
                {date ? formatDate(date) : placeholder}
              </Typography>

              {InputProps?.endAdornment}
            </>
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
