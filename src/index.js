import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import Slider from './Slider';
import About from './About';
import Footer from './Footer';
import Services from './Services';
import Team from './Team';
import Portfolio from './Portfolio';
import Client from './Client';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import Admin from './admin/Admin';
import { BrowserRouter, Route } from "react-router-dom";


ReactDOM.render(
  <div>  
    <BrowserRouter>  
      <Route path="/" exact component={Menu} />
      <Route path="/" exact component={Slider} />
      <Route path="/" exact component={About} />
      <Route path="/" exact component={Services} />
      <Route path="/" exact component={Team} />
      <Route path="/" exact component={Portfolio} />
      <Route path="/" exact component={Client} />
      <Route path="/" exact component={Contact} />
      <Route path="/" exact component={Footer} />
    </BrowserRouter>
    <Admin />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
