import React from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const dataArray = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
