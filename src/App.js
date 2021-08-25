import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import GetAlbums from './components/GetAlbums';
import Navbar from './components/Navbar';
import PostAlbums from './components/PostAlbums';
import PutAlbums from './components/PutAlbums';
import DeleteAlbums from './components/DeleteAlbums';

function App() {

  return (
    <div className="App">
      {/* Navbar link */}
      <Navbar />
      {/* GET, POST, PUT, DELETE Route Links */}
      <Switch>
        <Route exact path="/ReactAlbums"> <GetAlbums /></Route>
        <Route exact path="/ReactAlbums/post"> <PostAlbums /></Route>
        <Route exact path="/ReactAlbums/put"> <PutAlbums /></Route>
        <Route exact path="/ReactAlbums/delete"> <DeleteAlbums /></Route>
      </Switch>
    </div>
  );
}

export default App;
