import React, { useEffect, useState } from "react";
import "./Home.css";
import SpotifyWebApi from "spotify-web-api-js";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import RecommendedCard from "../../Components/RecommendedCard/RecommendedCard";

import { Row, Col } from "react-bootstrap";
import TrackCard from "../../Components/TrackCard/TrackCard";
function Home() {
  const spotifyApi = new SpotifyWebApi();
  const [recommendedSong, setRecommendedSong] = useState(null);
  const [topSong, setTopSong] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));
    // getting recommended albums
    spotifyApi.getRecommendations(
      {
        seed_genres: ["afrobeat"],
      },
      (error, data) => {
        setRecommendedSong(data.tracks);
      }
    );
    // getting my top songs

    spotifyApi
      .getMyTopTracks()
      .then((data) => {
        setTopSong(data.items);
        
      })
      .catch((err) => {
       
      });
  }, []);

  const myDate = new Date();
  const hrs = myDate.getHours();

  let greet = "";

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <div>
      <h1 className="great">{greet}</h1>
      {recommendedSong ? (
        <div className="recommended">
          <h1>Recommended</h1>
          <div className="recommended__songs container">
            <Row lg={12}>
              {recommendedSong.map((element) => {
                return (
                  <Col lg={4} md={6} xs={12} key={element.album.id}>
                    <Link>
                      <RecommendedCard data={element} />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {topSong ? (
        <div className="top__artist">
          {" "}
          <h1>My Tracks</h1>
          <div>
            <div className=" container row w-100 ">
              <div className="col-6  d-flex gap-4">
                <span className="star  ">#</span>
                <span className="track__title col ">Title</span>
              </div>
              <span className="ablum col ">Album</span>
              <span className="duration col ">Duration</span>
            </div>

            <div className="track__window container">
              {topSong.map((element, index) => {
                return (
                  <div
                    className="onhover  mt-auto"
                    key={element.artists.id}
                  >
                    <TrackCard data={element} index={index} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <h1>Top Music</h1>
        <div>music</div>
      </div>
    </div>
  );
}

export default Home;
