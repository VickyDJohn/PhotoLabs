import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ closeModal, selectedPhoto, similarPhotos, onFavToggle, favoritedPhotos }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <PhotoFavButton
          isFavorited={favoritedPhotos.includes(selectedPhoto.id)}
          onFavToggle={() =>  onFavToggle(selectedPhoto.id)}
        />
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt={selectedPhoto.id} />
      </div>
      <div className='photo-details-modal__header'>Similar Photos:</div>
      <div className='photo-details-modal__images'>
        {similarPhotos.map((photo) => (
          <PhotoListItem
          key={photo.id}
          sampleData={photo}
          onFavToggle={() => onFavToggle(photo.id)}
          isFavorited={favoritedPhotos.includes(photo.id)}
        />
        ))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
