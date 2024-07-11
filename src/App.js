import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  name = "harry";
 
  render() {
    return (
      <Router>
        <div>
          
          <br />
          <Routes>
            <Route exact path="/" element={<News key = "general" pageSize={15} country="in" category="general" />} />
            <Route exact path="/sports" element={<News key = "sports" pageSize={15} country="in" category="sports" />} />
            <Route exact path="/business" element={<News key = "business"pageSize={15} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key = "entertainment"pageSize={15} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key= "general" pageSize={15} country="in" category="general" />} />
            <Route exact path="/health" element={<News key  = "health"pageSize={15} country="in" category="health" />} />
            <Route exact path="/technology" element={<News key  = "technology"pageSize={15} country="in" category="technology" />} />
          </Routes> 
        </div>
      </Router>
    );
  }
}
