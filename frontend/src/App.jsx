import React, { useState } from 'react';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos'; // Import the mock photos
import topics from 'mocks/topics'; // Import the mock topics
import './App.scss';

function App() {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favoritedPhotos={favoritedPhotos} onFavToggle={toggleFav} />
    </div>
  );
}

export default App;
