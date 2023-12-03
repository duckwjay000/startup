import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return(
    <div className='body bg-dark text-light'>
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-dark">
                <a className="navbar-brand" href="#">Battleship Lite<sup>&trade;</sup></a>
                <menu className="navbar-nav">
                <li className="nav-item">
                    <a href="index.html" className="nav-link active">Home/Login</a></li>
                <li className="nav-item">
                    <a href="play.html" className="nav-link">Play game</a></li>
                <li className="nav-item">
                    <a href="scores.html" className="nav-link">High scores</a></li>
                <li className="nav-item">
                    <a href="about.html" className="nav-link">About</a></li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <div className="container-fluid">
                <span className="text-reset">Link to github: </span>
                <a className="text-reset" href="https://github.com/duckwjay000/startup.git">Ducky's github</a>
            </div>
        </footer>
    </div>
  );
}