var products = [
    {
        cover: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi14t2zxfzgAhWKt4sKHSUcD3YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.proza.ru%2F2014%2F12%2F21%2F1235&psig=AOvVaw0qIylSWN7ZnfWY559V8GCz&ust=1552478004390921",
        name: "product 1",
        price: 70000
    },
    {
        cover: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjqo5G9xfzgAhVmqIsKHTyvB0UQjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Fostankincat&psig=AOvVaw0qIylSWN7ZnfWY559V8GCz&ust=1552478004390921",
        name: "product 2",
        price: 50000
    },
    {
        cover: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjfktbMxfzgAhWBposKHdHlBIAQjRx6BAgBEAU&url=http%3A%2F%2Fpitomzy.com%2Ftag%2F%25D0%259A%25D0%25BE%25D1%2582%2F&psig=AOvVaw0qIylSWN7ZnfWY559V8GCz&ust=1552478004390921",
        name: "product 3",
        price: 60000
    }
];

var cart = [];

var $cart = document.getElementById("cart");
var $catalog = document.getElementById("catalog");

$catalog.addEventListener("click", handleByClick);

function getProductIndex(name) {
    var idx = -1;// -1 обозначает что не найдено
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    return idx; // Возвращаем индекс найденого товара, Если индекс не найдет то -1
}

function handleByClick(event) {

    console.log(event.target.id);///

    if (event.target.tagName === "BUTTON") {//Убеждаемся что это BUTTON
        buttonFlag = buttonAddorDel(event);//Проверка на id button
        console.log(buttonFlag);///
        var $product = event.target.parentElement;
        var name = $product.querySelector(".title").textContent;
        var price = +$product.querySelector(".price").textContent;

        var idx = getProductIndex(name);

        if (idx === -1) {//если товара еще нет в cart( в Корзине)
            //Товара нет в корзине cart, то добавляем этот товар в корзину
            productAddorAlert(buttonFlag, price, name);
        } else {
            //Обращаемся к товару в корзине по индексу и увеличиваем его количество
            productquantity(buttonFlag, idx);
        }
        console.log(cart);
        buildTotal(cart);
    }
}

function productquantity(buttonFlag, idx) {
    if (buttonFlag) {
        cart[idx].quantity++;
    } else {
        cart[idx].quantity--;
        if (cart[idx].quantity === 0) {//Проверяем на количество. Если количество = 0, то удаляем запись из массива
            cart.splice(idx, 1);
        }
    }
}

function productAddorAlert(buttonFlag, price, name) {
    if (buttonFlag) {
        cart.push({name: name, price: price, quantity: 1});
    } else {
        alert("В корзине такой товар отсутствует!");
    }
}

function buttonAddorDel(buttonEvent) {
    return buttonEvent.target.id === "addProduct";
}

function buildTotal(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].quantity;
    }

    if (cart.length === 0) {
        $cart.textContent = "Корзина пуста!";
    } else {
        $cart.textContent = "Сумма товаров в корзине: " + sum + " рублей.";
    }
}

function buildCatalog(products) {
    //Пробекаемся по списку товаров
    for (var i = 0; i < products.length; i++) {
        //копируем всю разметку шаблона в $template
        var $template = document.getElementById("template").children[0].cloneNode(true);
        $template.querySelector(".title").textContent = products[i].name;
        $template.querySelector(".price").textContent = products[i].price;
        $catalog.appendChild($template);
    }
}

buildCatalog(products);
buildTotal(cart);