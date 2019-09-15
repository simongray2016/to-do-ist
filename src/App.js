import React, {useEffect} from 'react';
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import TopBar from './components/TopBar';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';
import ContentWeek from './components/ContentWeek';
import AddModal from './components/AddModal';


function App(props) {
  let { list, listToday, listWeek } = props;

  useEffect(() => props.hideLoader(), [props])

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <LeftMenu />
        <AddModal />
        <Switch>
          <Route exact path="/" render={props => (<Content {...props} name={"Inbox"} list={list} />)} />
          <Route exact path="/today" render={props => (<Content {...props} name={"Today"} list={listToday} />)} />
          <Route exact path="/next-7-days" render={props => (<ContentWeek {...props} name={"Next 7 days"} list={listWeek} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  list: state.taskReducer.taskList.list,
  listToday: state.taskReducer.taskList.listToday,
  listWeek: state.taskReducer.taskList.listWeek
})

export default connect(mapStateToProps, null)(App);
