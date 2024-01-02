import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
const image = require("../assests/item.jpg");

const JobList = ({ data, handleApplyJob, apply }) => {
  return (
    <Grid style={{
            paddingBlock: "150px",

          }}>
      <Grid item style={styleList.detailsStyle}>
        {data &&
          data.map((item, index) => {
            return (
              <Card
                key={index}
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
                    Company name:{" "}
                    {item?.company_name
                      ? item?.company_name
                      : item?.jobData?.company_name}
                  </Typography>
                  <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Box style={{ display: "flex", paddingLeft: "10px" }}>
                      <Typography
                        style={{
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"Job_title : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.job_title
                          ? item?.job_title
                          : item?.jobData?.job_title}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"experience_required : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item.experience_required
                          ? item?.experience_required
                          : item?.jobData?.experience_required}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"working_hours : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.working_hours
                          ? item?.working_hours
                          : item?.jobData?.working_hours}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"total_application : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.total_application
                          ? item?.total_application
                          : item?.jobData?.total_application}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"location : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.location
                          ? item?.location
                          : item?.jobData?.location}
                      </Typography>
                    </Box>

                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"no_of_jobs : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.no_of_jobsitem
                          ? item.no_of_jobsitem
                          : item?.jobData?.no_of_jobsitem}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"workspace : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.workspace
                          ? item?.workspace
                          : item?.jobData?.workspace}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"job_type : "}
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "10px", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.job_type
                          ? item?.job_type
                          : item?.jobData?.job_type}
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", marginBottom: "10px" }}>
                      <Typography
                        style={{
                          paddingLeft: "10px",
                          marginBottom: "10px",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >
                        {"skills : "}
                      </Typography>
                      <Typography style={{ paddingLeft: "10px" }}>
                        {" "}
                        {item?.skills ? item?.skills : item?.jobData?.skills}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  {apply === true ? (
                    <Button
                      variant="contained"
                      style={{
                        background: "rgb(221 203 227 / 52%)",
                        color: "black",
                        width: "100%",
                      }}
                      onClick={() => {
                        handleApplyJob(item._id);
                      }}
                    >
                      Apply
                    </Button>
                  ) : (
                    <Typography style={{ fontSize: "16px", fontWeight: 700 }}>
                      Applied time : {item.applied_time}
                    </Typography>
                  )}{" "}
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
