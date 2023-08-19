import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
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