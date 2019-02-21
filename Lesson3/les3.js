//***********************************************
//1. С помощью цикла while вывести все
// простые числа в промежутке от 0 до 100.

function flagsimpleNumber(flagSimple, simpleNumber) {
    if (flagSimple === true){
        return console.log("Простое число: " + simpleNumber);
    }
}

function simpleNumberCalc(simpleNumber) {
    var flagSimple;
    for (var i = 2; i < simpleNumber; i++) {
        if (simpleNumber % i === 0) {
            //alert("Не простое!: " + j + " Делитель");
            flagSimple = false;
            break;
        } else {
            flagSimple = true;
        }
    }
    flagsimpleNumber(flagSimple, simpleNumber);
}

var simpleNumber = 0;

while (true) {
    simpleNumberCalc(++simpleNumber);
    if (+simpleNumber === 100) {
        console.log("Выход и игры!");
        break;
    }
}

//***********************************************
//2. С этого урока начинаем работать с
// функционалом интернет-магазина.
// Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости
// корзины в зависимости от находящихся в ней товаров.

//Просто захотел по короче сделать код :)
function randBasket(arrNumber) {
    return Math.round(Math.random() * +arrNumber)
}
//Имитация выбора товара
function userBasketPrice(arrBasket) {
    var basketPrice = [["", "", ""], [10, 20, 30, 40], [1000, 2000, 3000, 5000]];// Вот здесь не знаю что придумать, просто хотел пустой массив по аналогии с arrBasket
    for (var col = 0; col < arrBasket.length; col++) {
        for (var str = 0; str < arrBasket[col].length; str++) {
            basketPrice[col][str] = (arrBasket[col][randBasket(arrBasket[col].length - 1)]);
        }
    }
    return basketPrice;
}
//Расчет корзины товара
function countBasketPrice(basketPrice) {
    var theSum = 0;
    for (var str = 0; str < basketPrice[0].length; str++){
        var col = 0;
        var productName = basketPrice[col][str];
        var quantity = basketPrice[++col][str];
        var price = basketPrice[++col][str];

        console.log(productName + " | " + quantity + " | " + price + " Итого: " + (quantity * price));
        theSum += quantity * price;
    }
    console.log("Общая сумма: " + theSum); //Вывод общей суммы корзины
}

//***********************************************
//3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var arrQuantity = [1, 2, 3, 4];
var arrProduct = ["cofe", "milk", "orange"];
var arrPrice = [100, 200, 300, 500];
var arrBasket = [arrProduct, arrQuantity, arrPrice];

var arrfff = userBasketPrice(arrBasket); //Делаем рандомный выбор товара из arrBasket и вставляем в отдельную переменную

console.log(arrfff); //Посмотрели что получилось

countBasketPrice(arrfff); //Выводим в консоль в читабельном формате и считаем Итого и Общая сумма

//***********************************************
//4.*Вывести с помощью цикла for числа от 0 до 9,
// не используя тело цикла. Выглядеть это должно так:

for (var i = 0; i < 10; i++, console.log(i)){

}

//***********************************************
//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:

for (var i = ""; i.length < 10; i+="*", console.log(i)){

}


