
let currentGame = document.querySelector("#current-game");
let ownPoints = 0;
let rivalPoints = 0;

function createRoundContainer () {
  let container = document.createElement('div');
  container.setAttribute("class", "round-container");
  return container;
}

/* function to pick the opponents hand randomly */
function opponentOption () {
  let rivalImg = new Image();
  let rivalOption = Math.round(Math.random() * (3 - 1)) + 1;
  
  switch (rivalOption) {
    case 1:
      rivalImg.setAttribute("src", "/assets/p2-rock.png");
      rivalImg.setAttribute("class", "rock");
      break;
    case 2:
      rivalImg.setAttribute("src", "/assets/p2-paper.png");
      rivalImg.setAttribute("class", "paper");
      break;
    case 3:
      rivalImg.setAttribute("src", "/assets/p2-scissors.png");
      rivalImg.setAttribute("class", "scissors");
      break;
  }
  return rivalImg;
}

/* option pocking logic */
const rock = () => {
  let roundContainer = createRoundContainer();

  let img = new Image();
  img.setAttribute("src", "assets/p1-rock.png");
  roundContainer.appendChild(img);
  
  let rivalImg = opponentOption();
  roundContainer.appendChild(rivalImg);
  
  let roundResult = document.createElement("h3");
  if (rivalImg.getAttribute("class") === "scissors") {
    ownPoints += 1;
    roundResult.textContent = "You win!";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "paper") {
    rivalPoints += 1;
    roundResult.textContent = "Orange wins";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "rock") {
    roundResult.textContent = "Tied, try again";
    roundContainer.appendChild(roundResult);
  }
  
  currentGame.appendChild(roundContainer);
  gameEndCheck();
}

function paper() {
  let roundContainer = createRoundContainer();

  let img = new Image();
  img.setAttribute("src", "assets/p1-paper.png");
  roundContainer.appendChild(img);
  
  let rivalImg = opponentOption();
  roundContainer.appendChild(rivalImg);
  
  let roundResult = document.createElement("h3");
  if (rivalImg.getAttribute("class") === "rock") {
    ownPoints += 1;
    roundResult.textContent = "You win!";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "scissors") {
    rivalPoints += 1;
    roundResult.textContent = "Orange wins";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "paper") {
    roundResult.textContent = "Tied, try again";
    roundContainer.appendChild(roundResult);
  }
  
  currentGame.appendChild(roundContainer);
  gameEndCheck();
}

function scissors() {
  let roundContainer = createRoundContainer();

  let img = new Image();
  img.setAttribute("src", "assets/p1-scissors.png");
  roundContainer.appendChild(img);
  
  let rivalImg = opponentOption();
  roundContainer.appendChild(rivalImg);
  
  let roundResult = document.createElement("h3");
  if (rivalImg.getAttribute("class") === "paper") {
    ownPoints += 1;
    roundResult.textContent = "You win!";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "rock") {
    rivalPoints += 1;
    roundResult.textContent = "Orange wins";
    roundContainer.appendChild(roundResult);
  } else if (rivalImg.getAttribute("class") === "scissors") {
    roundResult.textContent = "Tied, try again";
    roundContainer.appendChild(roundResult);
  }
  
  currentGame.appendChild(roundContainer);
  gameEndCheck();
}

/* disables buttons once the game is over [used in gameEndCheck()] */
function disableButtons() {
  let buttons = document.querySelectorAll('button');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", "disabled");
    console.log(buttons[i]);
  }
}


/* checks if the game has ended */
function gameEndCheck () {
  if (ownPoints === 2) {
    let endContainer = document.createElement("div");
    endContainer.setAttribute("class", "end-container");

    let endImg = new Image();
    endImg.setAttribute("src", "assets/player-win.png")
    endContainer.appendChild(endImg);

    let endMessage = document.createElement('h3');
    endMessage.textContent = "YOU WON THE GAME!!";
    endContainer.appendChild(endMessage);
    
    currentGame.appendChild(endContainer);

    disableButtons();

  } else if (rivalPoints === 2) {
    let endContainer = document.createElement("div");
    endContainer.setAttribute("class", "end-container");

    let endImg = new Image();
    endImg.setAttribute("src", "assets/player-lose.png")
    endContainer.appendChild(endImg);

    let endMessage = document.createElement('h3');
    endMessage.textContent = "You lost, this time...";
    endContainer.appendChild(endMessage);
    
    currentGame.appendChild(endContainer);

    disableButtons();
  }
}
