import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import Card from "../../Components/Card.jsx/Card";

import "./Artist.css";
function Artist() {
  const spotifyApi = new SpotifyWebApi();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));

    spotifyApi
      .getMyTopArtists()
      .then((data) => {
        setUserData(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="artist">
      <h3 className="pl-5">Top Artist</h3>
      {userData ? (
        <div className="topArtist container">
          {userData.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  navigate(`/artist/${element.id}`)
                 
                }}
              >
                <Card data={element} />
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Artist;
