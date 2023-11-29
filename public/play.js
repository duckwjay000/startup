const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';

class Button {
  constructor(el) {
    this.el = el;
    this.splash = new Audio('splash.mp3')
    this.hit = new Audio('hit.mp3')
    this.isClickable = true
  }

  setClicked() {this.isClickable = false}
  getClicked() {return this.isClickable}
  setNewImage(newImage) {
    this.el.getElementsByTagName('img')[0].src = newImage
  }
  resetImage() {
    this.el.getElementsByTagName('img')[0].src = "ocean.jpg"
  }


  async press(result) {
    if (result === "hit") {
      return new Promise(async (pressResolve) => {
        await this.playSound(1.0, this.hit);
        pressResolve();
      });
    }
    else if (result === "miss") {
      return new Promise(async (pressResolve) => {
        await this.playSound(1.0, this.splash);
        pressResolve();
      }); 
    }
  }

  async playSound(volume, sound) {
    return new Promise((playResolve) => {
      sound.volume = volume;
      sound.onended = playResolve;
      sound.play();
    });
  }
}



class Game {
  buttons;
  timer;
  firstClick;
  resetBtn = document.getElementById('resetBtn');
  guessText = document.querySelector('#count');
  numGuess;
  volume;
  shipPosition;
  numHits;
  endGame;
  socket;

  constructor() {
    this.buttons = new Map();
    this.firstClick = true;
    this.timer = false;
    this.numGuess = 0;
    this.volume = 1.0;
    this.sound = new Audio('splash.mp3')
    this.shipPosition = this.placeShip()
    this.numHits = 0;
    this.endGame = false
    
    document.querySelectorAll('.gridBtn').forEach((el, i) => {
      if (i < 100) {
        this.buttons.set(el.id, new Button(el));
      }
    });

    const playerNameEl = document.querySelector('.game-stats');
    playerNameEl.textContent = this.getPlayerName();

    this.configureWebSocket();
  }

  async pressButton(button) {
    if (!this.endGame) {
      if (this.buttons.get(button.id).getClicked()) {
        this.timer = true;
        this.buttons.get(button.id).setClicked()

        if (this.shipPosition.includes(parseInt(button.id))) {
          //
          console.log("HIT");
          this.buttons.get(button.id).press("hit")
          this.numHits++;
          this.buttons.get(button.id).setNewImage("oceanHit.jpg")
          if (this.numHits === 4) {
            //END GAME HERE
            this.timer = false;
            this.endGame = true;
            this.saveScore(this.numGuess+1)
          }
        }
        else {
          console.log("MISS")
          this.buttons.get(button.id).press("miss")
          this.buttons.get(button.id).setNewImage("oceanX.jpg")
        }
        this.numGuess++;
      
        if (this.firstClick) {

          this.firstClick = false;
          stopWatch();
          
        }
        this.updateCount(this.numGuess);
      }
    }
  }

  async reset() {
    this.buttons = new Map();
    this.firstClick = true;
    this.timer = false;
    this.numGuess = 0;
    this.volume = 1.0;
    this.sound = new Audio('splash.mp3')
    this.shipPosition = this.placeShip()
    this.numHits = 0;
    this.endGame = false
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    this.updateCount(count);
    
    document.querySelectorAll('.gridBtn').forEach((el, i) => {
      if (i < 100) {
        this.buttons.set(el.id, new Button(el));
      }
    });
    this.buttons.forEach(button => button.resetImage());
    // Let other players know a new game has started
    this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  updateCount(count) {
    const countEl = document.querySelector('#guessNum');
    countEl.textContent = count;
  }

  placeShip() {
    const gridSize = 10;
    const shipLength = 4;
    const direction = Math.floor(Math.random()*2);
    const randomStart = Math.floor(Math.random() * 6);
    const randomVal = Math.floor(Math.random() * 6)
    const randomCol = Math.floor(Math.random() * 10)
    let ship = [];
  
    if (direction === 0) {
      for (let i=0; i<shipLength; i++) {
        ship.push(randomStart*10+randomVal+i+1)
      }
    }
    else {
      for (let i=0; i<shipLength; i++) {
        ship.push(randomCol+(randomStart*10)+(i*10)+1)
      }
    }
    console.log(ship)
    return ship
  }



  async saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
  }

  updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (score < prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    return scores;
  }


  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }







}

const game = new Game();

let minute = 0;
let second = 0;
let count = 0;

function stopWatch() {
  if (game.timer == true) {
    count++
    if (count == 100) {
      second++;
      count = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    let minString = minute;
    let secString = second;
    let countString = count;



    if (minute < 10) {
        minString = "0" + minString;
    }

    if (second < 10) {
        secString = "0" + secString;
    }

    if (count < 10) {
        countString = "0" + countString;
    }
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout(stopWatch, 10);
  } 
}







   

