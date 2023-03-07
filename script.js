
// document.querySelectorAll('.box').forEach((x) => {
//     x.addEventListener('click', function() {
//         x.textContent = 'X';
//     })});

const audio = new Audio("Win.wav");


function TickyTacky() {

    this.turnsPlayed = 0;
    this.won = false;
    this.current = 'X';
    this.winner = 'X';
    this.draw = false;


    


    this.place = function() {
        if(this.turnsPlayed % 2 == 0) {
            this.current = 'X'
        }
        else if(this.turnsPlayed % 2 != 0) {this.current = 'O'}
        this.turnsPlayed += 1;
    }

    this.checkWin = function() {
        if(document.querySelector("#one").textContent == 'X' && document.querySelector("#two").textContent == 'X' && document.querySelector("#three").textContent == 'X' || document.querySelector("#four").textContent == 'X' && document.querySelector("#five").textContent == 'X' && document.querySelector("#six").textContent == 'X' || document.querySelector('#seven').textContent == 'X' && document.querySelector('#eight').textContent == 'X' && document.querySelector('#nine').textContent == 'X' || document.querySelector('#one').textContent == 'X' && document.querySelector('#five').textContent == 'X' && document.querySelector('#nine').textContent == 'X' || document.querySelector('#three').textContent == 'X' && document.querySelector('#five').textContent == 'X' && document.querySelector('#seven').textContent == 'X' || document.querySelector('#one').textContent == 'X' && document.querySelector('#four').textContent == 'X' && document.querySelector('#seven').textContent == 'X' || document.querySelector('#two').textContent == 'X' && document.querySelector('#five').textContent == 'X' && document.querySelector('#eight').textContent == 'X' || document.querySelector('#three').textContent == 'X' && document.querySelector('#six').textContent == 'X' && document.querySelector('#nine').textContent == 'X') {
            this.won = true;
            this.winner = 'X'
        }
        else if(document.querySelector("#one").textContent == 'O' && document.querySelector("#two").textContent == 'O' && document.querySelector("#three").textContent == 'O' || document.querySelector("#four").textContent == 'O' && document.querySelector("#five").textContent == 'O' && document.querySelector("#six").textContent == 'O' || document.querySelector('#seven').textContent == 'O' && document.querySelector('#eight').textContent == 'O' && document.querySelector('#nine').textContent == 'O' || document.querySelector('#one').textContent == 'O' && document.querySelector('#five').textContent == 'O' && document.querySelector('#nine').textContent == 'O' || document.querySelector('#three').textContent == 'O' && document.querySelector('#five').textContent == 'O' && document.querySelector('#seven').textContent == 'O' || document.querySelector('#one').textContent == 'O' && document.querySelector('#four').textContent == 'O' && document.querySelector('#seven').textContent == 'O' || document.querySelector('#two').textContent == 'O' && document.querySelector('#five').textContent == 'O' && document.querySelector('#eight').textContent == 'O' || document.querySelector('#three').textContent == 'O' && document.querySelector('#six').textContent == 'O' && document.querySelector('#nine').textContent == 'O') {
            this.won = true;
            this.winner = 'O'
        }
        else if(this.turnsPlayed == 9) {
            this.draw = true;
        }
        }
}


let board = new TickyTacky;

document.querySelectorAll('.box').forEach((x) => {

    x.addEventListener('click', () => {
    if(board.won == false) {
        board.place();
        x.textContent = board.current;
        x.classList.add('clicked');

        board.checkWin();

        if(board.won == true) {
            document.querySelectorAll('.box').forEach((x) => x.classList.add('clicked'));
            document.querySelector('h2').textContent = `${board.winner} won!`
            audio.play();
        }

        else if(board.draw == true) {
            document.querySelector('h2').textContent = 'DRAW!'
        }
    }

    })
})
