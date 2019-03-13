var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var snake_speed = 500;

var $gameTable;
var $gameField;


var snake = [];
var snakeCoordX;//Координаты головы нашей змейки
var snakeCoordY;//Координаты головы нашей змейки
var snakeInterval;
var direction = "top";//Направление змейки

function init() {
    $gameField = document.getElementById("snake-field");

    document.getElementById("snake-start").addEventListener("click", handleGameStart);
    document.getElementById("snake-renew").addEventListener("click", handleNewGame);

    window.addEventListener("keydown", handleDirectionChange);

    buildGameField();
}
//Обработка нажатия клавиш
function handleDirectionChange(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37:{//влево
            if(direction !== "right") direction = "left";
            break;
        }
        case 38:{//вверх
            if(direction !== "bottom") direction = "top";
            break;
        }
        case 39:{//вправо
            if(direction !== "left") direction = "right";
            break;
        }
        case 40:{//вниз
            if(direction !== "top") direction = "bottom";
            break;
        }
    }
}

//Перемещение змейки
function move() {
    var $newUnit;//Ячейка, в которую змейка должна переместиться

    switch(direction){
        case "top":{
            $newUnit = $gameTable.children[--snakeCoordY].children[snakeCoordX];
            break;
        }
        case "bottom":{
            $newUnit = $gameTable.children[++snakeCoordY].children[snakeCoordX];
            break;
        }
        case "left":{
            $newUnit = $gameTable.children[snakeCoordY].children[--snakeCoordX];
            break;
        }
        case "right":{
            $newUnit = $gameTable.children[snakeCoordY].children[++snakeCoordX];
            break;
        }
    }

    $newUnit.classList.add("snake-unit");//добавляем класс для оформления
    snake.push($newUnit);//добавляем в массив змейки новую ячейку

    var $snakeRemoved = snake.shift();
    $snakeRemoved.classList.remove("snake-unit");
}

//Создаем еду для змейки
function createFood() {
    var foodCreate = false;//пременная для ...

    while (!foodCreate) {
        //Задаем координаты для размещения еды
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        //Находим эту ячейку по координатам
        var $foodCell = $gameTable.children[foodY].children[foodX];

        //Проверяем, является ли эта ячейка змейкой или нет?
        if (!$foodCell.classList.contains("snake-unit")) {
            //Если класс от змейки не нашли, то создаем класс для еды
            $foodCell.classList.add("food-unit");
            foodCreate = true;
        }
    }
}

//Рисуем змейку на поле
function respawn() {
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);
    //голова змейки
    var $snakeHead = $gameTable.children[snakeCoordX].children[snakeCoordY];
    $snakeHead.classList.add("snake-unit");
    //хвост змейки
    var $snakeTail = $gameTable.children[snakeCoordX + 1].children[snakeCoordY];
    $snakeTail.classList.add("snake-unit");
    //вствляем в массив хвост и голову змейки
    snake.push($snakeTail);
    snake.push($snakeHead);

}

function handleGameStart() {
    //Вызываем первичное размещение змейки
    respawn();

    snakeInterval = setInterval(move, snake_speed);
    createFood();
}

function handleNewGame() {
    
}

function buildGameField(){
    $gameTable = document.createElement("table");
    $gameTable.classList.add("game-table");
    
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        var $row = document.createElement("tr");
        $row.classList.add("game-table-row");

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            var $cell = document.createElement("td");
            $cell.classList.add("game-table-cell");
            $row.appendChild($cell);
        }
        $gameTable.appendChild($row);
    }
    $gameField.appendChild($gameTable);
}

window.addEventListener("load", init);
