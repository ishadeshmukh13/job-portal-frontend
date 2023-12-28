import React from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import ListOfData from "../components/ListOfData";

const CompanyOrCandidateComponent = () => {
  const userType = localStorage.getItem("userType");
  return (
    <MainGrid>
      <Header />
      <ListOfData/>
    </MainGrid> 
  );
};

export default CompanyOrCandidateComponent;
