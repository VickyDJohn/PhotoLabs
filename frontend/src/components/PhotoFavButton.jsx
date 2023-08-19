import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorited, onFavToggle }) {
  return (
    <div
      className={`photo-list__fav-icon ${isFavorited ? "active" : ""}`}
      onClick={onFavToggle}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
