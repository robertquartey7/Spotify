import React from "react";
import "./Spotify.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Player from "../../Components/Player/Player";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function Spotify() {
  const track = useSelector((state) => state.player.playingTrack);

  return (
    <div
      className="spotify"
      style={{
        position: "relative",
      }}
    >
      <div className="spotify__left ">
        <Sidebar />
      </div>
      <div className="spotify__right ">
        <Outlet />
      </div>
      <div
        className="player sticky-bottom"
        style={{
          position: "absolute",
          left: "0",
          right: "0",
        }}
      >
        <Player
          accessToken={Cookies.get("spotify_api_token")}
          trackUri={track ? track : null}
        />
      </div>
    </div>
  );
}

export default Spotify;
