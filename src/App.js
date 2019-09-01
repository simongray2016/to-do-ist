import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <TopBar />
      <LeftMenu />
      <Content name={"Inbox"}/>
    </div>
  );
}

export default App;
