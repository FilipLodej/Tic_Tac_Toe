

var winnerCheckerModule = (function () {
    var _tab = [];

    var _getTab = function (index) {
        return _tab[index];
    }
    var _isOver = function () {
        if (moveCounter == 9) {
            window.alert("Gra zakończona!");
            gameStarted = 0;
            historyModule.wasDraw();
        }
    };
    var _check = function (player) {
        var classX = "occupatedX";
        var classO = "occupatedO";
        for (j = 1; j < 4; j++) {
            for (i = 1; i < 4; i++) {
                var id = String(j) + String(i);
                var canvas = document.getElementById(id);
                _tab.push(canvas);
            }
        }
        if (_checkLine(0, 1, 2) || _checkLine(3, 4, 5) || _checkLine(6, 7, 8) ||
            _checkLine(0, 3, 6) || _checkLine(1, 4, 7) || _checkLine(2, 5, 8) ||
            _checkLine(0, 4, 8) || _checkLine(6, 4, 2)) {
            if (player == 1) {
                window.alert("Gra jest skończona! Wygrywa X");
                gameStarted = 0;
                historyModule.xWon();
                boardModule.showHistory();
            } else {
                window.alert("Gra jest skończona! Wygrywa O");
                gameStarted = 0;
                historyModule.oWon();
                boardModule.showHistory();
            }
        } else {
            if (moveCounter == 9) {
                window.alert("Gra zakończona remisem!");
                gameStarted = 0;
                historyModule.wasDraw();
                boardModule.showHistory();
            }
        }
    };

    var _checkLine = function (id1, id2, id3) {
        return _tab[id1].className != 'canvas'
            && _tab[id1].className == _tab[id2].className
            && _tab[id2].className == _tab[id3].className
    }

    var _resetTab = function () {
        _tab = [];
    }

    // var _checkOrto = function () {
    //     var classX = "occupatedX";
    //     var classO = "occupatedO";
    //     for (j = 1; j < 4; j++) {
    //         for (i = 1; i < 4; i++) {
    //             var id = String(j) + String(i);
    //             if (i == 1) {
    //                 var nextId = String(j) + String(i + 1);
    //                 var secondNextId = String(j) + String(i + 2);
    //                 var canvas = document.getElementById(id);
    //                 var nextCanvas = document.getElementById(nextId);
    //                 var secondNextCanvas = document.getElementById(secondNextId);
    //                 if (_isOver && canvas.className == nextCanvas.className == secondNextCanvas.className) {
    //                     if (canvas.className == classO) {
    //                         windows.alert("Wygrał zawodnik: O");
    //                     } else {
    //                         windows.alert("Wygrał zawodnik: X");
    //                     }
    //                 }
    //             }
    //             var nextId = String(j) + String(i + 1);
    //             var previousId = String(j) + String(i - 1);
    //             var canvas = document.getElementById(id);

    //             canvas.getContext("2d");
    //             canvas.id = id;
    //             canvas.width = 100;
    //             canvas.height = 100;
    //             canvas.className = "canvas";
    //             canvas.addEventListener('click', function () {
    //                 player = gameModule.turn(this.id, player);
    //             }, false);
    //             var article = document.getElementsByTagName("article")[0];
    //             article.appendChild(canvas);
    //         }
    //     }
    //     gameModule.showStartPlayer();
    // };
    return {
        isOver: _isOver,
        check: _check,
        tab: _getTab,
        resetTab: _resetTab
    };
})();