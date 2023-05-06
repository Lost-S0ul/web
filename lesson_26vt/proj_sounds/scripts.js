const lBtn = document.querySelectorAll(".letter");  // сохраняем все кнопочки
const number =  lBtn.length;

for (let i = 0; i < number; i++) {
    lBtn[i].addEventListener("click", function(event){
        const bIH = lBtn[i].innerHTML;  // получаем нажатую букву
        makeSound(bIH);  // ГПЕ
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
})

const makeSound = (key) => {
    switch (key){
        case "A":
            const letA = new Audio("sounds/A.mp3");
            letA.play();
            break;
        case "Б":
            const letB = new Audio("sounds/Б.mp3");
            letB.play();
            break;
    }
}


