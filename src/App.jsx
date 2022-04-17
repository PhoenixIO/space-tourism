import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Start from './pages/Start';
import Mars from './pages/Mars';
import Saturn from './pages/Saturn';
import Andromeda from './pages/Andromeda';
import End from './pages/End';

import './assets/css/App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<Start />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/andromeda" element={<Andromeda />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    );
  }
}
