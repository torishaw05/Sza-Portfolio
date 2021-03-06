import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch}  from 'react-router-dom';

import About from './components/About.js';
import Contacts from './components/Contacts.js';
import References from './components/References.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import BaseLayout from './components/BaseLayout.js';



ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/references' component={References} />
      <Route path='/about' component={About} />
      <Route path='/' component={Home} />
    </Switch>
 </BaseLayout>
</BrowserRouter>
  ,
  document.getElementById('root')
);


registerServiceWorker();
