import React from "react";
import Drivers from "../Drivers";
import drivers from "../../Data/driversData.js";

function Year2021() {
  const x = drivers.filter((driver) => {
    return driver.years.includes(2021);
  });
  return <>{<Drivers drivers={x} />}</>;
}

export default Year2021;
