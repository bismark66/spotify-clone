/** @format */

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { DataLayerContext, useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue(DataLayerContext);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="search for Artists,Songs,order" typr="text" />
      </div>
      {/* {console.log(user)} */}
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>Atokwamena</h4>
      </div>
    </div>
  );
}

export default Header;
