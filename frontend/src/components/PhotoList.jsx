import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import '../styles/PhotoListItem.scss';

const PhotoList = ({ photos, favoritedPhotos, onFavToggle, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos && photos.map(photo => (
        <div
          key={photo.id}
          className="photo-list__item"
          onClick={() => onPhotoClick(photo)}
        >
          <PhotoListItem
            photo={photo}
            onFavToggle={() => onFavToggle(photo.id)}
            isFavorited={favoritedPhotos.includes(photo.id)}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;