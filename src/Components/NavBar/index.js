import React from "react";
import css from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={css.navBar}>
      <div className={css.home}>Home</div>
      <div className={css.drivers}>Drivers</div>
    </div>
  );
}
//check
