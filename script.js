// Elements
const imgs = document.querySelectorAll('img');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.player');
const cpuScore = document.querySelector('.cpu');
let cpu = 0;
let player = 0;

// Listeners
imgs.forEach(img => img.addEventListener('click', playGame));
window.addEventListener('load', displayPoints);

// Functions
function playGame() {
  const randIndex = Math.floor(Math.random() * imgs.length);
  const cpuGuess = imgs[randIndex].className;
  if (this.className === cpuGuess) {
    displayResult('draw', cpuGuess);
  }
  if (this.className === 'scissors' && cpuGuess === 'rock') {
    displayResult('lose', cpuGuess);
  }
  if (this.className === 'scissors' && cpuGuess === 'paper') {
    displayResult('win', cpuGuess);
  }
  if (this.className === 'rock' && cpuGuess === 'paper') {
    displayResult('lose', cpuGuess);
  }
  if (this.className === 'rock' && cpuGuess === 'scissors') {
    displayResult('win', cpuGuess);
  }
  if (this.className === 'paper' && cpuGuess === 'scissors') {
    displayResult('lose', cpuGuess);
  }
  if (this.className === 'paper' && cpuGuess === 'rock') {
    displayResult('win', cpuGuess);
  }
}

function displayResult(result, cpuGuess) {
  let message;
  if (result === 'lose') {
    cpu++;
    message = 'You Lost!';
    displayPoints();
  }
  if (result === 'win') {
    player++;
    displayPoints();
    message = 'You Win!';
  }
  if (result === 'draw') {
    message = 'Draw';
  }
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="result">
    <div>
      <p class="resultDiv ${result}">${message}</p>
      <img src="assets/${cpuGuess}.png">
      <p>CPU used ${cpuGuess}</p>
    </div>
  </div>
  `;
  document.body.appendChild(div);
  div.addEventListener('click', e => {
    if (e.target.className.match('result')) {
      div.remove();
    }
  });
}

function displayPoints() {
  playerScore.textContent = player;
  cpuScore.textContent = cpu;
}
