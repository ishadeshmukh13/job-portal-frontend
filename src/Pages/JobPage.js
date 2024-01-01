import React, { useContext, useEffect } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import { AppContext } from "../context/createContext";
import { getJobData } from "../Controller/Controller";
import JobList from "../components/AllJobLIst";
const JobPage = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    getJobData(context.updateJobData);
  }, []);
  const data = context.allJob;
  console.log(data,"datatata");
  return (
    <MainGrid>
      <Header />
      <JobList data={data}/>
    </MainGrid>
  );
};

export default JobPage;
