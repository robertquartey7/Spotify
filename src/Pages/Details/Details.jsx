import React, { useEffect, useState } from "react";
import "./Details.css";
import defaultPhoto from "../../assets/default.png";
import SpotifyWebApi from "spotify-web-api-js";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";
import TrackCard from "../../Components/TrackCard/TrackCard";

function Details() {
  const spotifyApi = new SpotifyWebApi();
  const [artistProile, setArtistProfile] = useState(null);
  const [artistTrack, setArtistTrack] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));
    spotifyApi
      .getArtist(id)
      .then((data) => {
        setArtistProfile(data);
      })
      .catch((err) => {
        if (err.status == 401) {
          Cookies.set("spotify_api_token", "");
          navigate("/login");
        }
      });

    spotifyApi
      .getTrack(id)
      .then((data) => {
       
      })
      .catch((err) => {
      
      });
  }, []);
  return (
    <>
      {artistProile ? (
        <div>
          <div className="detail__top ">
            <img
              src={artistProile.images[0].url}
              alt=""
              className="img-fluid "
            />

            <div className="detail__right">
              <p>profile</p>
              <h3>{artistProile.name}</h3>
              <p>{artistProile.type}</p>
            </div>
          </div>
          <div>
            <h3>Songs</h3>
            <div className="song__info"></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {artistTrack ? (
        <div className="track__window container">
          {artistTrack.map((element, index) => {
            return (
              <div className="onhover  mt-auto" key={element.artists.id}>
                <TrackCard data={element} index={index} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Feature under Construction</div>
      )}
    </>
  );
}

export default Details;
