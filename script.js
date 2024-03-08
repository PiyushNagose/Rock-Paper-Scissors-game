let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {

    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#240046";
    
}

const showWinner = ((userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
});

const playGame = ((userChoice) => {
    //comp choice
    let compChoice = genCompChoice();

    //compare
    if(userChoice === compChoice) {
    //Game was draw
        drawGame();
    } else {
    let userWin = true;
    if(userChoice === "rock") {
        //comp:- paper, scissors
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        //comp:- rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        //comp:- rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //user choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
