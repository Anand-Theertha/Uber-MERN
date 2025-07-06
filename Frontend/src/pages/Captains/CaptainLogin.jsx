import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <button className="bg-black mb-2 text-white font-semibold w-full py-2 px-4 rounded">
            Login
          </button>

          <p className="text-center">
            Looking to join a fleet?&nbsp;
            <Link to="/captain-signup" className="text-blue-600 ">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="flex items-center justify-center mb-5 bg-[#d5622d] text-white font-semibold w-full py-2 px-4 rounded"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
