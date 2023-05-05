import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import loadable from '@loadable/component';

//require('./styles/cards.scss');
import './styles/cards.css';

//const { BrowserRouter, Routes, Route, hashHistory } = require("react-router-dom");

import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
ReactDOM
  .createRoot(document.getElementById('main'))
  .render(<h1>I'm in. nya.</h1>);
*/

const Page = name => loadable(() => import(`./pages/${name}.js`));

/* Import Components */
const HelloWorld = Page('HelloWorld');
const About = Page('About');
const Game = Page('Game');


createRoot(document.getElementById('main')).render((
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HelloWorld/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
  </BrowserRouter>));
