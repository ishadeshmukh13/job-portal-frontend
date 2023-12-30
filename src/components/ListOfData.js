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

const ListOfData = ({ data ,page,handleChange,pagination}) => {

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
                <CardMedia sx={{ height: 140 }} image={item?.profile?item?.profile:image} />
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
                      <LocationOnIcon />
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.city}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", marginBottom: "10px" }}>
                      <ContactsIcon />
                      <Typography style={{ paddingLeft: "10px" }}>
                        {" "}
                        {item.mobile_no}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <EmailIcon />
                      <Typography style={{ paddingLeft: "10px" }}>
                        {" "}
                        {item.email}
                      </Typography>
                    </Box>

                    <Box></Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Typography
                    style={{
                      marginLeft: "10px",
                      color: "gray",
                      fontWeight: 500,
                    }}
                  >
                    created_at : {item.created_at}
                  </Typography>
                </CardActions>
              </Card>
            );
          })}
      </Grid>
     {pagination && <Box style={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Pagination
            page={page}
            count={data?.totalPages ? data.totalPages : 1}
            onChange={(event, value) => handleChange(value)}
            variant="outlined"
            color="secondary"
          />
        </Stack>
      </Box>}
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
