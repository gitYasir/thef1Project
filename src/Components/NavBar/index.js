import React from "react";
import css from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Link to="/" className={css.home}>
      Home
    </Link>
  );
}
