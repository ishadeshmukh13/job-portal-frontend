import React, { useState, useEffect, useContext } from "react";
import { MainGrid } from "../Pages/LandingPage.js";
import Header from "./Header.js";
import { Typography, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import { AppContext } from "../context/createContext.js";
const image = require("../assests/item.jpg");

const JobList = ({ data }) => {
  return (
    <Grid style={{}}>
      <Grid item style={styleList.detailsStyle}>
        {data &&
          data.map((item, index) => {
            return (
              <Card
                sx={{ maxWidth: 345 }}
                style={{ margin: "15px", padding: "10px" }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={item?.profile ? item?.profile : image}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    style={{ fontSize: "19px", fontWeight: 600 }}
                    component="div"
                  >
                    Company name: {item.company_name}
                  </Typography>
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"Job_title : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.job_title}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"experience_required : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.experience_required}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"working_hours : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.working_hours}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"total_application : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.total_application}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"location : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.location}
                      </Typography>
                    </Box>

                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"no_of_jobs : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.no_of_jobs}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"workspace : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.workspace}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"job_type : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.job_type}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", marginBottom: "10px" }}>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {"skills : "}
                      </Typography>
                      <Typography style={{ paddingLeft: "10px" }}>
                        {" "}
                        {item.skills}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    style={{
                      background: "rgb(221 203 227 / 52%)",
                      color: "black",
                      width:"100%"
                    }}
                  >
                    Apply
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </Grid>
    </Grid>
  );
};

const styleList = {
  detailsStyle: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatartStyle: {
    width: "80px",
    height: "80px",
  },
};

export default JobList;
