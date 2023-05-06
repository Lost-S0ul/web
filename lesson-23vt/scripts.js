// let x = prompt("Ы: ");
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//         console.log(1);
//         break;
//     case 'value2':  // if (x === 'value2')
//         console.log(2);
//         break;
//     default:
//         console.log(3);
//         break;
//   }


// for( let jump=1; jump<=10; jump++ ) {
//     if (jump == 4) continue;  // пропуск итерации
//     console.log("Прыг " + jump);
// }

// for( let jump=1; jump<=10; jump++ ) {
//     if (jump == 4) break;  // выход из цикла
//     console.log("Прыг " + jump);
// }


// for( let jump=1; jump<=10; jump++ ) {
//     console.log("Прыг", jump);
//     for( let sit=1; sit<=3; sit++ ) {
//         console.log("Присед", sit);
//     }
// }

// for( let jump=1; jump<=10; jump++) {
//     if (jump ==4) continue;
//     console.log("Прыг", jump)
//     for( let sit=1; sit<=3; sit++ ) {
//         console.log("присед", sit);
//     }
// }


// for( let jump=1; jump<=10; jump++) {
//     if (jump == 4) continue;
//     console.log("Прыг", jump)
//     for( let sit=1; sit<=3; sit++ ) {
//         if (jump % 2 == 0) break;
//         console.log("присед", sit);
//     }
// }

// while (true){
//     console.log("Ы")
// }

// x = Math.trunc(Math.random() * 6) + 1;
// console.log(x)
// console.log(Math.trunc(x))  // округление вниз
// console.log(Math.ceil(x))  // округление вверх
// console.log(Math.round(x))  // округление математическое
// console.log(x.toFixed(2))

// console.log(1.35.toFixed(20))
// console.log(6.35.toFixed(20))

// document.querySelector(".message").innerText = "Другое сообщение"
// // document.querySelector(".message").style.backgroundColor ="blue";


// document.querySelector(".in1").value = "Принято!"


count_life = document.querySelector(".count_score")
count_record = document.querySelector(".count_record")
computer = 11
life = 20

function game_over(){
    if (life <= 0) {
        alert("Конец")
    }
}

function check_record(){
    console.log()
    if (count_record.innerHTML == "-"){  // первый рекорд
        count_record.innerHTML = 20 - life
    }
    else {  // если рекорд уже есть
        if (count_record.innerHTML > 20 - life) {  // старое значение больше нового
            count_record.innerHTML = 20 - life
        }
    }
}

function ch() {
    inp = document.querySelector(".in1").value
    console.log("inp = ", inp)
    console.log("comp=", computer)
    if (inp > computer) {
        life--
        count_life.innerHTML = life
        game_over()
        
    }
    else if (inp < computer){
        life--
        count_life.innerHTML = life
        game_over()
    }
    else{
        console.log("Угадал")
        check_record()
    }
}










