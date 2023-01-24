import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import SpotifyWebApi from "spotify-web-api-js";
import Cookies from "js-cookie";
import TrackSearchResult from "../../Components/TrackSearchResult";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "../../Utilities/store/playerSlice";
import Details from "../Details/Details";
function Search() {
  const get = useSelector((state) => state.player.setTrack);
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi();
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  let cancel = false;
  useEffect(() => {
    spotifyApi.setAccessToken(Cookies.get("spotify_api_token"));
  }, []);

  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (cancel) return false;
    spotifyApi.searchTracks(search).then((data) => {
      setSearchResult(data.tracks.items);
    });

    return () => (cancel = true);
  }, [search]);

  function chooseTrack(track) {
    dispatch(
      setTrack({
        track: track.uri,
      })
    );

    setSearch("");
  }

  return (
    <div className="">
      <div className="search__box">
        <h1>Search songs</h1>
        <div className="search-box">
          <button className="btn-search">
            <SearchIcon />
          </button>
          <input
            type="text"
            className="input-search "
            id="search"
            placeholder="Type to Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {searchResult ? (
        <div
          className="search__history flex-grow-1 my-2"
          style={{
            overflowY: "auto",
          }}
        >
          {searchResult.map((tracks) => (
            <TrackSearchResult track={tracks} chooseTrack={chooseTrack} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <h1>Search History</h1>
        <div>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Search;
