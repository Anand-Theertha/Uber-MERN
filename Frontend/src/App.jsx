import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Main/LandingPage";
import UserLogin from "./pages/Users/UserLogin";
import UserSignup from "./pages/Users/UserSignup";
import CaptainLogin from "./pages/Captains/CaptainLogin";
import CaptainSignup from "./pages/Captains/CaptainSignup";
import Home from "./pages/Main/Home";
import UserProtectWrapper from "./pages/ProtectWrappers/UserProtectWrapper";
import UserLogout from "./pages/Users/UserLogout";
import CaptainHome from "./pages/Captains/CaptainHome";
import CaptainProtectWrapper from "./pages/ProtectWrappers/CaptainProtectWrapper";

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
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />

        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
