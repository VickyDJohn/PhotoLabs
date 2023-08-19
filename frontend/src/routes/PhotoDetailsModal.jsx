import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, selectedPhoto, similarPhotos }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt={selectedPhoto.id} />
        <div className='photo-details-modal__header'>Similar Photos:</div>
        <div className="photo-details-modal__images">
          {similarPhotos.map((photo) => (
            <img key={photo.id} src={photo.urls.regular} alt={photo.id} />
          ))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
