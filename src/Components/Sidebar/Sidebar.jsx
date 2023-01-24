import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import defaultPhoto from "../../assets/default.png";
import HomeIcon from "@mui/icons-material/Home";
import AlbumIcon from "@mui/icons-material/Album";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import Cookies from "js-cookie";
function Sidebar() {
  const spotifyApi = new SpotifyWebApi();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));
    spotifyApi
      .getMe()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        if (err.status == 401) {
          Cookies.set("spotify_api_token", "");
          navigate("/login");
        }
      });
  }, []);
  return (
    <div className="sidebar">
      {!userData ? (
        <div className="side__top">
          <div className="side__img">
            <img src={defaultPhoto} alt="" className="img-fluid " />
          </div>
          <h3 className="">Robert</h3>
          <p>robertquartey7@gmail.com</p>
        </div>
      ) : (
        <div className="side__top">
          <div className="side__img">
            <img src={userData.images[0].url} alt="" className="img-fluid " />
          </div>
          <h3 className="">{userData.display_name}</h3>
          <p>{userData.email}</p>
        </div>
      )}
      <div className="menu__items">
        <Link to={"/"}>
          <div>
            <HomeIcon />
            <span>Home</span>
          </div>
        </Link>
        <Link to={"/artist"}>
          <div>
            <ArtTrackIcon />
            <span>Artist</span>
          </div>
        </Link>
        <Link to="search/">
          <div>
            <SearchIcon />
            <span>Search</span>
          </div>
        </Link>
        {/* <Link to={"/album"}>
          <div>
            <AlbumIcon />
            <span>Album</span>
          </div>
        </Link> */}
        {/* <Link to={"/tracks"}>
          <div>
            <LibraryMusicIcon />
            <span>Songs</span>
          </div>
        </Link> */}
      </div>
      <hr />
      <div>
        <div className="d-flex gap-3 p-2 saved">
          <LibraryAddIcon />
          <span>Saved Songs</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
