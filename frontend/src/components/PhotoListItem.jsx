import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ sampleData, onFavToggle, isFavorited, onPhotoClick }) => {

  return (
    <div>
      <PhotoFavButton onFavToggle={onFavToggle} isFavorited={isFavorited} />
      <img
        className="photo-list__image"
        src={sampleData.urls.regular}
        alt={sampleData.id}
        onClick={onPhotoClick}
      />
      <div className="photo-list__user-alldetails">
        <img className="photo-list__user-profile" src={sampleData.user.profile} alt={`${sampleData.user.username} profile`} />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">{sampleData.user.username}</div>
          <div className="photo-list__user-location">
            {sampleData.location.city}, {sampleData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
