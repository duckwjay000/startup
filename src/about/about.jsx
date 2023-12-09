import React from 'react';
import './about.css'

export function About(props) {

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const apiKey = 'AIzaSyDnrM88n-cLnUK7NeSc2zOYcGBodWFiTZ4';
    const maxResults = 1;
    const languageCode = 'en';
    const categoryId = '24';
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&order=date&maxResults=${maxResults}&relevanceLanguage=${languageCode}`)
      .then(response => response.json())
      .then(data => {
          // Extract the video ID from the response
          const videoId = data.items[0].id.videoId;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          
          // Display the video URL or embed it in your HTML
          console.log(videoUrl);

          // You can also create an iframe to embed the video in your HTML
          // const iframe = document.createElement('iframe');
          const iframe = document.getElementById("videoFrame")
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          // iframe.src = `https://www.youtube.com/embed/${videoId}`;
          // document.getElementById('video-container').appendChild(iframe);
      })
      .catch(error => {
          console.error('Error fetching random video:', error);
      });
    }, [])




    return (
      <main className="container-fluid text-center">
          <div id="picture" className="picture-box"><img src="placeholder.jpg" alt="random" /></div>

          <p>
            Battleship is a two-player strategy game where players take turns guessing the location of the others ships until all ships are sunk.
            This version of the game is a simplified, single player version in which the player is trying to guess where the ship is in as little time and guesses as possible.
          </p>
    
          <p>
            The game Battleship is a registered trademark of HASBRO Inc. My use of the name and the game is for non-profit
            educational use only. No part of this code or program should be used outside of that definition.
          </p>
          <p> Here's a random video!</p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" id="videoFrame" src="https://www.youtube.com/embed/PtGqtow9AYs?autoplay=1"></iframe>
          </div>
      </main>
  );
}