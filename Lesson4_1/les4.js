//1.Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
// для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение
// с помощью console.log и вернуть пустой объект.

function outputObject(numberObject) {
        return numberObject.hundreds + " " + numberObject.tens + " " + numberObject.units + " "
}

var numberForObject = +prompt("Введите число от 0 до 999: ");

if (numberForObject.length > 3 || isNaN(numberForObject)){
    alert("Вы ввели число длиннее трех символов или это не число!!!");
}
else {
    numberForObject+= "";
    var numberObject = {
        hundreds: numberForObject[0],
        tens: numberForObject[1],
        units: numberForObject[2]
    }
    console.log("Числов виде обЪекта: " + outputObject(numberObject));
}

//2.	Продолжить работу с интернет-магазином:
// a.	В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b.	Реализуйте такие объекты.
// c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.
function userProductChoice(products) {
    var basketPrice = 0;
    for (i = 0; i < products.length; i++)  {
        basketPrice+= products[i].quantitynameProduct * products[i].priceProduct;
    }

    return basketPrice;
}

var products =[
    {
        nameProduct: "Огурец",
        quantitynameProduct: 3,
        priceProduct: 100
    },
    {
        nameProduct: "Помидор",
        quantitynameProduct: 4,
        priceProduct: 200
    },
    {
        nameProduct: "Капуста",
        quantitynameProduct: 5,
        priceProduct: 500
    }
];

console.log("Общая сумма корзины: " + userProductChoice(products));

