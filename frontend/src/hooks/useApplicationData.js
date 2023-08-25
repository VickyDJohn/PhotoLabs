import { useReducer, useEffect } from 'react';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const SET_TOPIC_PHOTOS = 'SET_TOPIC_PHOTOS';
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

const initialState = {
  favoritedPhotos: [],
  modalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  photoData: [],
  topicData: [],
  darkMode: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TOPIC_PHOTOS:
      return { ...state, photoData: [...action.payload] };
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
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
      const photosExcludingSelected = state.photoData.filter((p) => p.id !== selectedPhoto.id);
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
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFav = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };

  const fetchTopicPhotos = async (topicId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: SET_TOPIC_PHOTOS, payload: data });
    } catch (error) {
      console.error('Error fetching topic photos:', error.message);
    }
  };

  const onTopicClick = (topicId) => {
    fetchTopicPhotos(topicId);
  };

  const openModal = (photo) => {

    if (photo.topic_id) {
      fetchTopicPhotos(photo.topic_id);
    }

    const similarPhotos = state.photoData.filter((p) => p.id !== photo.id);
    dispatch({ type: OPEN_MODAL, payload: { selectedPhoto: photo, similarPhotos } });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "SET_PHOTO_DATA", payload: data });
      })
      .catch((error) => console.log("There was a problem with the fetch operation:", error.message));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return {
    photoData: state.photoData,
    topicData: state.topicData,
    favoritedPhotos: state.favoritedPhotos,
    modalOpen: state.modalOpen,
    selectedPhoto: state.selectedPhoto,
    similarPhotos: state.similarPhotos,
    darkMode: state.darkMode,
    toggleDarkMode,
    toggleFav,
    openModal,
    closeModal,
    onTopicClick
  };
};

export default useApplicationData;