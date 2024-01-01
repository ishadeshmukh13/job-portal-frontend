import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Box, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import  { ResentOtp,OtpVerify } from "../Controller/Controller";
const candidate = require("../assests/candidate.jpeg");
const recruiter = require("../assests/recruiter.jpg");
const wallpaper = require("../assests/wallpaper.webp");
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
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
    background: "rgb(227 203 204 / 82%)",
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
const VerifyAccount = () => {
  const [error, setError] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [otp,setOtp]=useState("");
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const handleClick = () => {
    ResentOtp(email, setOtpOpen,setError, setErrorMessage);
  };
  const handleError = () => {
    setError(false);
  };
  const handleClose = () => {
    setOtpOpen(false);
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

          <TextFieldStyle
            style={LoginStyle.inputStyle}
            id="email"
            placeholder="Enter your email"
            type="text"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <Button
            variant="contained"
            style={{
              background: "#2F3C7E",
              width: "250px",
              height: "40px",
              fontSize: "20px",
              textTransform: "unset",
              marginTop: "30px",
              marginBottom: "10px",
            }}
            onClick={handleClick}
          >
            Verify Account
          </Button>
          <Typography style={{ fontSize: "18px", fontWeight: 500 }}>
            or
          </Typography>
          <Button
            variant="contained"
            style={{
              background: "#2F3C7E",
              width: "150px",
              height: "40px",
              fontSize: "20px",
              textTransform: "unset",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onClick={() => {
              navigate("/signIn");
            }}
          >
            Sign In
          </Button>
        </LoginForm>
      </Box>
      <Dialog onClose={handleClose} open={otpOpen}>
        <DialogTitle style={{ textAlign: "center" }}>
          OTP verification
        </DialogTitle>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextFieldStyle
            style={LoginStyle.otpStyle}
            id="otp"
            placeholder="Enter OTP"
            type="text"
            variant="standard"
            onChange={(e)=>{
                setOtp(e.target.value)
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              OtpVerify(navigate, otp, userType, setError, setErrorMessage,email);
            }}
            style={{
              background: "#2F3C7E",
              width: "150px",
              height: "40px",
              fontSize: "20px",
              textTransform: "unset",
              marginBottom: "10px",
            }}
          >
            Verify
          </Button>
        </Box>
      </Dialog>
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

export default VerifyAccount;
