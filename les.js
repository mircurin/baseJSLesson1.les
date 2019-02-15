var tempCentigrade;
var tempFahrenheit = 33.8;
tempCentigrade = prompt("Вводите температуру по цельсию: ");
alert("Перевожу Цельсия в Фаренгейт: " + (tempCentigrade * tempFahrenheit));

//******************************************

var name = "Вася";
var admin;
admin = name;
alert("А вот и " + admin + " приехал!");

//******************************************
alert("Чему будет равно JS-выражение 1000 + \"108\": ");
var per = 1000 + "108";
alert("В данном случае Число + Cтрока = Строка: " + per);