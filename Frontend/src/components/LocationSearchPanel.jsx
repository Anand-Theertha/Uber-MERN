import React from "react";

const LocationSearchPanel = ({ setVehiclePanelOpen, setPanelOpen }) => {
  // sample array for location
  const locations = [
    "258 Avenue New York",
    "193 Block Los Angeles",
    "456 Block Chicago",
    "789 Block Houston",
    "101 Block Phoenix",
  ];

  return (
    <div>
      {locations.map((location, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              setVehiclePanelOpen(true);
              setPanelOpen(false);
            }}
            className="flex justify-start border-2 border-gray-100 active:border-black p-3 rounded-xl my-2 items-center gap-4"
          >
            <h2 className="bg-[#EEE] rounded-full h-8 w-12 flex items-center justify-center">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
