import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, selectedPhoto, similarPhotos }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img src={selectedPhoto.urls.full} alt={selectedPhoto.id} />
        <div>{selectedPhoto.user.username}</div>
        <div>{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>
        <div>Similar Photos:</div>
        <div className="similar-photos">
          {similarPhotos.map((photo) => (
            <img key={photo.id} src={photo.urls.regular} alt={photo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
