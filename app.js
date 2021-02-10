let choices = [
    `rock`, `paper`, `scissors`,
]
let computerChoice = `rock`

let outcome = `play`

function buttonRock(){
    playGame('rock')
}

function buttonPaper(){
    playGame(`paper`)
}

function buttonScissors(){
    playGame(`scissors`)
}


function playGame(playerChoice){
    console.log("Player chose",playerChoice) 
    randomPcChoice()
    if (playerChoice == computerChoice){
        outcome = `You tie!`
        console.log(`Tie`)

    } else if (playerChoice == `rock` && computerChoice == `paper`){
        outcome = `You lose!`
        console.log (`You lose!`)
    } else if (playerChoice == `paper` && computerChoice == `scissors`){
        outcome = `You lose!`
        console.log (`You lose!`)
    }
    else if (playerChoice == `scissors` && computerChoice == `rock`){
        outcome = `You lose!`
        console.log (`You lose!`)
    }
    else if (playerChoice == `rock` && computerChoice == `scissors`){
        outcome = `You win!`
        console.log (`You win!`)
    }
    else if (playerChoice == `paper` && computerChoice == `rock`){
        outcome = `You win!`
        console.log (`You win!`)
    }
    else if (playerChoice == `scissors` && computerChoice == `paper`){
        outcome = `You win!`
        console.log (`You win!`)
    }
    draw (playerChoice)

}

function draw(playerChoice) {
   document.getElementById("pcAnswer").innerText = computerChoice

    document.getElementById("yourAnswer").innerText = playerChoice

    document.getElementById("outcome").innerText = outcome
}


function randomPcChoice(){
    let index = Math.floor(Math.random()*choices.length)
    computerChoice = choices[index]
    console.log(`Computer chose`,computerChoice)
}