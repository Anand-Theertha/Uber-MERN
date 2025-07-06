import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: { firstName: firstName, lastName: lastName },
      email: email,
      password: password,
    };
    setUserData(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="w-full flex justify-between gap-2 mb-6">
            <input
              className="bg-[#EEEEEE] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#EEEEEE] w-1/2 rounded px-4 py-2  text-base placeholder:text-sm"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#EEEEEE] mb-6 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#EEEEEE] mb-10 rounded px-4 py-2 w-full text-base placeholder:text-sm"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button className="bg-black mb-2 text-white font-semibold w-full py-2 px-4 rounded">
            Sign Up
          </button>

          <p className="text-center">
            Already have an account?&nbsp;
            <Link to="/captain-login" className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-xs text-center text-gray-600">
          By clicking "Login", you agree to our{" "}
          <p className="text-blue-600 inline">Terms of Service</p> and{" "}
          <p className="text-blue-600 inline">Privacy Policy</p>. You also
          consent to receiving marketing messages from us and can opt out at any
          time.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
