class Button {
  constructor(el) {
    this.el = el;
    this.sound = new Audio('splash.mp3')
    this.isClickable = true
  }

  setClicked() {this.isClickable = false}
  getClicked() {return this.isClickable}

  async press(volume = 1.0) {
    return new Promise(async (pressResolve) => {
      await this.playSound(volume);
      pressResolve();
    });
  }

  async playSound(volume) {
    return new Promise((playResolve) => {
      this.sound.volume = volume;
      this.sound.onended = playResolve;
      this.sound.play();
      console.log("should play sound")
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


  constructor() {
    this.buttons = new Map();
    this.firstClick = true;
    this.timer = false;
    this.numGuess = 0;
    this.volume = 1.0;
    this.sound = new Audio('splash.mp3')
    //Set up buttons here
    
    //Set up ship locatin here
    
    document.querySelectorAll('.gridBtn').forEach((el, i) => {
      if (i < 100) {
        this.buttons.set(el.id, new Button(el));
        console.log(this.buttons.get(el.id).getClicked())
      }
    });

    const playerNameEl = document.querySelector('.game-stats');
    playerNameEl.textContent = this.getPlayerName();
  }

  async pressButton(button) {
    if (this.buttons.get(button.id).getClicked()) {
      this.timer = true;
      this.buttons.get(button.id).setClicked()
      console.log("button pressed");
      
      this.press()

      this.numGuess++;
      if (this.firstClick) {

        this.firstClick = false;
        stopWatch();
        
      }
      this.updateCount(this.numGuess);
    }
    //this.saveScore(this.numGuess)
    


    //game logic goes in here








    
    //console.log(numGuess)
    /*if (this.allowPlayer) {
      this.allowPlayer = false;
      await this.buttons.get(button.id).press(1.0);

      if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
        this.playerPlaybackPos++;
        if (this.playerPlaybackPos === this.sequence.length) {
          this.playerPlaybackPos = 0;
          this.addButton();
          this.updateScore(this.sequence.length - 1);
          await this.playSequence();
        }
        this.allowPlayer = true;
      } else {
        this.saveScore(this.sequence.length - 1);
        this.mistakeSound.play();
        await this.buttonDance(2);
      }
    }*/
  }

  async reset() {
    this.firstClick = true;
    this.timer = false;
    this.numGuess = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    this.updateCount(count);
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  updateCount(count) {
    const countEl = document.querySelector('#guessNum');
    countEl.textContent = count;
  }



  saveScore(score) {
    const userName = this.getPlayerName();
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    scores = this.updateScores(userName, score, scores);

    localStorage.setItem('scores', JSON.stringify(scores));
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

  async press() {
    return new Promise(async (pressResolve) => {
      await this.playSound(1.0);
      pressResolve();
    });
  }

  async playSound(volume) {
    return new Promise((playResolve) => {
      this.sound.volume = volume;
      this.sound.onended = playResolve;
      this.sound.play();
      console.log("should play sound")
    });
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








