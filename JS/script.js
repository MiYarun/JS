"use strict";
// ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ
// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("вам есть 18?", "");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// ИНТЕРПОЛЯЦИЯ  (интерполяция — это способ вставить переменные или выражения внутрь строки.)
// let name = "anne";
// console.log(`hello, ${name}!`);

// ОПЕРАТОРЫ в JS
// console.log("arr" + "-object");
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// incr++; increment → увеличить '++' —(увеличение на 1)
// decr--; decrement → уменьшить '--'-(уменьшение на 1)
//  Префиксный (++x / --x)
// Сначала увеличивает/уменьшает значение, затем возвращает результат.

// Постфиксный (x++ / x--)
// Сначала возвращает старое значение, а потом увеличивает/уменьшает.

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 4 === 8);

// && амперсанты (и то, и то)
// || (или)

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || isClose);

//  console.log(isChecked && isClose);

//  console.log(isChecked || !isClose); оператор отрицания '!'

// 1 Задание

const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
//1ый способ (for)
for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Насколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
// 2ой способ(while...)
let i = 0;
while (i < 2) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Насколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
    i++;
  } else {
    console.log("error");
  }
}

// 3ий способ(do...while)
let i = 0;
do {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Насколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
    i++;
  } else {
    console.log("error");
  }
} while (i < 2);

if (personalMovieDB.count <= 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// let result = '';
// const lenght = 7;

// for (let i=1; i<lenght; i++){
//   for(let j =0; j<i; j++){

//     result += "*";
//   }
//   result += '\n';
// }

// // console.log(result);
// for (let i=0; i<3; i++){
//   let row = "";
//  for (let j=0; j<4; j++){
//   row +='*';
//  }
//  console.log(row);
// }

// Задание 2
// 1
// for (let i=5; i<=10;i++)
// console.log(i);

// 2
// for (let i=20; i>=10; i--){
//     if (i===13){
//         break;
//     }
//     console.log(i);
// }

// 3
// for (let i=2; i<=10;i++){
//     if (i % 2===0){
//         console.log(i)
//     }
// }

// 4
// let i=2;
// while (i<=16){
//     if (i % 2===0){
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// 5
// array-массив
// let arr = [];
// let num = 5;
// for (let i = 0; i<=5; i++){
//     arr[i] = num;
//     num++;
// }
// console.log(arr);
// .....
// let arr = [];
// arr[0]=5;
// arr[1]=6;
// arr[2]=7;
// arr[3]=8;
// arr[4]=9;
// arr[5]=10;
// console.log(arr);
// ......
// const arrayOfNumbers = [];

// for (let i = 5; i<=10; i++){
//     arrayOfNumbers[i-5] = i;
// }
// console.log(arrayOfNumbers);

// Задание 3
// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i=0; i<arr.length; i++){
//         result[i]=arr[i];
//     }
// console.log(result);

// ......
//  const data = [5, 10, 'Shopping', 20, 'Homework'];
//  for (let i=0; i<data.length; i++){
//     if(typeof data[i]==='number'){
//         data[i] = data[i]*2;
//     }else if (typeof data[i]==='string'){
//         data[i]=data[i]+ '-done'
//     }
//  }
// console.log(data);
// ...........
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];  // создаём пустой массив для результата

// for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
// }

// console.log(result);

// ...Задание со*
// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i=0; i<lines; i++) {
//     for (let j=0; j<lines-i-1; j++){
//         result += ' ';
//     }

// for (let k=0;k<2*i+1;k++){
//     result += '*';
// }
// result += '\n';
// }
//     console.log(result);
