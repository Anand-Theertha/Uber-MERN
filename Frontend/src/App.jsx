import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserLogin from "./pages/Users/UserLogin";
import UserSignup from "./pages/Users/UserSignup";
import CaptainLogin from "./pages/Captains/CaptainLogin";
import CaptainSignup from "./pages/Captains/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
