import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, onFavToggle, isFavorited, onPhotoClick }) => {

  return (
    <div>
      <PhotoFavButton onFavToggle={onFavToggle} isFavorited={isFavorited} />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt={photo.id}
        onClick={onPhotoClick}
      />
      <div className="photo-list__user-alldetails">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`${photo.user.name} profile`} />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">{photo.user.name}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
