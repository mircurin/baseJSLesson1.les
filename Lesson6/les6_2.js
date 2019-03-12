/*
function init() {
    console.log("Документ загружен");
}

function init2() {
    console.log("Документ загружен2");
}

//window.onload = init;
window.addEventListener("load", init);
window.addEventListener("load", init2);*/
//******************************************************
/*function init() {
    var $button = document.getElementById("button");

    $button.addEventListener("click", handleButtonClick);
}

function handleButtonClick(event){
    console.log("Вы кликнули по кнопке");
    console.log(event);
}
window.addEventListener("load", init);*/
//********************************************************
/*function init() {
    var $thumbnail = document.getElementById("thumbnail");

    $thumbnail.addEventListener("click", handleThumbnailClick);
}

function handleThumbnailClick(event) {
    event.preventDefault();
    if (event.target.tagName === "IMG"){
        console.log(event.target.tagName);
        var $a = event.target.parentElement;//картинка
        var $path = $a.href;//путь к картинке

        var $preview = document.getElementById("preview");//находим div
        $preview.innerHTML = "";//отчищвем div

        var $img = document.createElement("img"); //Создаем тег img
        $img.src = $path; //Добавляем ссылку в src тега img
        $preview.appendChild($img);
    }
}
window.addEventListener("load", init);*/
//****************************************************************


