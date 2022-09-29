import { Link } from "react-router-dom";
import * as React from "react";
import TextField from "@mui/material/TextField";
import "./Styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar-box" >
      <Link to="/">Home</Link>
      <Link to="/productspage">Products Page
      {/* <Link to="/trending">Trending</Link> */}
      </Link>
      <TextField fullWidth label="Search" id="fullWidth" placeholder="Eg: VALENTINA DRESSES"  />
    </div>
  );
}
export default Navbar;
