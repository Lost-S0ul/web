const tabsBtn = document.querySelectorAll(".tab");
const articles = document.querySelectorAll(".content");

tabsBtn.forEach((tab) => {
    tab.addEventListener("click", function () {
        const currentTab = tab;  // сохраняю активный таб
        const id = currentTab.dataset.id;
        console.log(id);


        // убираем active класс у кнопок
        tabsBtn.forEach((btn) => {
            btn.classList.remove("active");
        })
        // добавим active нужной кнопке
        currentTab.classList.add("active");


        // убираем active у контента
        articles.forEach((article) => {
            article.classList.remove("active");
        })
        let element = document.getElementById(id);  // выбрали нужный content
        element.classList.add("active");
    })
    
    
})