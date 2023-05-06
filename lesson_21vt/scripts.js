// l = [3, 7, 11];
// console.log(l);
// console.log(l.length); // вывод длины массива
// console.log(l[l.length - 1])

// function calcAge(){
//     console.log(now - dates[0])
//     console.log(now - dates[1])
//     console.log(now - dates[dates.length - 1])
// }

// now = 2023;
// dates = [1920, 2013, 2020, 1996, 1630];
// calcAge();

// let l = [1, 3, "F", true, "Ширина"];
// let len = l.push("Кукумбер"); // добавление в конец.
// // .push возвращает новую длину
// console.log(l);

// let deleted = l.pop();  // удаляет последний элемент
// // .pop возвращает удаленный элемент
// console.log(l);

// l.unshift("Ноль");  // добавляет в начало
// console.log(l);

// l.shift();  // удалить первый
// console.log(l);

// console.log(l.indexOf(true)); //  индекс элемента
// console.log(l.indexOf("Антон")); //  ненайденный индекс даст -1

// console.log(l.includes("F"))  // элемент включен -> true, иначе false

// names = ["Антон", "Админ", "Admin", "Dominator"]

// value2 = "Ы"

// const object ={
//     key1: "value1",
//     key2: value2,
//     "key3 example": "value3"
//     }

// console.log(object)
// console.log(object.key1)
// console.log(object["key3 example"])  // если ключи из нескольких слов, то только так
    
const commonPart ="Name";
const  teacher = {
    firstName: "Диана", 
    lastName: "Середа",
    hasDriverLicense: false,
    calcAge: function(birthYear){
            return 2023 - birthYear;
        },

};
console.log(teacher["first" + commonPart])  // сложенная строка в кач-ве ключа

// добавить запись в объект
// teacher.location = "Новосибирск";  // можно так
teacher["location"] = "Новосибирск"; // или можно так
console.log(teacher);


let l = [3, 5, 15]
console.log(l)