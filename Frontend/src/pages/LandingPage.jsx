import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div
        className="h-screen pt-8 w-full flex justify-between flex-col"
        style={{
          backgroundImage: `url('/src/assets/HomeBanner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <div className="bg-white pb-7 py-5 px-4 rounded-t-3xl">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
