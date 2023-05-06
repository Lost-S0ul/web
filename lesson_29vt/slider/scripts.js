const container_slides = document.querySelector(".slide_container");
const slide = document.querySelector(".slide");



const prev = document.getElementById("prev");
const next = document.getElementById("next");



next.addEventListener("click", () => {
    const slide_width = slide.clientWidth;
    // console.log(slide_width);

    container_slides.scrollLeft += slide_width;
})

prev.addEventListener("click", () => {
    const slide_width = slide.clientWidth;
    // console.log(slide_width);

    container_slides.scrollLeft -= slide_width;
})

