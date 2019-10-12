import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './components/Blog';
import SinglePost from './components/Single post';



function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Main} ></Route>
      <Route path='/about' component={About} ></Route>
      <Route path='/blog' component={Blog} ></Route>
      <Route path='/single' component={SinglePost} ></Route>
    </BrowserRouter>
    // <SinglePost/>
  );
}

export default (App);
