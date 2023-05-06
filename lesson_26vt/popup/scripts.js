const modalBtns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
const closeModal = () => {
    modal.classList.add("hidden");  // добавление класса элементу
}

modalBtns.forEach((btn) =>{
    btn.addEventListener("click", function(){
        modal.classList.remove("hidden"); 
    })
})

close.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
    if (!modal.classList.contains("hidden") && e.key == "Escape") {
        closeModal(); 
    }
})
