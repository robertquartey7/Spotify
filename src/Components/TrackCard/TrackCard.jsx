import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "../../Utilities/store/playerSlice";
function TrackCard({ data, index }) {
  const dispatch = useDispatch();
  const track = useSelector(state=>state.player.playingTrack)
  const toTime = (ms) => {
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  };
  const handlePlay = () => {
    dispatch(
      setTrack({
        track: data.uri,
      })
    );
   
  };
  return (
    <div className="track__window__inner row mb-4 " onClick={handlePlay}>
      <div
        className="track__main col-6 gap-4 "
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className="col">{index + 1}</span>
        <div
          className="d-flex gap-2  "
          style={{
            width: "100%",
          }}
        >
          <img
            src={data.album.images[0].url}
            alt=""
            className="img-fluid flex-start"
            style={{
              width: "2rem",
              height: "2rem",
            }}
          />
          <span className="track__title">{data.album.name}</span>
        </div>
      </div>
      <span className="ablum col ">{data.album.type}</span>
      <span className="duration col ">{toTime(data.duration_ms)}</span>
    </div>
  );
}

export default TrackCard;
