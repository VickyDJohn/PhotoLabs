import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

function App() {
  const {
    favoritedPhotos,
    modalOpen,
    selectedPhoto,
    similarPhotos,
    photoData,
    topicData,
    toggleFav,
    openModal,
    closeModal,
    onTopicClick
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        favoritedPhotos={favoritedPhotos}
        onFavToggle={toggleFav}
        onPhotoClick={openModal}
        onTopicClick={onTopicClick}
      />
      {modalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          similarPhotos={similarPhotos}
          onFavToggle={toggleFav}
          favoritedPhotos={favoritedPhotos}
        />
      )}
    </div>
  );
}

export default App;
