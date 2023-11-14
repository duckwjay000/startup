# Battleship<sup>TM</sup> Lite

## Description deliverable

### Elevator pitch
Battleship has been a classic for several years. With the Battleship<sup>TM</sup> Lite application, you can now experience a new twist on an old favorite. It takes the most exciting part of the game - sinking ships - out of the boring tedium of guessing turn after turn and makes it into more of a race. Play in a variety of different difficulties to find the enemy ship in as few moves as possible. Challenge your friends to see who can find the enemy in the fewest moves and claim the high score. 

### Design

![Mock-up](battlshipMockUI.jpg)


### Key features

- Secure login over HTTPS
- Ability to select difficulty
- Random generation of enemy battleship location
- Ability to select squares on the grid and confirm choice
- Scores are persistently stored



### Technologies

Here is how I am going to use the required technology

- **Authentication** - User creation or logging in required to play
- **HTML** - Uses correct HTML structure for application. Four (maybe five?) HTML pages for login, play, high scores, and about pages respectively. 
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, game initialization, displaying highscores, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving scores
  - submitting scores
  - retrieving game information
- **Database Data** - Store users and scores in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - Updates scores as other users play. Also keeps track of various scores/times of gameplay.
- **React** - Application ported to use the React web framework.

## HTML deliverable

This deliverable is building out the HTML for my project. Here's what I've done:

- **HTML pages** - Four HTML pages that represent the ability to login, play, view scores, and get info about the project. I might get rid of the "about" page later.
- **Links** - Each page has a navigation bar at the top that links to the other pages. 
- **Text** - Each feature has a text description as well as placeholders for data that comes with the other parts of this project.
- **3rd Party** - I'm not sure I fully understood what was asked here, but I have places that I can implement 3rd party calls later. Mostly this is in the about page where I just implement random API's that don't really contribut much.
- **Images** - I am going to try using tileable images as buttons for the interactive battleship map. I want to see if I can change the image when clicked.
- **Login** - Input box and submit button for login.
- **Database** - The scores and users are stored in a database.
- **WebSocket** - Updates scores as other users play. Also keeps track of various scores/times of gameplay.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body** - These appear on all pages and are consistent in size and style.
- **Navigation elements** - There is a navigation bar in the header at the top that shows current page. Done using Bootstrap. 
- **Responsive to window resizing** - Made sure that content scales and changes based on screen size. Everything fits/adjusts based on window size.
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** - Added images. Also used images as buttons.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - When you press enter or the login button it takes you to the play screen. Should allow future functionality.
- **database** - Displayed the scores on the scores page. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I have a place holder for this in the scores section. Not really sure if I'm understanding this correctly though.
- **application logic** - User is able to interact with grid system and have it update. Also randomly generates a game for the user to play.

- ## Service deliverable

For this deliverable I added backend endpoints that receives votes and returns scores.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - I am calling Google's Youtube API to get a random video
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Also updating/displaying scores. 
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB deliverable

For this deliverable I stored the high scores in the database.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!
