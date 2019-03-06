//1. Создать функцию, генерирующую шахматную доску.
// При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом,
// т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8,
// столбцы – латинскими буквами A, B, C, D, E, F, G, H.

function numbers(lettersContainer, elementDiv, elementDivName) { //расставляем цыфры
    var $lettersContainer = document.getElementsByClassName(lettersContainer);
    for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 8; i++) {
            var $div = document.createElement(elementDiv);
            $div.className = elementDivName;
            $div.innerHTML = i + 1;
            $lettersContainer[j].appendChild($div);
        }
    }
}

function letters(elementUnit, elementDiv, elementDivName) { //расставляем буквы
    var $lettersContainer = document.getElementsByClassName(elementUnit);
    lett = 'abcdefgh'.split('');
    for (var j = 0; j < 2; j++) {
        for (var i = 0; i < lett.length; i++) {
            var $div = document.createElement(elementDiv);
            $div.className = elementDivName;
            $div.innerHTML = lett[i];
            $lettersContainer[j].appendChild($div);
        }
    }
}

function BoardCell(elementUnit, elementDiv, elementDivNameWhite, chessBoardCellChocolate) {//расставляем цвета
    var $chessBoard = document.getElementsByClassName(elementUnit);
    for (var j = 0; j < 8; j++){
        for(var i = 0; i < 8; i++) {
            var $div = document.createElement(elementDiv);
            if (colorCell (j, i)) {//отбор по строке, если true то белый
                $div.className = elementDivNameWhite;
                $chessBoard[0].appendChild($div);
            } else {
                $div.className = chessBoardCellChocolate;
                $chessBoard[0].appendChild($div);
            }
        }
    }
}

function colorCell(j, i){ //отбор по строке, если true то белый
    if (j % 2 === 0) {
        if (i % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        if (!(i % 2 === 0)) {
            return true;
        } else {
            return false;
        }
    }
}

letters("lettersContainer", "div", "lettersUnits"); //Расставляем буквы
numbers("numbersContainer", "div", "numbersUnits"); //Расставляем цыфры
BoardCell("chessBoard", "div", "chessBoardCellWhite", "chessBoardCellChocolate"); //расставляем ячейки с цветами на тоску
