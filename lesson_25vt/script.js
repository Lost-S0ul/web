let max_life = 20;
let life = 20;  // счёт
let computer = Math.trunc(Math.random() * 100) + 1;   // число компьютера
console.log(computer);

let q = document.querySelector(".question")  // сохранили вопрос
let bt = document.querySelector(".prov");  // сохранили кнопку "проверить"
let inp_el = document.querySelector(".inp");  // сохранили input
let score_el = document.querySelector(".score");  // сохранили счёт
let record_el = document.querySelector(".record");  // сохранили рекорд
score_el.innerHTML = life;  // запись счёта в html

// increase - увеличивать -> инкимент(++)
// decrease - уменьшать -> декримент(--)

// function again(){
//     life = 20;
//     score_el.innerHTML = life
// }

function game_over(){
    if (life <= 0) {
        bt.disabled = true;
        score_el.innerHTML = "Game Over";
        score_el.style.color = "red";
    }
}

function check_value() {
    let user = inp_el.value;  // фиксируем value input'а
    
    if (user == computer) {
        q.innerHTML = user;  // вопрос меняем на ответ
        inp_el.value = "Угадал"
        alert("Чемпион");
        if (record_el.innerHTML == "-") {  // если рекорда прежде не было
            record_el.innerHTML = max_life - life + 1;
        }
        else {
            if (record_el.innerHTML > max_life - life + 1){  // текущий max_life - life + 1 < record_el.innerHTM
                record_el.innerHTML = max_life - life + 1;
            }
        }


    }
    else if (user < computer) {
        life--;  // отняли жизнь в js
        score_el.innerHTML = life;  // запись счёта в html
        game_over();  // не проиграли ли
    }
    else {
        life--;
        score_el.innerHTML = life;  // запись счёта в html
        game_over();  // не проиграли ли
    }
}