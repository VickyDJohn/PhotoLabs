import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favoritedPhotos, onTopicClick }) => {
  const isFavPhotoExist = favoritedPhotos.length > 0;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__topics__logo'>
        <TopicList topics={topics} onTopicClick={onTopicClick} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
