import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Aboutus from './components/Aboutus/About.js'
import Footer from './components/Footer/Footer.js'
import Process from './components/Process/Process.js'
import Upload from './components/Upload/Upload.js'
import Materials from './containers/Materials/Materials.js'
import Pair from './containers/Pair/Pair.js'
import Profile from './containers/Profile/Profile.js'
import Purchase from './containers/Purchase/Purchase.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Aboutus />
        <Process />
        <Profile />
        <Upload />
        <Materials />
        <Pair />
        <Purchase />
        <Footer />
      </div>
    );
  }
}

export default App;
