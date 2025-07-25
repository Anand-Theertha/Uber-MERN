import { Link } from "react-router-dom";
import CarImage from "../../assets/Uber-Car.png";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"
      >
        <i className=" text-lg font-medium ri-home-5-fill"></i>
      </Link>

      <div className="h-1/2">
        <div className="h-full w-full bg-red-300"></div>
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-20" src={CarImage} />
          <div className="text-right">
            <h2 className="text-lg font-medium ">Sarthak</h2>
            <h4 className="text-lg font-semibold -mt-1 -mb-1">KA 01 JP 1999</h4>
            <p className="text-sm text-gray-600">Swift DZire</p>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between gap-2">
          <div className="w-full mt-5">
            {/* <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
              <i className="ri-map-pin-user-fill "></i>
              <div>
                <h3 className="text-lg font-medium ">258</h3>
                <p className="text-sm -mt-1 text-gray-600">Avenue New York</p>
              </div>
            </div> */}
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
              <i className="ri-checkbox-blank-fill"></i>
              <div>
                <h3 className="text-lg font-medium ">258</h3>
                <p className="text-sm -mt-1 text-gray-600">Avenue New York</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-wallet-fill "></i>
              <div>
                <h3 className="text-lg font-medium ">$20.00</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-xl">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
