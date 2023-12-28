import React, { useState } from "react";
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
const image = require("../assests/item.jpg");

const ListOfData = ({ heading, data }) => {
  const [page, setPage] = useState(1);
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
      <Grid style={{}}>
        <Grid item style={styleList.detailsStyle}>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography
                    style={{ paddingLeft: "10px", marginBottom: "10px" }}
                  >
                    {" "}
                    indore
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography style={{ paddingLeft: "10px" }}>
                    {" "}
                    1234567890
                  </Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <EmailIcon />
                  <Typography style={{ paddingLeft: "10px" }}>
                    {" "}
                    example@gmail.com
                  </Typography>
                </Box>

                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography
                style={{ marginLeft: "10px", color: "gray", fontWeight: 500 }}
              >
                created_at : {new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography style={{ paddingLeft: "10px" }}>
                    {" "}
                    {":"} 1234567890
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography> {":"} 1234567890</Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography> {":"} 1234567890</Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                {" "}
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography> {":"} 1234567890</Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography> {":"} 1234567890</Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ margin: "15px", padding: "10px" }}
          >
            <CardMedia sx={{ height: 140 }} image={image} />
            <CardContent>
              <Typography
                gutterBottom
                style={{ fontSize: "19px", fontWeight: 600 }}
                component="div"
              >
                Company name: {"Precious"}
              </Typography>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <ContactsIcon />
                  <Typography> {":"} 1234567890</Typography>
                </Box>
                <Box style={{ display: "flex", marginBottom: "10px" }}>
                  <EmailIcon />
                  <Typography> {":"} example@gmail.com</Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography> {":"} indore</Typography>
                </Box>
                <Box></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Typography style={{ marginLeft: "10px", color: "gray" }}>
                created_at :{new Date().toLocaleString()}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2}>
            <Pagination
              count={10}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />
          </Stack>
        </Box>
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

export default ListOfData;
