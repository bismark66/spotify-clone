/** @format */

import React, { useContext } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SidebarOption from "./SidebarOption";
import { DataLayerContext, useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [{ playlists, recents }, dispatch] =
    useDataLayerValue(DataLayerContext);

  console.log("test recents in sidebar", playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green-768x231.png"
        alt="spotify logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryBooksIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* {console.log(playlists)} */}
      {playlists?.items?.map((playlist) => {
        return <SidebarOption title={playlist.name} />;
      })}
      {/* <SidebarOption title="Hip Hop" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" /> */}
    </div>
  );
}

export default Sidebar;
