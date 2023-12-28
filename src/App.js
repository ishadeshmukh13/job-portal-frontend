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
            element={isAuthenticated ? <CompanyOrCandidateComponent /> : <LoginPage />}
          />
          <Route
            path="/appliedJobs"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/applications"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/candidates"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/createdJobs"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/setting"
            element={isAuthenticated ? <LandingPage /> : <LoginPage />}
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
