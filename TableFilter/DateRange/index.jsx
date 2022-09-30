import { Typography } from "@mui/material";
import * as React from "react";

import PickDate from "./PickDate";

const Index = ({ query, setQuery }) => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  React.useEffect(() => {
    setQuery((pre) => ({
      ...pre,
      startDate: startDate ? `${formatDate(startDate)} 00:00:00.000` : null,
      endDate: endDate ? `${formatDate(endDate)} 24:00:00.000` : null,
    }));
  }, [startDate, endDate]);

  React.useEffect(() => {
    !query.startDate && setStartDate(null);
    !query.endDate && setEndDate();
  }, [query]);

  return (
    <>
      <PickDate
        placeholder="Start Date"
        date={startDate}
        endDate={endDate ? endDate : undefined}
        setDate={setStartDate}
      />
      <Typography variant="body2" color="text.main">
        To
      </Typography>
      <PickDate
        date={endDate}
        placeholder="End Date"
        startDate={startDate ? startDate : undefined}
        setDate={setEndDate}
      />
    </>
  );
};

export default Index;
