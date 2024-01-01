import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ResetPassword from "./Pages/ResetPassword";
import SignUpPage from "./Pages/SignUpPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShareContext from "./context/createContext";
import LandingPage from "./Pages/LandingPage";
import CompanyOrCandidateComponent from "./Pages/Company&Candidate";
import VerifyAccount from "./Pages/VerifyAccount";
import JobPage from "./Pages/JobPage";
import ApplyJob from "./Pages/ApplyJob";

function App() {
  return (
    <ShareContext>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/company" element={<CompanyOrCandidateComponent />} />
          <Route path="/appliedJobs" element={<ApplyJob />} />
          <Route path="/applications" element={<LandingPage />} />
          <Route path="/candidates" element={<LandingPage />} />
          <Route path="/createdJobs" element={<LandingPage />} />
          <Route path="/profile" element={<LandingPage />} />
          <Route path="/setting" element={<LandingPage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyaccount" element={<VerifyAccount />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ShareContext>
  );
}

export default App;
