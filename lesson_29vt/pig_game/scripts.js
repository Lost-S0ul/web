const player0Field = document.querySelector(".player-0");
const player1Field = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let totalScores, currentScore, activePlayer, current0, current1

// Начальное положение
const initState = () => {
    totalScores = [0, 0];  // ОБЩИЕ ОЧКИ: 0 - первый; 1 - второй игрок
    currentScore = 0;
    activePlayer = 0  // КТО ХОДИТ: 0 - первый; 1 - второй игрок
    
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    document.getElementById("current-score-0").innerHTML = 0;
    document.getElementById("current-score-1").innerHTML = 0;

    dice.classList.add("hidden");
}

// Смена игрока
const switchPlayer = () => {
    document.getElementById(`current-score-${activePlayer}`).innerHTML = 0;
    currentScore = 0
    activePlayer = activePlayer == 1 ? 0 : 1
    // если равно 1 -> 0, иначе -> 1

    // переключает: убирает если есть, добавляет если нет
    player0Field.classList.toggle("active")
    player1Field.classList.toggle("active")
}


initState();


btnRoll.addEventListener("click", () => {
    const diceSide = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${diceSide}.png`
    dice.classList.remove("hidden");
    if (diceSide != 1){  // удачный бросок
        currentScore += diceSide;  // JS подсчёт
        document.getElementById(`current-score-${activePlayer}`).innerHTML = currentScore; // запись в html
    }else{
        switchPlayer();
    }
})

btnHold.addEventListener("click", () => {
    totalScores[activePlayer] += currentScore;  // запись в общий счёт  (в js)
    document.getElementById(`score-${activePlayer}`).innerHTML = totalScores[activePlayer] // (в html)
    switchPlayer()
})

btnNew.addEventListener("click", () => {
    initState()
})


