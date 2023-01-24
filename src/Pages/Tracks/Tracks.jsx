import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import Card from "../../Components/Card.jsx/Card";

function Tracks() {
  const spotifyApi = new SpotifyWebApi();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));

    spotifyApi
      .getMyTopTracks()
      .then((data) => {
        setUserData(data.items);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="track">
     track
    </div>
  );
}

export default Tracks;
