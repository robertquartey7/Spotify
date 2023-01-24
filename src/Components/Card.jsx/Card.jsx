import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="card">
      <div className="img__box">
        <img src={data.images[0].url} alt="" className="img-fluid" />
        <div className={"play"}>
          <PlayCircleIcon
            style={{
              color: "green",
            }}
            fontSize="large"  
          />
        </div>
      </div>
      <h5 className="mt-1">{data.type}</h5>
      <p className="text-muted">{data.name}</p>
    </div>
  );
}

export default Card;
