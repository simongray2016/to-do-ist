import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TopBar from './components/TopBar';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';
import AddModal from './components/AddModal';


function App({isQuickAdd}) {
  return (
    <div className="App">
      <TopBar />
      <LeftMenu />
      <Content name={"Inbox"}/>
      { isQuickAdd ? <AddModal /> : ''}
    </div>
  );
}

const mapStateToProps = state => ({
  isQuickAdd: state.taskReducer.isQuickAdd
})

export default connect(mapStateToProps, null)(App);
