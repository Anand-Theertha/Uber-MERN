import CarImage from "../assets/Uber-Car.png";

const WaitingForDriver = ({ waitingForDriverPanelOpen }) => {
  return (
    <div>
      <h5
        onClick={() => waitingForDriverPanelOpen(false)}
        className="px-2 text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

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
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-user-fill "></i>
            <div>
              <h3 className="text-lg font-medium ">258</h3>
              <p className="text-sm -mt-1 text-gray-600">Avenue New York</p>
            </div>
          </div>
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
    </div>
  );
};

export default WaitingForDriver;
