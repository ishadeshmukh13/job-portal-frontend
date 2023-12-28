import React, { useEffect } from "react";
import Header from "../components/Header";
import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate } from "react-router";
const wallpaper = require("../assests/wallpaper.webp");
export const MainGrid = styled(Grid)({
  overflowY: "auto",
  maxWidth: "100vw",
  height: "100vh",
});
const LandingPage = () => {
  const token = localStorage.getItem("token");
  const navigate=useNavigate()
  useEffect(() => {
    if (token == null) {
      navigate("/")
    }
  });
  return (
    <MainGrid container>
      <Grid style={{}}>
        <Header />
        <Box style={{ marginTop: "20px", paddingInline: "20px" }}>
          <Typography style={{ fontSize: "20px", fontWeight: 600 }}>
            Welcome {localStorage.getItem("name")} !!
          </Typography>
        </Box>
      </Grid>
    </MainGrid>
  );
};

export default LandingPage;
