import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';


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
      <div className="photo-details-modal__images">
        {similarPhotos.map((photo) => (
          <div key={photo.id} className="photo-details-modal__similar-photo">
            <PhotoFavButton isFavorited={favoritedPhotos.includes(photo.id)} onFavToggle={() => onFavToggle(photo.id)} />
            <img src={photo.urls.regular} alt={photo.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
