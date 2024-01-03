import { Avatar, Grid, Typography, Box } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getProfile, getJobData } from "../Controller/Controller";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router";
import { AppContext } from "../context/createContext";
const logo = require("../assests/logo.jpg");
const Header = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const context = useContext(AppContext);
  const NavItemCandidate = [
    { title: "Home", link: "/landingpage" },
    { title: "Jobs", link: "/jobs" },
    { title: "Company", link: "/company" },
    { title: "Applied Jobs", link: "/appliedJobs" },
  ];
  const NavItemRecruiter = [
    { title: "Home", link: "/landingpage" },
    { title: "Applications", link: "/applications" },
    { title: "Candidates", link: "/candidates" },
    { title: "Created Jobs", link: "/createdJobs" },
  ];
  useEffect(() => {
    getJobData(context.updateJobData);
    getProfile(userType, context.setUserData);
  }, [context.setUserData]);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutFn = () => {
    navigate("/");
    localStorage.clear();
    handleClose();
  };
  const handleProfileFn = () => {
    navigate("/profile");
    handleClose();
  };

  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
        position: "fixed",
        background: "rgb(221 203 227 / 52%)",
        padding: "3px",
        alignItems: "center",
      }}
    >
      <img src={logo} style={{ width: "60px", borderRadius: "50%" }} />

      {userType == "candidate" &&
        NavItemCandidate.map((item, index) => {
          return (
            <Typography
              key={index}
              style={{
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => {
                navigate(`${item.link}`);
              }}
            >
              {item.title}
            </Typography>
          );
        })}
      {userType == "recruiter" &&
        NavItemRecruiter.map((item) => {
          return (
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => {
                navigate(`${item.link}`);
              }}
            >
              {item.title}
            </Typography>
          );
        })}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            fontWeight: 600,
            paddingRight: "10px",
            borderRight: "2px solid black",
            color: "slategrey",
          }}
        >
          {" "}
          {context?.userData?.name}
        </Typography>
        <Button id="basic-button" aria-haspopup="true" onClick={handleClick}>
          <Avatar
            style={{ width: "50px", height: "50px", marginLeft: "10px" }}
            src={
              context?.userData?.profile
                ? context?.userData?.profile
                : "/broken-image.jpg"
            }
          />
          <ArrowDropDownIcon style={{ color: "black" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleProfileFn()}>Profile</MenuItem>
          <MenuItem onClick={() => handleLogoutFn()}>Logout</MenuItem>
        </Menu>
      </Box>
    </Grid>
  );
};

export default Header;
