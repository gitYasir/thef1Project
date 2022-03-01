import DriverCard from "../DriverCard";
import { Link } from "react-router-dom";

function Drivers({ drivers }) {
  return (
    <>
      <Link to="/drivers">
        <button>Back</button>
      </Link>
      <div>
        {drivers.map((driver) => {
          return <DriverCard driver={driver} />;
        })}
      </div>
    </>
  );
}

export default Drivers;
