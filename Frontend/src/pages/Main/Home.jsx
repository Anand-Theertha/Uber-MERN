import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanel from "../../components/VehiclePanel";
import ConfirmRide from "../../components/ConfirmRide";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] =
    useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const vehicleFoundRef = useRef(null);

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

  useGSAP(
    function () {
      if (confirmRidePanelOpen == true) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanelOpen]
  );

  useGSAP(
    function () {
      if (vehicleFound == true) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriverPanelOpen == true) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPanelOpen]
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
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          selectedVehicle={selectedVehicle}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setSelectedVehicle={setSelectedVehicle}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 pt-2 pb-6 rounded-t-lg"
      >
        <ConfirmRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 pt-2 pb-6 rounded-t-lg"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 pt-2 pb-6 rounded-t-lg"
      >
        <WaitingForDriver
          waitingForDriverPanelOpen={waitingForDriverPanelOpen}
        />
      </div>
    </div>
  );
};

export default Home;
