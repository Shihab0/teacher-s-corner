import React, { useState } from "react";
import "./Navbar.css";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label onClick={handleClick} htmlFor="check" className="checkbtn">
          {clicked ? <VscChromeClose /> : <VscThreeBars className="" />}
        </label>
        <label className="logox">
          <FaUserGraduate
            style={{ display: "inline-block", marginTop: "-3px" }}
          />{" "}
          Teacher's Corner
        </label>
        <ul>
          <li>
            <Link to="/" className="activex">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/home">Tuition</Link>
          </li>
          <li>
            <Link to="/home">Tutor request</Link>
          </li>
          <li>
            <Link to="/home">Blogs</Link>
          </li>
          <li>
            <Link to="/home">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
