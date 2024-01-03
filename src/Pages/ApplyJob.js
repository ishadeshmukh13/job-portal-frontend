import React, { useContext, useEffect } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import JobList from "../components/AllJobLIst";
import { getApplyJobList } from "../Controller/Controller";
import { AppContext } from "../context/createContext";
import { Typography } from "@mui/material";

const ApplyJob = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    getApplyJobList(context.updateApplyJobData);
  }, []);
  const data = context.applyJobList;
  return (
    <MainGrid>
      <Header />
      {data && data.length > 0 ? (
        <JobList data={data}   padding="150px"/>
      ) : (
        <Typography
          style={{
            paddingBlock: "150px",
            fontSize: "25px",
            fontWeight: 700,
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          You have not applied for any job.
        </Typography>
      )}
    </MainGrid>
  );
};

export default ApplyJob;
