const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

next.addEventListener("click", () =>{
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
})

prev.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
})