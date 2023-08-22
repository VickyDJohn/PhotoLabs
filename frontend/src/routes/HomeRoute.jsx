import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photoData, topicData, favoritedPhotos, onFavToggle, onPhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topicData}
        favoritedPhotos={favoritedPhotos}
      />
      <PhotoList
        photos={photoData}
        favoritedPhotos={favoritedPhotos}
        onFavToggle={onFavToggle}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;