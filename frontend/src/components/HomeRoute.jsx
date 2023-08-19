import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favoritedPhotos, onFavToggle, onPhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos} />
      <PhotoList photos={photos} favoritedPhotos={favoritedPhotos} onFavToggle={onFavToggle} onPhotoClick={onPhotoClick} />
    </div>
  );
};

export default HomeRoute;
