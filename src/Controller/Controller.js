import axios from "axios";

async function loginApi(
  navigate,
  userType,
  loginData,
  setError,
  setErrorMessage
) {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  function isValidEmail(email) {
    return emailRegex.test(email);
  }
  if (!isValidEmail(loginData.email) || loginData.password === "") {
    setError(true);
    setErrorMessage("email or password must be required");
  }
  else{

    try {
      const response = await axios.post(
        `http://localhost:8000/${userType}/sign-in`,
        loginData
      );
      navigate("/home");
      localStorage.setItem("token", response.data.data.token);
    } catch (error) {
      if(error?.response?.data?.message ==="please provide right email or password"){
        setError(true);
      setErrorMessage(error?.response?.data?.message);
      }
      else if( error?.response?.data?.message ==="Recruiter not found with the provided email"){
        setError(true);
      setErrorMessage(error?.response?.data?.message);
      }
      console.error("Error posting data:", error?.response?.data?.message);
    }
  }
}
export async function getProfile(userType, setUserData) {
  try {
    const response = await axios.get(
      `http://localhost:8000/${userType}/getProfile`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    if (response?.data?.data) {
      setUserData(response?.data?.data);
      localStorage.setItem("profile", response?.data?.data?.profile);
      localStorage.setItem("email", response?.data?.data?.email);
      localStorage.setItem("name", response?.data?.data?.name);
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
export async function SignUpApi(
  userType,
  candidateData,
  recruiterData,
  setOtpOpen,
  setError,
  setErrorMessage
) {
  let data = new FormData();

  if (userType === "candidate") {
    for (const key in candidateData) {
      data.append(key, candidateData[key]);
    }
  } else {
    for (const key in recruiterData) {
      data.append(key, recruiterData[key]);
    }
  }

  try {
    const response = await axios.post(
      `http://localhost:8000/${userType}/sign-up`,
      data
    );
    setOtpOpen(true);
  } catch (error) {
    setError(true);
    setErrorMessage(error.response.data.message);
  }
}
export async function OtpVerify(
  navigate,
  otp,
  userType,
  setError,
  setErrorMessage,
  email
) {
  try {
    const response = await axios.put(
      `http://localhost:8000/${userType}/otp-verify`,
      { otp, email }
    );
    navigate("/signIn");
  } catch (error) {
    setError(true);
    setErrorMessage(error?.response?.data?.error);
  }
}

export default loginApi;
