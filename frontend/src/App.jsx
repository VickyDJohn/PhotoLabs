import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

function App() {
  const {
    favoritedPhotos,
    modalOpen,
    selectedPhoto,
    similarPhotos,
    toggleFav,
    openModal,
    closeModal,
  } = useApplicationData(photos, topics);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        onFavToggle={toggleFav}
        onPhotoClick={openModal}
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
