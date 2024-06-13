/** @format */

import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./Player.css";

function Player(props) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={props.spotify} />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
