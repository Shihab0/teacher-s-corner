import React, { useState } from "react";
import "./Navbar.css";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label onClick={handleClick} for="check" class="checkbtn">
          {clicked ? <VscChromeClose /> : <VscThreeBars className="" />}
        </label>
        <label class="logox">Logo</label>
        <ul>
          <li>
            <a class="activex" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
