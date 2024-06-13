/** @format */

import React from "react";
import "./Footer.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LyricsIcon from "@mui/icons-material/Lyrics";
import QueueIcon from "@mui/icons-material/Queue";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider, Item } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__img"
          src="https://flxt.tmsimg.com/assets/162483_v9_bb.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>yeah|</h4>
          <p>usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PauseCircleIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatOnIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={3}>
          <Grid item>
            <LyricsIcon />
          </Grid>
          <Grid item>
            <QueueIcon />
          </Grid>
          <Grid item>
            <CastConnectedIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs className="slider">
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
