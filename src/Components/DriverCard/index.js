import React from "react";

function DriverCard({ driver }) {
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/Images/2021/${driver.driverNumber}.png`}
        alt={driver.driverName}
      />
      <h1 key={driver.driverNumber}>{driver.driverName}</h1>
    </>
  );
}

export default DriverCard;
