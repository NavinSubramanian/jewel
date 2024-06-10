import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom'

import HomePage from './HomePage';
import About from './About';
import Gold from './Gold';
import Page from './Page';
import Work from './Work';
import Chitfund from './Chitfund';
import SeperateItem from './components/SeperateItem'

function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/gold' Component={Gold}></Route>
        <Route path='/custom' Component={Page}></Route>
        <Route path='/work' Component={Work}></Route>
        <Route path='/single/:id' Component={SeperateItem}></Route>
        {/* <Route path='/single/:id/enquire' Component={SeperateItem}></Route> */}
        <Route path='/chitfund' Component={Chitfund}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
