import css from "./DriversPage.module.css";
import { Link } from "react-router-dom";

function DriversPage() {
  return (
    <>
      <div className={css.container}>
        <Link to="/2021">
          <button className={css.btn}>2021</button>
        </Link>
        <Link to="/2022">
          <button className={css.btn}>2022</button>
        </Link>
      </div>
    </>
  );
}

export default DriversPage;
