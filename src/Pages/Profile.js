import React, { useState, useRef, useContext } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import {
  Typography,
  Box,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const ExperienceIcon = require("../assests/experienceIcon.png");
const SkillIcon = require("../assests/skillsIcon.webp");

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getProfile, updateProfile } from "../Controller/Controller";
import { AppContext } from "../context/createContext";
const Profile = () => {
  const context = useContext(AppContext);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    console.log(e.target.files[0], typeof userData.profile);
    setUserData({ ...userData, profile: e.target.files[0] });
    changeProfile(e.target.files[0] )
   
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const changeProfile=(profile)=>{
    updateProfile(false,profile);
    getProfile(localStorage.getItem("userType"), context.setUserData);
  }
  const removeProfile = () => {
    setUserData({
      ...userData.city,
      profileRemove: true,
      profile: "",
    });
    updateProfile(true, userData.profile);
    getProfile(localStorage.getItem("userType"), context.setUserData);
  };
  const [userData, setUserData] = useState({
    profile: localStorage.getItem("profile"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    mobile_no: localStorage.getItem("mobile_no"),
    skills: localStorage.getItem("skills"),
    experience: localStorage.getItem("experience"),
    city: localStorage.getItem("city"),
    profileRemove: false,
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainGrid>
      <Header />
      <Box
        style={{
          paddingBlock: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={localStorage.getItem("profile")}
          style={{ width: "200px", height: "200px", marginTop: "20px" }}
        />
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
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
              padding: "10px",
              margin: "10px",
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
              width: "200px",
              height: "200px",
              background: "rgb(221 203 227 / 52%)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginInline: "10px",
              borderRadius: "10px",
              border: "0.1px solid",
              padding: "10px",
              margin: "10px",
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
              margin: "10px",

              padding: "10px",
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
              margin: "10px",

              padding: "10px",
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
              margin: "10px",

              padding: "10px",
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
              margin: "10px",

              padding: "10px",
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
        <Box>
          <Button
            variant="contained"
            style={{
              background: "rgb(221 203 227 / 52%)",
              color: "black",
              width: "120px",
              fontSize: "17px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Edit
            <ModeEditIcon style={{ marginLeft: "5px" }} />
          </Button>
        </Box>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Edit Profile</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              style={{ width: "100px", height: "100px" }}
              src={
                typeof userData.profile === "string"
                  ? userData.profile
                  : userData.profile
                  ? URL.createObjectURL(userData.profile)
                  : ""
              }
            />
            <Box>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <Button
                variant="contained"
                style={{
                  background: "rgb(221 203 227 / 52%)",
                  color: "black",
                  fontSize: "17px",
                  fontWeight: "700",
                  marginRight: "20px",
                  marginBlock: "20px",
                  textTransform: "capitalize",
                }}
                onClick={handleClick}
              >
                Change Profile
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "rgb(221 203 227 / 52%)",
                  color: "black",
                  fontSize: "17px",
                  fontWeight: "700",
                  marginBlock: "20px",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  removeProfile();
                }}
              >
                remove profile
              </Button>
            </Box>
          </Box>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} style={{ padding: "20px" }}>
              <Typography>Name</Typography>
              <TextField
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
              <Typography>Email</Typography>
              <TextField
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.email}
              />
              <Typography>Mobile No</Typography>
              <TextField
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.mobile_no}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: "20px" }}>
              <Typography>Skills</Typography>
              <TextField
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.skills}
                onChange={(e) => {
                  setUserData({ ...userData, skills: e.target.value });
                }}
              />
              <Typography>Experience</Typography>
              <TextField
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.experience}
                onChange={(e) => {
                  setUserData({ ...userData, experience: e.target.value });
                }}
              />
              <Typography>City</Typography>
              <TextField
                variant="standard"
                style={{ marginBottom: "20px" }}
                value={userData.city}
                onChange={(e) => {
                  setUserData({ ...userData, city: e.target.value });
                }}
              />
            </Grid>
            <Button
              variant="contained"
              style={{
                background: "rgb(221 203 227 / 52%)",
                color: "black",
                width: "120px",
                fontSize: "17px",
                fontWeight: "700",
                marginBottom: "20px",
                textTransform: "capitalize",
              }}
            >
              save
            </Button>
          </Grid>
        </Dialog>
      </Box>
    </MainGrid>
  );
};

export default Profile;
