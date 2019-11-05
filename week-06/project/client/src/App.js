import React from 'react';
import Header from './Header/view';
import MainPostList from './MainPostList/view';
import RightSidebar from './RightSidebar/view';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainSection">
        <MainPostList className="MainPostList" />
        <RightSidebar className="RightSidebar" />
      </div>
    </div>
  );
}

export default App;
