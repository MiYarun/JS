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
const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("Насколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("Насколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
