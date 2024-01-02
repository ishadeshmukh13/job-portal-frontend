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
  } else {
    try {
      const response = await axios.post(
        `http://localhost:8800/${userType}/sign-in`,
        loginData
      );
      navigate("/landingpage");
      localStorage.setItem("token", response.data.data.token);
    } catch (error) {
      if (
        error?.response?.data?.message ===
        "please provide right email or password"
      ) {
        setError(true);
        setErrorMessage(error?.response?.data?.message);
      } else if (
        error?.response?.data?.message ===
        "Recruiter not found with the provided email"
      ) {
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
      `http://localhost:8800/${userType}/getProfile`,
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
      localStorage.setItem("mobile_no", response?.data?.data?.mobile_no);
      localStorage.setItem("skills", response?.data?.data?.skills); 
      localStorage.setItem("experience", response?.data?.data?.experience); 
      localStorage.setItem("city", response?.data?.data?.city); 
      
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function SignUpApi(
  candidateData,
  recruiterData,
  setOtpOpen,
  setError,
  setErrorMessage
) {
  let data = new FormData();
  if (localStorage.getItem("userType") == "candidate") {
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
      `http://localhost:8800/${localStorage.getItem("userType")}/sign-up`,
      data
    );
    if (
      response?.data?.message ===
      "email already exits please verify your email and you can't create account using this email "
    ) {
      setError(true);
      setErrorMessage(response?.data?.message);
    } else {
      setOtpOpen(true);
    }
  } catch (error) {
    console.log(error, "errorrrrrrrrrrrrrrrrrrrr");
    setError(true);
    if (error?.response?.data?.error) {
      setErrorMessage(error.response.data.error);
    } else {
      setErrorMessage(error.response.data.message);
    }
  }
}

export async function ResentOtp(email, setOtpOpen, setError, setErrorMessage) {
  try {
    const response = await axios.put(
      `http://localhost:8800/${localStorage.getItem("userType")}/resend-otp`,
      { email: email }
    );
    if (response.data.message == "OTP resent successfully in your email") {
      setOtpOpen(true);
    }
  } catch (error) {
    setError(true);
    if (error?.response?.data?.error) {
      setErrorMessage(error.response.data.error);
    } else {
      setErrorMessage(error.response.data.message);
    }
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
      `http://localhost:8800/${userType}/otp-verify`,
      { otp, email }
    );
    navigate("/signIn");
  } catch (error) {
    setError(true);
    setErrorMessage(error?.response?.data?.error);
  }
}

export async function getDataCompanyList(updateCompany, page) {
  try {
    const response = await axios.get(
      `http://localhost:8800/${localStorage.getItem(
        "userType"
      )}/recruiter-list?page=${page}&limit=${5}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response, "controller");
    if (response?.data?.data) {
      updateCompany(response?.data?.data);
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function getJobData(updateJobData) {
  try {
    const response = await axios.get(
      `http://localhost:8800/${localStorage.getItem("userType")}/job-list`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response, "controller");
    if (response?.data?.data) {
      updateJobData(response?.data?.data);
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function getApplyJob(job_id,setPopUp,setMessage) {
  try {
    const response = await axios.post(
      `http://localhost:8800/${localStorage.getItem("userType")}/apply-job`,
      {
        job_id: job_id,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    setPopUp(true)
    setMessage(response?.data?.message)
    console.log(response, "controller");
  
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

export async function getApplyJobList(updateJobData) {
  try {
    const response = await axios.get(
      `http://localhost:8800/${localStorage.getItem("userType")}/apply-job-list`,
     
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
  updateJobData(response?.data?.data)
  
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
export default loginApi;
