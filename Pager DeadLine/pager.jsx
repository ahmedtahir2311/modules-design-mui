<Box
  sx={{
    backgroundColor: "background.paper",
    borderRadius: "16px",
    boxShadow: 1,
    padding: "30px 25px",
    height: "100%",
    textAlign: "center",
  }}
>
  <Typography
    variant="f22"
    lineHeight="150%"
    sx={{ fontWeight: 700 }}
    color="text.warning"
  >
    Upcoming Deadlines
  </Typography>

  <Grid container alignItems="center" sx={{ padding: "30px 0" }}>
    <Grid item xl={2} md={2} xs={2} justifyItems={"self-end"} align="self-end">
      <IconButton
        disabled={pager === 0}
        onClick={() => setPager(pager - 1)}
        color="secondary"
      >
        <ArrowBackIosIcon
          sx={{ color: "#A1A1A1", fontSize: "38px", fontWeight: 800 }}
        />
      </IconButton>
    </Grid>
    <Grid item xl={8} md={8} xs={8}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1" sx={{ fontWeight: 600 }}>
          {moment(deadlines[pager]?.endDate).date()}
        </Typography>
        <Typography
          variant="f18"
          color="text.gray.A1A1A1"
          sx={{ fontWeight: 500 }}
        >
          {moment(deadlines[pager]?.endDate).month("").format("MMMM")}
        </Typography>
      </Box>
    </Grid>
    <Grid item xl={2} md={2} xs={12}>
      <IconButton
        disabled={pager === deadlines.length - 1}
        onClick={() => setPager(pager + 1)}
        color="secondary"
      >
        <ArrowForwardIosIcon
          sx={{ color: "#A1A1A1", fontSize: "38px", fontWeight: 800 }}
        />
      </IconButton>
    </Grid>
  </Grid>
  <Divider />
  <Box
    sx={{
      margin: "20px 0 0 0 ",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    }}
  >
    <Typography variant="f18" sx={{ fontWeight: 500 }}>
      {moment(deadlines[pager]?.endDate).format("hh:mm A")}
    </Typography>
    <Typography variant="f26" sx={{ fontWeight: 700 }} color="#00BF78">
      {deadlines[pager]?.name}
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Typography variant="f18" sx={{ fontWeight: 700 }}>
        {deadlines[pager]?.Project?.name}
      </Typography>
      <Typography
        variant="f14"
        color="text.gray.A1A1A1"
        maxHeight={"40px"}
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {deadlines[pager]?.Project?.description}{" "}
      </Typography>
    </Box>
  </Box>
</Box>;
