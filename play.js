function pressButton(el) {
    console.log("button pressed");
    sound = loadSound('splash.mp3');
    sound.play();
    }


function loadSound(filename) {
    return new Audio(filename);
}

/*class Button {
    constructor(location, el) {
      this.el = el;
      this.sound = loadSound('splash.mp3');
      this.location = location;
    }

    async press(volume = 1.0) {
        return new Promise(async (pressResolve) => {
          await this.playSound(volume);
          pressResolve();
        });
    }
    
    async playSound(volume) {
        console.log("button pressed")
        return new Promise((playResolve) => {
          this.sound.volume = volume;
          this.sound.onended = playResolve;
          this.sound.play();
        });
    }
}





class Game {
    buttons;
    allowPlayer;

    playerPlaybackPos;

  
    constructor() {
      this.buttons = new Map();
      this.allowPlayer = false;

      this.playerPlaybackPos = 0;

  
      
      document.querySelectorAll('.gridBtn').forEach((el, i) => {
        if (i < btnDescriptions.length) {  
          this.buttons.set(el.id, new Button(i, el));
        }
      });
  
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = this.getPlayerName();
    }
  
    async pressButton(button) {
      if (this.allowPlayer) {
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
      }
    }
  
    async reset() {
      this.allowPlayer = false;
      this.playerPlaybackPos = 0;
      this.sequence = [];
      this.updateScore('--');

      this.allowPlayer = true;
    }
  
    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }


  
    updateScore(score) {
      const scoreEl = document.querySelector('#score');
      scoreEl.textContent = score;
    }

  
    getRandomButton() {
      let buttons = Array.from(this.buttons.values());
      return buttons[Math.floor(Math.random() * this.buttons.size)];
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
        if (score > prevScore.score) {
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
  }
  
  const game = new Game();

function loadSound(filename) {
    return new Audio('assets/' + filename);
}*/