import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import css from "./Home.module.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className={css.container}>
        <Link to="/drivers" className={css.drivers}>
          Drivers
        </Link>
      </div>
    </>
  );
}

export default Home;
