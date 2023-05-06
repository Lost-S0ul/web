// const  teacher = {
//   firstName : "Антон",
//   birthYear: 1999,
//   calcAge: function(){
//     this.age = 2023 - this.birthYear;  // добавили свойство
//     return this.age
//     },
// };

// console.log(teacher.calcAge());
// delete teacher.firstName;  // удалили свойство
// console.log(teacher);

// console.log("birthYear" in teacher)
// console.log("birthYears" in teacher)
// if ("birthYear" in teacher){  // проверка наличия
//   console.log("Есть такое")
// }

// let chel1 = {
//   imya: "Антон",
//   rost: 1.75,
//   ves: 70,
//   calcImt: function(){
//     this.imt = this.ves / this.rost ** 2
//     return this.imt
//   }
// }

// let chel2 = {
//   imya: "Антон2",
//   rost: 1.70,
//   ves: 65,
//   calcImt: function(){
//     this.imt = this.ves / this.rost ** 2
//     return this.imt
//   }
// }

// imt1 = chel1.calcImt();
// imt2 = chel2.calcImt();

// if (imt1 > imt2){
//   console.log(chel1.imya + " победил по жиру")
// }else if (imt1 < imt2){
//   console.log(chel2.imya + " победил по жиру")
// }else{
//   console.log("Ничья")
// }

// for( let jump=1; jump<=10; jump++ ){
//   console.log("Прыг " + jump) ;
// }

// l = [1, 3, 5, 6, 10, 34]
// for (let j = 0; j < l.length; j++){
//   console.log(l[j])
// }

let birthdays = [1920,2013,2020,1996,1630];
// let ages = [];

// for (let j = 0; j < birthdays.length; j++){
//   ages.push(2023 - birthdays[j]);
// }

// console.log(ages);


for (let j = birthdays.length - 1; j >= 0; j--){
  console.log(birthdays[j])
}

// со 92 слайда(break, continue)

