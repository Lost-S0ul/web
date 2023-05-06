// function calcAge(){
//     console.log(2023 - l[0]);
//     console.log(2023 - l[1]);
//     console.log(2023 - l[l.length - 1]);
// }

// let l = [1920, 2013, 2020, 1996, 1630];
// calcAge();

// let lst = ["Анон", 13.34, true];
// console.log(lst.push("Хорошее число"));  
// // .push - добавляет элемент и возвращает новую длину  (4 в нашем случае)
// console.log(lst);

// console.log(lst.pop());  
// // удаление последнего элемента и вернется удаленный элемент
// console.log(lst);

// console.log(lst.indexOf("true"));  
// // индекс элемента. -1 если не найден

// console.log(lst.includes("Анон"));  
// // проверка наличия элемента -> true/false

// names = ["dOMINATOR777", "admin", "админ"]

// function qw(){
//     let answ = prompt(`Введите имя`)
//     if(names.includes(answ)==false){  // если элемента нет
//         names.push(answ)  // добавляем
//     }else{  // если элемент есть
//         qw()  // снова вызываем функцию
//     }
// }

// qw()

// let d = {
//     age: [34, 18],
//     names: ["Антон", "Вова"],
//     "Попу мыл?": true,
//     location: "Новосибирск",
//     workPlace: "Movavi"
// };

// // console.log(d["Попу мыл?"]);

// console.log("location" in d)


let person1 = {
    name: "Антон1",
    ves: 66,
    rost: 1.77,
    imt: function(){
        return this.ves / (this.rost**2)
    }
};

let person2 = {
    name: "Антон2",
    ves: 67,
    rost: 1.76,
    imt: function(){
        return this.ves / (this.rost**2)
    }
};

console.log(person1.imt())
console.log(person2.imt())

if (person1.imt() > person2.imt()){
    console.log("Первый потолще будет")
}else{
    console.log("Второй потолще будет")
}

// остановились на 76 слайде










