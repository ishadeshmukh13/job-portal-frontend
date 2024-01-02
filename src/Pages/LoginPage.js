import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Box, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import loginApi from "../Controller/Controller";
const candidate = require("../assests/candidate.jpeg");
const recruiter = require("../assests/recruiter.jpg");
const wallpaper = require("../assests/wallpaper.webp");

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export const TextFieldStyle = styled(TextField)({
  "& .css-v4u5dn-MuiInputBase-root-MuiInput-root": {
    fontSize: "20px",
    fontWeight: 700,
  },
});
export const LoginForm = styled(Box)({
  backgroundColor: "rgb(221 203 227 / 52%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "500px",
  borderRadius: "8px",
  paddingBottom: "20px",
  "&:hover": {
    "& .avatarStyle": {
      backgroundColor: "#2F3C7E",
    },
  },
});
export const AvatarStyle = styled(Avatar)({
  width: "100px",
  height: "100px",
  marginTop: "20px",
  background: "rgb(173 175 183 / 55%)",
  "&:hover": {
    backgroundColor: "#2F3C7E",
  },
});
const LoginPage = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const handleClick = () => {
    loginApi(navigate, userType, loginData,setError,setErrorMessage);
  };
  const handleError = () => {
    setError(false);
  };
  return (
    <Grid style={LoginStyle.mainBox} container>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleError}
          severity="error"
        >
          {errorMessage}
        </MuiAlert>
      </Snackbar>
      <Box style={LoginStyle.secondBox}>
        <LoginForm>
          <AvatarStyle className="avatarStyle" src="/broken-image.jpg" />
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            user_type : {userType}
          </Typography>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "20px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Don't have an account? SignUp
          </Typography>
          <TextFieldStyle
            style={LoginStyle.inputStyle}
            id="email"
            placeholder="Enter your email"
            type="text"
            variant="standard"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStylePassword}
            id="password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
          <Button
            variant="contained"
            style={{
              background: "#2F3C7E",
              width: "150px",
              height: "40px",
              fontSize: "20px",
              textTransform: "unset",
              marginTop: "30px",
              marginBottom: "10px",
            }}
            onClick={handleClick}
          >
            Login
          </Button>
          <Typography
            style={{
              fontWeight: 500,
              fontSize: "17px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/resetPassword");
            }}
          >
            Forgot password?
          </Typography>
        </LoginForm>
      </Box>
    </Grid>
  );
};

export const LoginStyle = {
  secondBox: {
    width: " 100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox: {
    position: "relative",
    overflowY: "auto",
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "inherit",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Carattere', cursive",
    fontFamily: "'Sevillana', cursive",
    top: 0,
    maxWidth: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  mainGrid: {
    fontFamily: "'Carattere', cursive",
    fontFamily: "'Sevillana', cursive",
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    marginRight: "20px",
    marginBottom: "20px",
    backgroundImage: `url(${candidate})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  },
  imageStyle2: {
    marginBottom: "20px",
    backgroundImage: `url(${recruiter})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  },

  mainAvatar: {
    marginTop: "20px",
    marginBottom: "10px",
    fontWeight: 700,
    fontSize: "32px",
    borderBottom: "1px solid black",
    width: "100%",
    textAlign: "center",
  },
  inputStyle: {
    marginBlock: "20px",
    width: "90%",
    padding: "20px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  inputStyle2: {
    marginBlock: "20px",
    width: "90%",
    marginLeft: "30px",
    marginRight: "30px",
  },
  otpStyle: {
    marginBottom: "20px",
    width: "50%",
  },
  inputStylePassword: {
    width: "90%",
    padding: "20px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  homepageStyle: {
    fontFamily: "'Carattere', cursive",
    fontSize: "36px",
    fontWeight: 700,
  },
};

export default LoginPage;
