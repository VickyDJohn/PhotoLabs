import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import '../styles/PhotoListItem.scss';

const PhotoList = ({ photos, favoritedPhotos, onFavToggle }) => {
  return (
    <ul className="photo-list">
      {photos.map((data) => (
        <div key={data.id} className="photo-list__item">
          <PhotoListItem sampleData={data} onFavToggle={() => onFavToggle(data.id)} isFavorited={favoritedPhotos.includes(data.id)} />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
