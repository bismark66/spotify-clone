/** @format */

import React, { useEffect, useContext } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DataLayerContext, useDataLayerValue } from "./DataLayer";

let spotifyID = "7b7377f9e4034856b0bdbe8965675503";
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [state, dispatch] = useDataLayerValue(DataLayerContext);
  const { user, token, recents, playlists, topTracks, newrelease } = state;

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //  console.log(user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      console.log("my playlist", playlists);
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getMyRecentlyPlayedTracks().then((recents) => {
      console.log("recently played", recents);
      dispatch({
        type: "SET_RECENTS",
        recents: recents,
      });
    });

    spotify
      .getNewReleases({ limit: 5, offset: 0, country: "SE" })
      .then((newrelease) => {
        console.log("newrelease in spotify", newrelease.albums.items);
        dispatch({
          type: "SET_NEWRELEASE",
          newrelease: newrelease,
        });
      });

    spotify.getMyTopTracks().then((topTracks) => {
      console.log(topTracks);

      dispatch({
        type: "SET_TOPTRACKS",
        topTracks: topTracks,
      });
    });

    // get spotify devices
    spotify.getMyDevices().then((devices) => {
      console.log("THese are my devices", devices);
    });

    //   console.log("the token is :point", token);
    // console.log("the token is playlist :point", playlists);
    // console.log("this is my recent", recents);
    // console.log("this is my topTracks", topTracks);
    // console.log("newrelease of the year", newrelease?.album);
  }, []);

  //console.log("the token is :point", playlists);
  console.log("this is my recent", recents);
  console.log("All state values", state);
  // console.log(playlists);
  console.log("this is spotify", spotify);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
