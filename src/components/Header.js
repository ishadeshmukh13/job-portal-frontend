import { Avatar, Grid, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getProfile } from "../Controller/Controller";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router";
const logo = require("../assests/logo.jpg");
const Header = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const NavItemCandidate = [
    { title: "Home", link: "/home" },
    { title: "Jobs", link: "/jobs" },
    { title: "Company", link: "/company" },
    { title: "Applied Jobs", link: "/appliedJobs" },
  ];
  const NavItemRecruiter = [
    { title: "Home", link: "/home" },
    { title: "Applications", link: "/applications" },
    { title: "Candidates", link: "/candidates" },
    { title: "Created Jobs", link: "/createdJobs" },
  ];
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getProfile(userType, setUserData);
  }, []);
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
  const handleSettingsFn = () => {
    navigate("/setting");
    handleClose();
  };
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
        position: "sticky",
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
                navigate(`/${item.link}`);
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
          {userData?.name}
        </Typography>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            style={{ width: "50px", height: "50px", paddingLeft: "10px" }}
            src={userData?.profile ? userData?.profile : "/broken-image.jpg"}
          />
          <ArrowDropDownIcon style={{ color: "white" }} />
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
          <MenuItem onClick={() => handleSettingsFn()}>setting</MenuItem>
          <MenuItem onClick={() => handleLogoutFn()}>Logout</MenuItem>
        </Menu>
      </Box>
    </Grid>
  );
};

export default Header;
