

var winnerCheckerModule = (function () {
    var _tab = [];

    var _getTab = function (index) {
        return _tab[index];
    }
    var _isOver = function () {
        if (moveCounter == 9) {
            window.alert("Gra zakończona!");
            gameStarted = 0;
            return gameStarted;
        }
    };
    var _check = function () {
        var classX = "occupatedX";
        var classO = "occupatedO";
        if (gameStarted == 0) {
            for (j = 1; j < 4; j++) {
                for (i = 1; i < 4; i++) {
                    var id = String(j) + String(i);
                    var canvas = document.getElementById(id);
                    _tab.push(canvas);
                }
            }
            if (_tab[0].className == _tab[1].className && _tab[1].className == _tab[2].className ||
                _tab[3].className == _tab[4].className && _tab[4].className == _tab[5].className ||
                _tab[6].className == _tab[7].className && _tab[7].className == _tab[8].className ||
                _tab[0].className == _tab[3].className && _tab[3].className == _tab[6].className ||
                _tab[1].className == _tab[4].className && _tab[4].className == _tab[7].className ||
                _tab[2].className == _tab[5].className && _tab[5].className == _tab[8].className ||
                _tab[0].className == _tab[4].className && _tab[4].className == _tab[8].className ||
                _tab[6].className == _tab[4].className && _tab[4].className == _tab[6].className ) {
                    
            }
        }
    };

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
        tab: _getTab
    };
})();