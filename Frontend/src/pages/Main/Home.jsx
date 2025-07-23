import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import CarImage from "../../assets/Uber-Car.png";
import AutoImage from "../../assets/Uber-Auto.png";
import BikeImage from "../../assets/Uber-Bike.png";
import LocationSearchPanel from "../../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: panelOpen ? "70%" : "0%",
        padding: panelOpen ? "24px" : "0px",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0px",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (vehiclePanelOpen == true) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5 mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      {/* Google Map Section */}
      <div className="h-screen w-screen bg-red-300"></div>

      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 top-6 right-6 text-2xl"
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold ">Find a trip</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#EEEEEE] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input
              className="bg-[#EEEEEE] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[70%] bg-white">
          <LocationSearchPanel
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 pt-2 pb-6 rounded-t-lg"
      >
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
          onClick={() => setSelectedVehicle("car")}
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
          onClick={() => setSelectedVehicle("bike")}
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
          onClick={() => setSelectedVehicle("auto")}
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
    </div>
  );
};

export default Home;
