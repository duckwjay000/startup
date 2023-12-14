import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import createLoginComponent from './login/login'; // Import the modified function
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <a className="navbar-brand" href="#">
              Battleship Lite<sup>&trade;</sup>
            </a>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home/Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='play'>
                  Play
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='scores'>
                  Scores
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={createLoginComponent()} exact /> {/* Use the function here */}
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <div className="container-fluid">
            <span className="text-reset">Link to github: </span>
            <a className="text-reset" href="https://github.com/duckwjay000/startup.git">
              Ducky's github
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
