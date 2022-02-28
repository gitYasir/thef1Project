import React from "react";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={css.navBar}>
      <div className={css.home}>
        <Link to="/">Home</Link>
      </div>
      <div className={css.drivers}>
        <Link to="/drivers">Drivers</Link>
      </div>
    </div>
  );
}
//check
