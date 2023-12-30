import { createContext } from "react";
export const AppContext = createContext();
import { useState } from "react";
const ShareContext = (props) => {
  const [userType, setUserType] = useState("");
  const [companyData, setCompanyData] = useState([]);
  const updateUserType = (type) => {
    localStorage.setItem("userType",type)
   setUserType(type)
  };
  const updateCompany=(data)=>{
    setCompanyData(data)
  }
  return (
    <AppContext.Provider value={{ userType, updateUserType ,companyData,updateCompany}}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ShareContext;