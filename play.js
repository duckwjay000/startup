class Button {
    constructor(description, el) {
      this.el = el;
      this.sound = loadSound('splash.mp3');
    }
}


function loadSound(filename) {
    return new Audio('assets/' + filename);
}