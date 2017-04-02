
var gameStarted = 1;
var startPlayer = 0;
var gameModule = (function () {

    var _turn = function (id, player) {
        var occuO = "occupatedO";
        var occuX = "occupatedX";
        if (document.getElementById(id).className == occuO || document.getElementById(id).className == occuX) {
            window.alert("To pole jest już zajęte!");
            return player = player;
        } else {
            if (player == 1) {
                boardModule.drawX(id);
                player = 0;
                moveCounter++;
                boardModule.showPlayer(0);
                winnerCheckerModule.isOver();
                return player;
                
            } else {
                boardModule.drawO(id);
                player = 1;
                moveCounter++;
                boardModule.showPlayer(1);
                winnerCheckerModule.isOver();
                return player;
                
            }
        }

    };
    var _switchPlayer = function () {
        if (startPlayer == 0) {
            startPlayer = 1;
        } else {
            startPlayer = 0;
        }
        return _showStartPlayer();
    };

    var _showStartPlayer = function () {
        var h2 = document.getElementById("next");
        if (startPlayer == 1) {
            h2.textContent = "Nastepna gre rozpoczyna: X";
            var text = h2.textContent;
        } else {
            h2.textContent = "Nastepna gre rozpoczyna: O";
            var text = h2.textContent;
        }
    }

    return {
        turn: _turn,
        switchPlayer: _switchPlayer,
        showStartPlayer: _showStartPlayer
    };
})();

