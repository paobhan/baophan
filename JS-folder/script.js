let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
}

let result = '';

scoreUpdate();

function scoreUpdate() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`
}

function scoreReset() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;

  localStorage.removeItem('score');

  result = ''

  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = ``;

  scoreUpdate();
}

function computerPick() {
  const computerMove = Math.random();
  if (computerMove<=1/3) {
    return 'Rock';
  } else if (computerMove > 1/3 & computerMove <= 2/3) {
    return 'Paper';
  } else if (computerMove > 2/3) {
    return 'Scissors';
  }
};

function playGame(userPick) {
  const computerMove = computerPick();

  if (userPick === computerMove) {
    result = 'Tie';
  }

  if (userPick === 'Scissors') {
    if (computerMove === 'Paper') {
      result = 'You win';
    } else if (computerMove === 'Rock') {
      result = 'You lose';
    }
  } else if (userPick === 'Paper') {
    if (computerMove === 'Scissors') {
      result = 'You lose';
    } else if (computerMove === 'Rock') {
      result = 'You win';
    }
  } else if (userPick === 'Rock') {
    if (computerMove === 'Paper') {
      result = 'You lose';
    } else if (computerMove === 'Scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.win+=1;
  } else if (result === 'You lose') {
    score.lose+=1;
  } else if (result === 'Tie') {
    score.tie+=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  scoreUpdate();

  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = 
    `You <img class="move-icon" src="Images/${userPick}-emoji.png"> <img class="move-icon" src="Images/${computerMove}-emoji.png"> Computer`;

};