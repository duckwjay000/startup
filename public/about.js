function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.value)
        });
}

const apiKey = 'AIzaSyDnrM88n-cLnUK7NeSc2zOYcGBodWFiTZ4'
const maxResults = 1;

function getVideo() {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&order=date&maxResults=${maxResults}`)
        .then(response => response.json())
        .then(data => {
            // Extract the video ID from the response
            const videoId = data.items[0].id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            
            // Display the video URL or embed it in your HTML
            console.log(videoUrl);

            // You can also create an iframe to embed the video in your HTML
            // const iframe = document.createElement('iframe');
            // iframe.src = `https://www.youtube.com/embed/${videoId}`;
            // document.getElementById('video-container').appendChild(iframe);
        })
        .catch(error => {
            console.error('Error fetching random video:', error);
        });
}

getJoke()
getVideo()