// Задача 1. Необходимо создать html-страницу с названием 1.html, 
// в которой подключить файл 1.js. 
// В js-файле необходимо создать следующий скрипт:
// Необходимо пользователя попросить ввести температуру в 
// градусах Цельсия, преобразовать введенное пользователем 
// значение в соответствующую температуру в градусах по Фаренгейту 
// и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Округлить значение после расчетов.

const degrees_celsius = parseInt(prompt("Введите температуру в градусах Цельсия"));
const degrees_faringate = (9 / 5) * degrees_celsius + 32;

alert(`Цельсия: ${degrees_celsius} = Фарингейт: ${degrees_faringate.toFixed(1)}`); 
