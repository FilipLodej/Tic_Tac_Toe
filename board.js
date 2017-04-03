var player = 1;
var moveCounter = 0;
var boardModule = (function () {

    var _createBoard = function (player) {
        for (j = 1; j < 4; j++) {
            var br = document.createElement('br');
            br.id = "odstep";
            var article = document.getElementsByTagName("article")[0];
            article.appendChild(br);
            for (i = 1; i < 4; i++) {
                var canvas = document.createElement('canvas');
                var id = String(j) + String(i);
                canvas.getContext("2d");
                canvas.id = id;
                canvas.width = 100;
                canvas.height = 100;
                canvas.className = "canvas";
                canvas.addEventListener('click', function () {
                    player = gameModule.turn(this.id, player);
                }, false);
                var article = document.getElementsByTagName("article")[0];
                article.appendChild(canvas);
            }
        }
        gameModule.showStartPlayer();
    };


    var _drawX = function (id) {
        var stringId = String(id);
        var canvas = document.getElementById(stringId);
        canvas.className = "occupatedX";
        var ctx = canvas.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 100);
        ctx.moveTo(100, 0);
        ctx.lineTo(0, 100);
        ctx.stroke();
    };

    var _drawO = function (id) {
        var stringId = String(id);
        var canvas = document.getElementById(stringId);
        var ctx = canvas.getContext("2d");
        canvas.className = "occupatedO";
        ctx.beginPath();
        ctx.arc(50, 50, 35, 25, 0, 2 * Math.PI);
        ctx.stroke();
    };


    var _resetGame = function () {
        for (j = 1; j < 4; j++) {
            for (i = 1; i < 4; i++) {
                var id = String(j) + String(i);
                var canvas = document.getElementById(id);
                var ctx = canvas.getContext("2d");
                ctx.beginPath();
                ctx.clearRect(0, 0, 100, 100);
                canvas.className = "canvas";

            }
        }
        return moveCounter = 0;
    };
    var _showPlayer = function (player) {
        var h2 = document.getElementById("player");
        if (player == 1) {
            h2.textContent = "Teraz kolej: X  " + String(moveCounter);
            var text = h2.textContent;
        } else {
            h2.textContent = "Teraz kolej: O  " + String(moveCounter);
            var text = h2.textContent;
        }
    };

    var _newGame = function () {
        for (j = 1; j < 4; j++) {
            var br = document.getElementById("odstep").remove();
            for (i = 1; i < 4; i++) {
                var id = String(j) + String(i);
                var canvas = document.getElementById(id);
                canvas.remove();
            }
        }
        _createBoard(startPlayer);
        _showPlayer(startPlayer);
        winnerCheckerModule.resetTab();
        gameStarted = 1;
        moveCounter = 0;
    };

    var _showHistory = function () {
        var h3x = document.getElementById("xwins");
        var h3o = document.getElementById("owins");
        var h3d = document.getElementById("drawn");
        h3x.innerText = "X wygral:   " + String(historyModule.getTimesXWon());
        h3o.innerText = "O wygralo:   " + String(historyModule.getTimesOWon());
        h3d.innerText = "Remisow:   " + String(historyModule.getTimesWasDraw());
        var text = h3x.textContent;
        var text = h3o.textContent;
        var text = h3d.textContent;

    };
    return {
        createBoard: _createBoard,
        drawX: _drawX,
        drawO: _drawO,
        resetGame: _resetGame,
        showPlayer: _showPlayer,
        newGame: _newGame,
        showHistory: _showHistory
    };
})();






