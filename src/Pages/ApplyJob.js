import React, { useContext, useEffect } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import JobList from "../components/AllJobLIst";
import { getApplyJobList } from "../Controller/Controller";
import { AppContext } from "../context/createContext";

const ApplyJob = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    getApplyJobList(context.updateApplyJobData);
  }, []);
  const data = context.applyJobList;
  console.log(data);
  return (
    <MainGrid>
      <Header />
      {data && data.length > 0 && <JobList data={data} />}
    </MainGrid>
  );
};

export default ApplyJob;
