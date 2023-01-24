import React from "react";

function TrackSearchResult({ track, chooseTrack }) {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <div className="d-flex m-2 align-items-center pointer" onClick={handlePlay}>
      <img
        src={track.album.images[0].url}
        style={{ height: "64px", width: "64px" }}
        alt=""
      />
      <div className="ml-3">
        <div>{track.name}</div>
        <div>{track.artists[0].name}</div>
      </div>
    </div>
  );
}

export default TrackSearchResult;
