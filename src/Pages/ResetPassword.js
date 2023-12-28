import React,{useContext} from "react";
import Grid from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import {
  LoginStyle,
  LoginForm,
  TextFieldStyle,
  AvatarStyle,
} from "./LoginPage.js";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  return (
    <Grid style={LoginStyle.mainBox} container>
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
          />

          <Button
            variant="contained"
            style={{
              background: "#2F3C7E",
              width: "200px",
              height: "40px",
              fontSize: "20px",
              textTransform: "unset",
              marginBottom: "10px",
            }}
          >
            Reset Password
          </Button>

          <Typography
            style={{
              fontWeight: 500,
              fontSize: "17px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/signIn");
            }}
          >
            Remember password?
          </Typography>
        </LoginForm>
      </Box>
    </Grid>
  );
};

export default ResetPassword;
