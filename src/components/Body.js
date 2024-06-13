/** @format */

import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { DataLayerContext, useDataLayerValue } from "../DataLayer";
import SongRow from "./SongRow";

function Body(props) {
  const [state, dispatch] = useDataLayerValue(DataLayerContext);
  const { user, token, recents, playlists, topTracks, newrelease } = state;

  // set an minute time interval to log the recents to the console
  setInterval(() => {
    console.log("Interval for recents", recents);
  }, 60000);
  console.log("--new release--", newrelease);

  return (
    <div className="body">
      {/* {console.log(props.spotify)} */}

      <Header spotify={props?.spotify} />
      {/* <div className="body__info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_3wt-O3Y4we9g_BPQhmWxiBGi-4MEG3Xxg&usqp=CAU"
          alt=""
        />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>Descripton... </p>
        </div>
      </div> */}

      <div className="body__songs" style={{ overflowX: "hidden" }}>
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <SongRow track={recents} caption="Recently played" />

        <SongRow track={topTracks} caption="Top Tracks" />

        <SongRow track={newrelease} caption="New Release" />
      </div>
    </div>
  );
}

export default Body;
