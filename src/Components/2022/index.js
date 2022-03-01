import Drivers from "../Drivers";
import drivers from "../../Data/driversData.js";

function Year2022() {
  const x = drivers.filter((driver) => {
    return driver.years.includes(2022);
  });
  return <>{<Drivers drivers={x} />}</>;
}

export default Year2022;
