import { useState } from 'react';

const useApplicationData = (initialPhotos, initialTopics) => {
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
    setSelectedPhoto(photo);

    const photosExcludingSelected = initialPhotos.filter((p) => p.id !== photo.id);
    setSimilarPhotos(photosExcludingSelected);

    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalOpen(false);
  };

  return {
    favoritedPhotos,
    modalOpen,
    selectedPhoto,
    similarPhotos,
    toggleFav,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
