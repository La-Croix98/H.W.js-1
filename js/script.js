"use strict"

// Задание 1

let userName = prompt("Введите ваше имя");
let userSurname = prompt("Введите вашу фамилию");
let userAge = prompt("Введите ваш возраст");

let result;
console.log(userSurname + " " + userName);

result = prompt("Решите пример: 10+35");
console.log("10 + 35 = " + (10+35) + " Ваш ответ: " + result);

result = prompt("Решите пример: 35-10");
console.log("35 - 10 = " + (35-10) + " Ваш ответ: " + result);

result = prompt("Решите пример: 35:10");
console.log("35 / 10 = " + (35/10) + " Ваш ответ: " + result);

result = prompt("Найдите остаток от деления: 35:10");
console.log("Ответ: " + (35%10) + " Ваш ответ: " + result);

alert("Зайдите в консоль для просмотра результатов");

// Задание 2

let X, Y, Z, res;

X = +prompt("Введите первое число");
Y = +prompt("Введите второе число");
Z = +prompt("Введите третье число");

res = (X+Y+Z)/3;

alert( "Среднее арифметическое ваших числел: " + res );