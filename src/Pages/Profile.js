import React from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import { Typography, Box, Avatar } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
const ExperienceIcon = require("../assests/experienceIcon.png");
const SkillIcon = require("../assests/skillsIcon.webp");
const Profile = () => {
  return (
    <MainGrid>
      <Header />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={localStorage.getItem("profile")}
          style={{ width: "200px", height: "200px",
          marginTop: "20px",
         }}
        />
        <Box
          style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
        >
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                fontSize: "19px",
                fontWeight: 700,
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeIcon style={{ width: "50px", height: "50px" }} />
              Name{" "}
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {localStorage.getItem("name")}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              width: "250px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                fontSize: "19px",
                fontWeight: 700,
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <EmailIcon style={{ width: "50px", height: "50px" }} />
              Email{" "}
              <span
                style={{
                  marginTop: "10px",
                  wordBreak: "break-all",
                  fontSize: "17px",
                }}
              >
                {localStorage.getItem("email")}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "19px",
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CallIcon style={{ width: "50px", height: "50px" }} />
              Mobile no{" "}
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {localStorage.getItem("mobile_no")}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "19px",
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={SkillIcon} style={{ width: "50px", height: "50px" }} />
              Skills{" "}
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {localStorage.getItem("skills")}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "19px",
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={ExperienceIcon}
                style={{ width: "50px", height: "50px" }}
              />
              Experience{" "}
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {localStorage.getItem("experience")}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
            }}
          >
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "19px",
                fontWeight: 700,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PlaceIcon style={{ width: "50px", height: "50px" }} />
              city{" "}
              <span style={{ marginTop: "10px", fontSize: "17px" }}>
                {localStorage.getItem("city")}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainGrid>
  );
};

export default Profile;
