import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import DarkMode from './DarkMode';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favoritedPhotos, onTopicClick, darkMode, toggleDarkMode }) => {
  const isFavPhotoExist = favoritedPhotos.length > 0;
  return (
    <div className={`top-nav-bar ${darkMode ? 'dark' : ''}`}>
      <span className={`top-nav-bar__logo ${darkMode ? 'light' : ''}`}>PhotoLabs</span>
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='top-nav-bar__topics__logo'>
        <TopicList topics={topics} onTopicClick={onTopicClick} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
