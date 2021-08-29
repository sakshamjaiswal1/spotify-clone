import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useDataLayerValue } from './DataLayer';
import logo from "./TwitterLogo.png"


function Header() {
  return <div className="header">
      <div className="header__left">
        <SearchIcon/>
    <input type="text" placeholder='Search for Artists,Songs or Podcast' />
      </div>
      <div className="header__right">
         <Avatar src={logo} />
          <h4>
              Saksham Jaiswal
          </h4>
      </div>
  </div>;
}

export default Header;
