import React, { useContext, useEffect, useState } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import { AppContext } from "../context/createContext";
import { getJobData, getApplyJob } from "../Controller/Controller";
import JobList from "../components/AllJobLIst";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const JobPage = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    getJobData(context.updateJobData);
  }, []);
  const [otpPopUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setPopUp(false);
  };

  const handleApplyJob = (job_id) => {
    getApplyJob(job_id, setPopUp, setMessage);
  };
  const data = context.allJob;
  return (
    <MainGrid>
      <Header />

      <Snackbar
        open={otpPopUp}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="info"
        >
          {message}
        </MuiAlert>
      </Snackbar>
      <JobList data={data} handleApplyJob={handleApplyJob} apply={true}   padding="150px"/>
    </MainGrid>
  );
};

export default JobPage;
