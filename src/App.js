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
import { useEffect, useState } from "react";
import ListOfData from "./components/ListOfData";
import CompanyOrCandidateComponent from "./Pages/Company&Candidate";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token !== null);
    setIsAuthenticated(token !== null);
  }, []);

  return (
    <ShareContext>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route
            path="/signIn"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/jobs"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/company"
            element= {<CompanyOrCandidateComponent /> }
          />
          <Route
            path="/appliedJobs"
            element={ <LandingPage /> }
          />
          <Route
            path="/applications"
            element={<LandingPage /> }
          />
          <Route
            path="/candidates"
            element={<LandingPage /> }
          />
          <Route
            path="/createdJobs"
            element={ <LandingPage />}
          />
          <Route
            path="/profile"
            element={ <LandingPage /> }
          />
          <Route
            path="/setting"
            element={ <LandingPage /> }
          />
          <Route
            path="/"
            element={isAuthenticated ? <LandingPage /> : <HomePage />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <LandingPage /> : <SignUpPage />}
          />
          <Route
            path="/resetPassword"
            element={isAuthenticated ? <LandingPage /> : <ResetPassword />}
          />
          {/* Default route for unknown paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ShareContext>
  );
}

export default App;
