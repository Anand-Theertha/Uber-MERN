import CarImage from "../assets/Uber-Car.png";
import AutoImage from "../assets/Uber-Auto.png";
import BikeImage from "../assets/Uber-Bike.png";

const VehiclePanel = ({
  setVehiclePanelOpen,
  selectedVehicle,
  setConfirmRidePanelOpen,
  setSelectedVehicle,
}) => {
  return (
    <div>
      <h5
        onClick={() => setVehiclePanelOpen(false)}
        className="px-2 text-center"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        className={`flex w-full border-2 mb-2 rounded-xl p-3 items-center justify-between cursor-pointer ${
          selectedVehicle === "car" ? "border-black" : "border-gray-200"
        }`}
        onClick={() => {
          setSelectedVehicle("car");
          setConfirmRidePanelOpen(true);
        }}
      >
        <img className="h-15 w-fit" src={CarImage} />
        <div className="w-1/2">
          <h4 className="font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>{" "}
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">$19.00</h2>
      </div>

      <div
        className={`flex w-full border-2 mb-2 rounded-xl p-3 items-center justify-between cursor-pointer ${
          selectedVehicle === "bike" ? "border-black" : "border-gray-200"
        }`}
        onClick={() => {
          setSelectedVehicle("bike");
          setConfirmRidePanelOpen(true);
        }}
      >
        <img className="h-15 w-fit" src={BikeImage} />
        <div className="w-1/2 ml-3">
          <h4 className="font-medium">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill  ">1</i>
            </span>{" "}
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">$13.60</h2>
      </div>

      <div
        className={`flex w-full border-2 mb-2 rounded-xl p-3 items-center justify-between cursor-pointer ${
          selectedVehicle === "auto" ? "border-black" : "border-gray-200"
        }`}
        onClick={() => {
          setSelectedVehicle("auto");
          setConfirmRidePanelOpen(true);
        }}
      >
        <img className="h-15 w-fit" src={AutoImage} />
        <div className="w-1/2 ml-3">
          <h4 className="font-medium">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill  ">1</i>
            </span>{" "}
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="text-xs text-gray-600">Affordable auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">$15.80</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
