const player0Field = document.querySelector(".player-0");
const player1Field = document.querySelector(".player-1");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");

const dice = document.querySelector(".dice");
// Элементы управления
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

// Стартовое положение
const initState = () => {
    totalScores = [0, 0];  //1-й элемент score0, 2-й score1
    currentScore = 0;
    activePlayer = 0;  // 0 - первый игрок, 1- второй игрок

    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    dice.classList.add("hidden");

    player0Field.classList.add("active");
    player1Field.classList.remove("active");
}

initState();

// Функция смены игрока
const switchPlayer = () => {
    // обнуляем на прощание
    document.getElementById(`current-${activePlayer}`).innerHTML = 0;
    activePlayer = activePlayer == 0 ? 1: 0;  // смена игрока
    // activeP если равен 0, тогда он в 1, иначе он в 0
    currentScore = 0;
    console.log("act", activePlayer)

    // toggle - добавляет если не было, убирает если было
    player0Field.classList.toggle("active");
    player1Field.classList.toggle("active");
}

btnRoll.addEventListener("click", () => {
    const diceSide = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${diceSide}.png`
    dice.classList.remove("hidden");

    if (diceSide != 1){
        currentScore += diceSide;  // складываем в текущий счёт (js)
        document.getElementById(`current-${activePlayer}`).innerHTML = currentScore;  // (html)
    } else {  // иначе = только 1
        switchPlayer()
    }
})

btnHold.addEventListener("click", () => {
    totalScores[activePlayer] += currentScore;  // фиксируем в общий учет
    document.getElementById(`score-${activePlayer}`).innerHTML = 
        totalScores[activePlayer];  // (html)
    switchPlayer();
})

btnNew.addEventListener("click", () => {
    initState();
})
