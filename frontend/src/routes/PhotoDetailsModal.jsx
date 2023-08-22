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
      <div className='photo-list__user-alldetails'>
        <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt={`${selectedPhoto.user.username} profile`} />
        <div className="photo-list__user-info">
          <div>{selectedPhoto.user.username}</div>
          <div className="photo-list__user-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </div>
        </div>
      </div>
      <div className="photo-details-modal__separator"></div>
      <div className='photo-details-modal__header'>Similar Photos:</div>
      <div className='photo-details-modal__images'>
        {similarPhotos.map((photo) => (
          <PhotoListItem
          key={photo.id}
          photo={photo}
          onFavToggle={() => onFavToggle(photo.id)}
          isFavorited={favoritedPhotos.includes(photo.id)}
        />
        ))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
