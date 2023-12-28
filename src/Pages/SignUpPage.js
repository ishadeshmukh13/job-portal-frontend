import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  LoginStyle,
  LoginForm,
  TextFieldStyle,
  AvatarStyle,
} from "./LoginPage.js";
import { useNavigate } from "react-router-dom";
import { OtpVerify, SignUpApi } from "../Controller/Controller.js";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SignUpPage = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const [otpOpen, setOtpOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setotp] = useState("");
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    mobile_no: "",
    skills: "",
    experience: "",
    city: "",
    profile: null,
  });
  const [recruiterData, setRecruiterData] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
    mobile_no: "",
    company_name: "",
    city: "",
    profile: null,
  });
  const handleClose = () => {
    setOtpOpen(false);
  };
  const handleError = () => {
    setError(false);
  };
  const handleSignUp = () => {
    SignUpApi(
      navigate,
      userType,
      candidateData,
      recruiterData,
      setOtpOpen,
      setError,
      setErrorMessage
    );
  };
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setCandidateData({ ...candidateData, profile: file });
    setRecruiterData({ ...recruiterData, profile: file });
  };
  const handleOtp = (e) => {
    if (e.target.value.length<6) {
      setError(true);
      setErrorMessage("OTP is only 6 digit");
    } 
    setotp(e.target.value)
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
        <LoginForm style={LoginStyle.smallBoxGrid}>
          <AvatarStyle src="/broken-image.jpg" className="avatarStyle" />
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
              navigate("/signIn");
            }}
          >
            You have an account? SignIn
          </Typography>
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="name"
            placeholder="Enter your name"
            type="text"
            variant="standard"
            onChange={(e) => {
              setCandidateData({ ...candidateData, name: e.target.value });
              setRecruiterData({ ...recruiterData, name: e.target.value });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="email"
            placeholder="Enter your email"
            type="text"
            variant="standard"
            onChange={(e) => {
              setCandidateData({ ...candidateData, email: e.target.value });
              setRecruiterData({ ...recruiterData, email: e.target.value });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="password"
            placeholder="Enter your password"
            type="password"
            variant="standard"
            onChange={(e) => {
              setCandidateData({ ...candidateData, password: e.target.value });
              setRecruiterData({ ...recruiterData, password: e.target.value });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="password"
            placeholder="Re-enter your password"
            type="password"
            variant="standard"
            onChange={(e) => {
              setCandidateData({
                ...candidateData,
                reEnterPassword: e.target.value,
              });
              setRecruiterData({
                ...recruiterData,
                reEnterPassword: e.target.value,
              });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="mobile_no"
            placeholder="Enter your mobile no."
            type="text"
            variant="standard"
            onChange={(e) => {
              setCandidateData({ ...candidateData, mobile_no: e.target.value });
              setRecruiterData({ ...recruiterData, mobile_no: e.target.value });
            }}
          />
          {userType === "candidate" ? (
            <>
              <TextFieldStyle
                style={LoginStyle.inputStyle2}
                id="skill"
                placeholder="Enter your skills"
                type="text"
                variant="standard"
                onChange={(e) => {
                  setCandidateData({
                    ...candidateData,
                    skills: e.target.value,
                  });
                }}
              />

              <TextFieldStyle
                style={LoginStyle.inputStyle2}
                id="experience"
                placeholder="Enter your experience"
                type="text"
                variant="standard"
                onChange={(e) => {
                  setCandidateData({
                    ...candidateData,
                    experience: e.target.value,
                  });
                }}
              />
            </>
          ) : (
            <TextFieldStyle
              style={LoginStyle.inputStyle2}
              id="city"
              placeholder="Enter your company name"
              type="text"
              variant="standard"
              onChange={(e) => {
                setRecruiterData({
                  ...recruiterData,
                  company_name: e.target.value,
                });
              }}
            />
          )}
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="city"
            placeholder="Enter your city name"
            type="text"
            variant="standard"
            onChange={(e) => {
              setCandidateData({ ...candidateData, city: e.target.value });
              setRecruiterData({ ...recruiterData, city: e.target.value });
            }}
          />
          <TextFieldStyle
            style={LoginStyle.inputStyle2}
            id="profile"
            type="file"
            variant="standard"
            onChange={(e) => {
              handleProfileChange(e);
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
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign Up
          </Button>
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
                onChange={handleOtp}
              />
              <Button
                variant="contained"
                onClick={()=>{
      OtpVerify(navigate,otp, userType, setError, setErrorMessage,candidateData.email);
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
                Submit
              </Button>
            </Box>
          </Dialog>
        </LoginForm>
      </Box>
    </Grid>
  );
};

export default SignUpPage;
