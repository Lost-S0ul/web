allSlides = document.querySelectorAll(".gallery_slide");

allSlides.forEach((slide) => {
    slide.addEventListener("click", () => {
        clearAll()
        slide.classList.add("active")
    })
    

})

function clearAll(){
    allSlides.forEach((slide) => {
        slide.classList.remove("active")
    })
}

