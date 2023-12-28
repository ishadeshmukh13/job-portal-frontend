import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { LoginStyle, AvatarStyle } from "./LoginPage";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/createContext";

const ImageBox = styled(Box)({
  backgroundColor: "#54718b69",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "400px",
  height: "250px",
  borderRadius: "8px",
  paddingBottom: "20px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#7b548b59",
    boxShadow: "0px 0px 10px 10px #6b548b30",
    "& .avatarStyle": {
      backgroundColor: "#2F3C7E",
    },
  },
});
const HomePage = () => {
  const contextData = useContext(AppContext);
  const navigate = useNavigate();
  const data = [
    { title: "I'm ready to", title1: "Get To Work", userType: "candidate" },
    {
      title: "I'm ready to",
      title1: "Hire Quality Candidates",
      userType: "recruiter",
    },
  ];
  const handleUserType = (userType) => {
    contextData.updateUserType(userType);
    navigate("/signIn");
  };

  return (
    <Grid style={{ ...LoginStyle.mainBox, background: "white" }} container>
      <Grid style={LoginStyle.mainGrid} container>
        {data.map((itemi, index) => {
          return (
            <Grid
              item  
              style={
                index === 1
                  ? { ...LoginStyle.imageStyle2 }
                  : { ...LoginStyle.imageStyle }
              }
              key={index}
            >
              <ImageBox
                onClick={() => {
                  handleUserType(itemi.userType);
                }}
              >
                <AvatarStyle className="avatarStyle" src="/broken-image.jpg" />
                <Typography style={LoginStyle.homepageStyle}>
                  {itemi.title}
                </Typography>
                <Typography style={LoginStyle.homepageStyle}>
                  {itemi.title1}
                </Typography>
              </ImageBox>
            </Grid>
          );
        })}
      </Grid>
    
    </Grid>
  );
};

export default HomePage;
