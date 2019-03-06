var products = [
    {
        name: "",
        price: "",
        number:""
    },
];
var $subTotal = document.getElementById("SubTotal");
var $main = document.getElementById("main");

$main.addEventListener('click', handleAddClick);

function handleAddClick(event) {
    if(event.target.tagName === "BUTTON") {
        var $parent = event.target.parentNode;
        var $NameProduct = $parent.parentNode.getElementsByClassName("descrProduct")[0].textContent;
        var $priceProduct = $parent.parentNode.getElementsByClassName("priceProduct")[0].textContent;
        var $numbersProduct = $parent.parentNode.getElementsByClassName("numbersProduct")[0].textContent;

        var i = 0;
        console.log($NameProduct);
        while (true) {
            if ($NameProduct!==products[i++].name){
                products.push({ name: $NameProduct, price: $priceProduct, number: $numbersProduct});
                buildList(products);
            } else break;
        }
    }
}

function buildList(endPrice) {
    $subTotal.innerHTML = '';

    for(var i = 1; i < products.length; i++) {
        var $span = document.createElement("span");
        $span.textContent = endPrice[i].name + " | " + endPrice[i].price + " | " + endPrice[i].number;
        $subTotal.appendChild($span);
    }
}
