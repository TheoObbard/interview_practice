document.addEventListener('DOMContentLoaded', () => {
  let timer = new Timer();
  timer.draw();
})

class Timer {

  constructor() {
    this.time = 0;
    this.counting = false;
    this.interval; 
  }

  countUp() { 
    if (this.counting === false) {
      this.counting = true;
      this.interval = setInterval(() => {
        this.time += 1;
        this.changeTime();
      }, 1000);
    } else {      
      this.counting = false;
      clearInterval(this.interval);
    }
  }

  createStartButton() {
    let btn = document.createElement('BUTTON');
    let text = document.createTextNode('Start/Stop');
    btn.appendChild(text);
    document.body.appendChild(btn);
    return btn;
  }

  createResetButton() {
    let btn = document.createElement('BUTTON');
    let text = document.createTextNode('Reset');
    btn.appendChild(text);
    document.body.appendChild(btn);
    return btn;
  }

  changeTime() {
    let time = document.getElementsByTagName('DIV');
    time[0].innerHTML = `${this.time}`;
  }

  showTime() {
    let display = document.createElement('DIV');
    let time = document.createTextNode(`${this.time}`);
    display.appendChild(time);
    document.body.appendChild(display);
  }

  draw() {    
    let start = this.createStartButton();
    let reset = this.createResetButton();
    this.showTime();
    start.onclick = () => {
      this.countUp()
    }
    reset.onclick = () => {
      this.time = 0;
      this.counting = true;
      this.countUp()
      this.changeTime();
    }
  }
}