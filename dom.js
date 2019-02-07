document.addEventListener('DOMContentLoaded', () => {
  let timer = new Timer();
  timer.draw();
})

class Timer {
  constuctor() {
    this.time = 0;
  }

  countUp() {
    console.log(this.time);
    
    setInterval(() => {
      this.time += 1;
    }, 100);
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
    };
    reset.onclick = () => {
      this.time = 0;
    }
  }
}