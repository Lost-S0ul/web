"use strict";

// let stroka = "Hellow orld";
// console.log(typeof stroka);
// console.log(typeof 42);
// console.log(typeof 42.4);
// console.log(typeof true);

// console.log(`${stroka} я январь`);


// let color =  prompt("Какой твой любимый цвет?");
// alert(`Пользователь ответил - ${ color }`);


// let w = 65;
// let h = 177;
// imt1 = w / (h**2);

// let w1 = 60;
// let h1 = 177;
// imt2 = w1 / (h1**2);

// alert(imt1 > imt2);


// const name = "Иван";
// const job = "учитель";
// const firstJobYear = 2014;
// const today =2023;
// console.log(`Прошу внимания, это ваш новый ${job}, ${name}. Его стаж работы ${today - firstJobYear} лет`)



// const age = prompt( "Сколько вам лет? ");
// if(age>=18){
// alert( "Да, вы можете получить права");
// }else{
// alert( `Простите, но вам еще рано. Приходите через ${18 - age} лет`);
// }


// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
//   }

// var days = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
//   ];
//   var d = new Date();
//   var n = d.getDay();
//   console.log(days[n]);


let hasFinishedEducation = false; 
const passFinalTest = true;
 //Если условие верно то изменить переменную hasFinishedEducation на true
if(passFinalTest) hasFinishedEducation=true; //ошибка в переменной hasFinishedEducation
 
//Если условие верно то вывести текст
if(hasFinishedEducation) console.log("Поздравляем! Ты закончил обучение!");
