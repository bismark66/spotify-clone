/** @format */

import React, { useEffect } from "react";
import { DataLayerContext, useDataLayerValue } from "../DataLayer";
import "./SongRow.css";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function SongRow(props) {
  const [{ recents }, dispatch] = useDataLayerValue(DataLayerContext);
  // console.log("calling recent in songRow responds", recents);

  // function Switch(props) {
  //   {
  //     console.log("-------", props.track?.items);
  //   }
  //   switch (true) {
  //     case props.track?.hasOwnProperty("items"):
  //       return (
  //         <>
  //           {props.track?.items.map((item) => (
  //             <div className="songRow">
  //               {/* {console.log(props)} */}
  //               <img
  //                 className="songRow_album"
  //                 src={
  //                   (item.track && item.track?.album.images[0].url) ||
  //                   item.album.images[0].url
  //                 }
  //                 alt=""
  //               />
  //               <div className="songRow__info">
  //                 <PlayCircleFilledIcon
  //                   className="playButton"
  //                   sx={{ fontSize: 60, display: "none" }}
  //                 />
  //                 <h1>{(item.track && item.track?.name) || item.name}</h1>
  //                 {console.log(item.track)}
  //                 <p>
  //                   {(item.track &&
  //                     item.track?.artists
  //                       .map((artist) => artist.name)
  //                       .join(",")) ||
  //                     item.artists.map((artist) => artist.name).join(",")}
  //                   {(item.track && item.track?.album.name) || item.album.name}
  //                 </p>
  //               </div>
  //             </div>
  //           ))}
  //         </>
  //       );
  //       break;
  //     case props.track?.hasOwnProperty("album"):
  //       return (
  //         <>
  //           {props.track?.albums?.items.map((item) => (
  //             <div className="songRow">
  //               {/* {console.log(props)} */}
  //               <img
  //                 className="songRow_album"
  //                 src={
  //                   (item.track && item.track?.album.images[0].url) ||
  //                   item.album.images[0].url
  //                 }
  //                 alt=""
  //               />
  //               <div className="songRow__info">
  //                 <PlayCircleFilledIcon
  //                   className="playButton"
  //                   sx={{ fontSize: 60, display: "none" }}
  //                 />
  //                 <h1>{(item.track && item.track?.name) || item.name}</h1>
  //                 {console.log(item.track)}
  //                 <p>
  //                   {(item.track &&
  //                     item.track?.artists
  //                       .map((artist) => artist.name)
  //                       .join(",")) ||
  //                     item.artists.map((artist) => artist.name).join(",")}
  //                   {(item.track && item.track?.album.name) || item.album.name}
  //                 </p>
  //               </div>
  //             </div>
  //           ))}
  //         </>
  //       );
  //       break;
  //     default:
  //       console.log("none matched the chain");
  //   }
  // }

  function Switch(props) {
    const renderItems = (items) => {
      return items.map((item) => (
        <div className="songRow" key={item.track?.id || item.id}>
          <img
            className="songRow_album"
            src={item.track?.album.images[0].url || item.album.images[0].url}
            alt=""
          />
          <div className="songRow__info">
            <PlayCircleFilledIcon
              className="playButton"
              sx={{ fontSize: 60, display: "none" }}
            />
            <h1>{item.track?.name || item.name}</h1>
            <p>
              {item.track
                ? item.track.artists.map((artist) => artist.name).join(",")
                : item.artists.map((artist) => artist.name).join(",")}
              {item.track?.album.name || item.album.name}
            </p>
          </div>
        </div>
      ));
    };

    console.log("-------", props.track?.items);

    if (props.track?.hasOwnProperty("items")) {
      console.log("Entered tracks");
      return <>{renderItems(props.track.items)}</>;
    } else if (props.track?.hasOwnProperty("album")) {
      console.log("Entered Album");
      return <>{renderItems(props.track.albums?.items)}</>;
    } else {
      console.log("none matched the chain");
      return null;
    }
  }

  return (
    <div style={{ margin: "20px 0px 60px 0px" }}>
      <div className="songRowHead">
        <h2>{props.caption}</h2>
        <h5>SEE ALL</h5>
      </div>
      <div className="songRowMain">
        {console.log("this is the switch statement", Switch(props))}

        {Switch(props)}
      </div>
    </div>
  );
}

export default SongRow;
