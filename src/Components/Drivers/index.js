import React from "react";
import drivers2021 from "../../Data/driversData";
import DriverCard from "../DriverCard";

function Drivers() {
  return (
    <>
      {drivers2021.map((driver) => {
        return <DriverCard driver={driver} />;
      })}
    </>
  );
}

export default Drivers;
