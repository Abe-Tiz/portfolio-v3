import React, { useState } from "react";
import "./navbar.css";
import data from "./data";
import logo from "../../assets/header/abiye_logo1.png";
import { IoIosColorPalette } from "react-icons/io";
import {FaBars} from 'react-icons/fa'
import { AiFillCloseCircle } from "react-icons/ai";
import Theme from "../../themes/Theme";
import { Link } from "react-router-dom";

const NavBar = ({
  setPrimaryTheme,
  setBackgroundTheme,
  setDarkMode,
  setLightMode,
}) => {
  let _themeSwitcher = null;

  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleTheme = () => {
    setTheme(!theme);
    // handleIsOpen();
  };

  if (theme) {
    _themeSwitcher = (
      <Theme
        theme={theme}
        setPrimaryTheme={setPrimaryTheme}
        setBackgroundTheme={setBackgroundTheme}
        setDarkMode={setDarkMode}
        setLightMode={setLightMode}
      />
    );
  }

  return (
    <nav>
      <div className="container nav__container">
        <a href="/">
          <img src={logo} alt="logo" className="nav__logo " />
          {/* Abebe Tizazu */}
        </a>
        <div className="toggler__icons">
          {toggle ? (
            <p toggle={toggle} onClick={handleToggle} className="close">
              <AiFillCloseCircle />
            </p>
          ) : (
            <p toggle={toggle} onClick={handleToggle} className="toggler">
              <FaBars />
            </p>
          )}
        </div>
        <ul
          toggle={toggle}
          onClick={handleToggle}
          className={`nav__menu ${toggle ? "open" : " "}`}
        >
          {data.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </ul>
        <button onClick={handleTheme} id="theme__icon">
          <IoIosColorPalette />
        </button>
        {_themeSwitcher}
      </div>
    </nav>
  );
};

export default NavBar;
