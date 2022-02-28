import React from "react";
import driversData from "../../Data/driversData";
import DriverCard from "../DriverCard";

function Drivers() {
  return (
    <>
      {driversData.map((driver) => {
        return <DriverCard driver={driver} />;
      })}
    </>
  );
}

export default Drivers;
