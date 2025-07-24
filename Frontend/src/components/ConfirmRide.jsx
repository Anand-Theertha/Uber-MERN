import CarImage from "../assets/Uber-Car.png";

const ConfirmRide = ({ setConfirmRidePanelOpen }) => {
  return (
    <div>
      <h5
        onClick={() => setConfirmRidePanelOpen(false)}
        className="px-2 text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex items-center flex-col justify-between gap-2">
        <img className="h-30" src={CarImage} />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium ">258</h3>
              <p className="text-sm -mt-1 text-gray-600">Avenue New York</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium ">258</h3>
              <p className="text-sm -mt-1 text-gray-600">Avenue New York</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium ">$20.00</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-xl">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
