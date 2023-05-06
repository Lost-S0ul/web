const btnShowModal = document.querySelectorAll(".btn");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

const closeModal = () => {
    // закрытие модального окна (+ .hidden)
    modal.classList.add("hidden");
}

btnShowModal.forEach((btn) => {
    btn.addEventListener("click", function() {
        modal.classList.remove("hidden")
    })
})

close.addEventListener("click", closeModal)


document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})

