import React from "react";
import { Link, NavLink } from "react-router-dom";
import Style from "./Header.module.css";

import "@theme-toggles/react/css/DarkInner.css";
import { DarkInner } from "@theme-toggles/react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../data/redux/slices/pageSpeedSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <header className={Style.container__header}>
      <div className={Style.block__logo}>
        <Link to="/">
          <div className={Style.style__logo}>
            <h3>QAERYHUB</h3>
          </div>
        </Link>
      </div>
      <div className={Style.block__navigation}>
        <ul>
          <div className={Style.container__toggle__theme}>
            <DarkInner
              onClickCapture={handleChangeTheme}
              className={Style.dark__inner}
              duration={750}
            />
          </div>
          <li>
            <NavLink className={Style.link_style} to="/">
              <div className={Style.link_style}>Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink className={Style.link_style} to="/Comparing">
              <div className={Style.link_style}> Comparing </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/History">
              <div className={Style.link_style}>History</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
