import React, { useContext, useEffect,useState } from "react";
import { MainGrid } from "./LandingPage";
import Header from "../components/Header";
import ListOfData from "../components/ListOfData";
import { AppContext } from "../context/createContext";
import { getDataCompanyList } from "../Controller/Controller";
const CompanyOrCandidateComponent = () => {
  const context = useContext(AppContext);
  const [page, setPage] = useState(1);
  const userType=localStorage.getItem("userType")
  const handleChange = (value) => {
    setPage(value);
    userType=="candidate"?
    getDataCompanyList(context.updateCompany,value)
    :
    getDataCompanyList(context.updateCompany,value)
  };
  useEffect(() => {
    getDataCompanyList(context.updateCompany,page);
  }, []);
  const data = context.companyData;
  return (
    <MainGrid>
      <Header />
      {data?.data?.length>0 && <ListOfData data={data?.data} page={page} handleChange={handleChange} pagination={true} />}
    </MainGrid>
  );
};

export default CompanyOrCandidateComponent;
