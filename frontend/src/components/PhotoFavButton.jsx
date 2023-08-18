import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleIconClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={`photo-list__fav-icon ${isFavorited ? 'active' : ''}`}>
      <div className="photo-list__fav-icon-svg" onClick={handleIconClick}>
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;