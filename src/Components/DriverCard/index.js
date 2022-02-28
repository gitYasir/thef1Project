import React from "react";

function DriverCard({ driver }) {
  return (
    <>
      <h1 key={driver.driverNumber}>{driver.driverName}</h1>
    </>
  );
}

export default DriverCard;
