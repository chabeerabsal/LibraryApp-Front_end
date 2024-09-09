import React from 'react';
import './App.css';
import { Navbar } from './Layout/Navbarheaderfooter/navbar';
import { Footer } from './Layout/Navbarheaderfooter/Footer';
import { Homepage } from './Layout/HomePage/Homepage';
import { SearchBooksPage } from './Layout/SearchBooksPage/SearchBooksPage';
import { Switch, Route, Redirect } from 'react-router';

function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Homepage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
