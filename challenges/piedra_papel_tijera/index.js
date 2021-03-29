//Random Number Generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//0 = rock, 1 = paper, 2 = scissor

//Game function
function game(choice) {
    let computerChoice = getRandomInt(3);
    let humanChoice = choice;
    console.log("Computer Choice: " + computerChoice);
    console.log("Human Choice: " + humanChoice);
    //Condiciones Piedra
    switch(humanChoice)
    {
        //Condiciones Piedra
        case 0:
            if (computerChoice === humanChoice )
            {
                alert("¡Computadora usó Piedra! ¡Empate!");
            }
            if (computerChoice === 1) {
                alert("¡Computadora usó Papel! ¡Perdiste! :(");
            }
            if (computerChoice === 2) {
                alert("¡Computadora usó Tijera! ¡Ganaste! :)");
            }
            break;
        //Condiciones Papel
        case 1:
            if (computerChoice === humanChoice )
            {
                alert("¡Computadora usó Papel! ¡Empate!");
            }
            if (computerChoice === 0) {
                alert("¡Computadora usó Roca! ¡Ganaste! :)!");
            }
            if (computerChoice === 2) {
                alert("¡Computadora usó Tijera! ¡Perdiste! :(!");
            }
            break;
        //Condiciones Tijera
        case 2:
            if (computerChoice === humanChoice )
            {
                alert("¡Computadora usó Tijera! ¡Empate!");
            }
            if (computerChoice === 0) {
                alert("¡Computadora usó Roca! ¡Perdiste! :(");
            }
            if (computerChoice === 1) {
                alert("¡Computadora usó Papel! ¡Ganaste! :)");
            }
            break;
        default:
            console.log("Error");
    }
}
//Functions called from HTML page
function rockChoice() {
    game(0);
}
function paperChoice() {
    game(1);
}
function scissorChoice() {
    game(2);
}
