import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import SignupPage from "./routes/SignupPage";
import MentorHomePage from "./routes/MentorHomePage";
import TraineeHomePage from "./routes/TraineeHomePage";
import AdminHomePage from "./routes/AdminHomePage";
import AdminSignupPage from "./routes/AdminSignupPage";
import TraineeSignupPage from "./routes/TraineeSignupPage";
import MentorSignupPage from "./routes/MentorSignupPage";
import SignupSuccessPage from "./routes/SignupSuccessPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/login/:id" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/signup/mentor" element={<MentorSignupPage />} />
          <Route exact path="/signup/trainee" element={<TraineeSignupPage />} />
          <Route exact path="/signup/admin" element={<AdminSignupPage />} />

          <Route exact path="/mentor_home" element={<MentorHomePage />} />
          <Route exact path="/trainee_home" element={<TraineeHomePage />} />
          <Route exact path="/admin_home" element={<AdminHomePage />} />
          <Route  path="/signup_success" element={<SignupSuccessPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
