/** @format */

import React from "react";

export default function Banner(props) {
  return (
    <div>
      <div className="banner-head">{this.props.head}</div>

      <div className="banner-content">
        <div className="banner-content_image">&nbsp:</div>
        <div className="banner-content_text">
          <h4 className="banner-content_textHead">{this.props}</h4>
        </div>
      </div>
    </div>
  );
}

{
  props.track?.items.map((item) => {
    console.log("this is item for track.item", item.track);
    return (
      <div className="songRow">
        {/* {console.log(props)} */}
        <img
          className="songRow_album"
          src={
            (item.track && item.track?.album.images[0].url) ||
            item.album.images[0].url
          }
          alt=""
        />
        <div className="songRow__info">
          <PlayCircleFilledIcon
            className="playButton"
            sx={{ fontSize: 60, display: "none" }}
          />
          <h1>{(item.track && item.track?.name) || item.name}</h1>
          {console.log(item.track)}
          <p>
            {(item.track &&
              item.track?.artists.map((artist) => artist.name).join(",")) ||
              item.artists.map((artist) => artist.name).join(",")}
            {(item.track && item.track?.album.name) || item.album.name}
          </p>
        </div>
      </div>
    );
  }) ??
    props.track?.albums?.items.map((item) => {
      console.log("this is item for track.album.item", item.item);
      return (
        <div className="songRow">
          {console.log(props)}
          <img
            className="songRow_album"
            src={
              (item.track && item.track?.album.images[0].url) ||
              item.album.images[0].url
            }
            alt=""
          />
          <div className="songRow__info">
            <PlayCircleFilledIcon
              className="playButton"
              sx={{ fontSize: 60, display: "none" }}
            />
            <h1>{(item.track && item.track?.name) || item.name}</h1>
            {console.log(item.track)}
            <p>
              {(item.track &&
                item.track?.artists.map((artist) => artist.name).join(",")) ||
                item.artists.map((artist) => artist.name).join(",")}
              {(item.track && item.track?.album.name) || item.album.name}
            </p>
          </div>
        </div>
      );
    });
}
