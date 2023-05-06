const slides = document.querySelectorAll(".gallery__slide");

slides.forEach((slide) => {
    // Нажатие на каждый слайд
    slide.addEventListener("click", () => {

        // Удаление active у всех слайдов
        slides.forEach((slide) =>{
            slide.classList.remove("active");
        })

        // Добавление active нажатому слайду
        slide.classList.add("active");
    })
})