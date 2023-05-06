const drumBtn = document.querySelectorAll(".drum");
const numberBtn = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberBtn; i++){
    // Нажатие кнопки
    drumBtn[i].addEventListener("click", function() {
        // получаем букву
        const btnInnerHtml = drumBtn[i].innerHTML;
        makeSound(btnInnerHtml);
    }) 
}

document.addEventListener("keydown", function (event){
    makeSound(event.key)
})

const makeSound = (key) => {
    switch(key) {
        case "w":
            const high_sound = new Audio("sounds/high.mp3");
            high_sound.play();
            break;
        default:
            console.log(`Выбранный элемент (${key})не существует.`)
    }
}
