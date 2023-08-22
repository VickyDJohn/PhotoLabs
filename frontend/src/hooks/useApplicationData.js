import { useReducer } from 'react';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
  favoritedPhotos: [],
  modalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const photoId = action.payload;
      if (state.favoritedPhotos.includes(photoId)) {
        return {
          ...state,
          favoritedPhotos: state.favoritedPhotos.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favoritedPhotos: [...state.favoritedPhotos, photoId],
        };
      }
    case OPEN_MODAL:
      const { selectedPhoto, similarPhotos } = action.payload;
      const photosExcludingSelected = state.photos.filter((p) => p.id !== selectedPhoto.id);
      return {
        ...state,
        modalOpen: true,
        selectedPhoto,
        similarPhotos: photosExcludingSelected,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
        selectedPhoto: null,
        similarPhotos: [],
      };
    default:
      return state;
  }
};

const useApplicationData = (initialPhotos, initialTopics) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    photos: initialPhotos,
    topics: initialTopics,
  });

  const toggleFav = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

  const openModal = (photo) => {
    const payload = {
      selectedPhoto: photo,
      similarPhotos: state.photos.filter((p) => p.id !== photo.id),
    };
    dispatch({ type: OPEN_MODAL, payload });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return {
    favoritedPhotos: state.favoritedPhotos,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    similarPhotos: state.similarPhotos,
    toggleFav,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
