import { createContext } from "react";
export const AppContext = createContext();
import { useState } from "react";
const ShareContext = (props) => {
  const [userType, setUserType] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const [allJob, setAllJob] = useState([]);
  const [applyJobList, setApplyJobList] = useState([]);
  const updateUserType = (type) => {
    localStorage.setItem("userType",type)
   setUserType(type)
  };
  const updateCompany=(data)=>{
    setCompanyData(data)
  }
  const updateJobData=(data)=>{
    setAllJob(data)
  }
  const updateApplyJobData=(data)=>{
    setApplyJobList(data)
  }
  return (
    <AppContext.Provider value={{ userType, updateUserType ,companyData,updateCompany,updateJobData,allJob,updateApplyJobData,applyJobList}}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ShareContext;