import { createContext } from "react";
export const AppContext = createContext();
import { useState } from "react";
const ShareContext = (props) => {
  const [userType, setUserType] = useState("");
  const updateUserType = (type) => {
    localStorage.setItem("userType",type)
   setUserType(type)
  };
  return (
    <AppContext.Provider value={{ userType, updateUserType }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ShareContext;