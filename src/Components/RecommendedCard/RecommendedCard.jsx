import React from "react";
import defaultPhoto from "../../assets/default.png";
import "./RecommendedCard.css";
function RecommendedCard({ data }) {
  return (
    <div className="rec__card rounded">
      <div>
        <img src={data.album.images[0].url} alt="" className="img-fluid rec__img" />
      </div>
      <h6 className="rec__title">{data?.album.name}</h6>
    </div>
  );
}

export default RecommendedCard;
