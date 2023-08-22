import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorited, onFavToggle }) {
  const handleFavToggleClick = (e) => {
    e.stopPropagation(); // Stops the event from bubbling up
    onFavToggle();
  };
  return (
    <div
      className={`photo-list__fav-icon`}
      onClick={handleFavToggleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
