import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;
 
  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        play={play}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        showSaveIcon
        
        uris={trackUri ? [trackUri] : []}
      ></SpotifyPlayer>
    </div>
  );
}

export default Player;
