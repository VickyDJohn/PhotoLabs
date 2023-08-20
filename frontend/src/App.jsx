import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

function App() {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo

    const similarPhotos = photos.filter((p) =>
      p.id !== photo.id
    );

    setSimilarPhotos(similarPhotos); // Set the similar photos
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedPhoto(null); // Clear the selected photo
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        onFavToggle={toggleFav}
        onPhotoClick={openModal} // Pass the openModal function as the click handler
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
