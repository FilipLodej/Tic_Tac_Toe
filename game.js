
var gameStarted = 1;
var startPlayer = 0;
var gameModule = (function () {

    var _turn = function (id, player) {
        var occuO = "occupatedO";
        var occuX = "occupatedX";
       if(gameStarted==1){
        if (document.getElementById(id).className == occuO || document.getElementById(id).className == occuX) {
            window.alert("To pole jest już zajęte!");       
        } else {
            if (player == 1) {
                boardModule.drawX(id);
            } else {
                boardModule.drawO(id);
            }
            moveCounter++;
            winnerCheckerModule.check(player);
            player = _switchPlayer(player);
            boardModule.showPlayer(player);
            // winnerCheckerModule.isOver();
        }
       }else{
           window.alert("Gra jest już skończona!");
       }
       return player;
    };

    var _switchPlayer = function (player) {
        if (player == 0) {
            player = 1;
        } else {
            player = 0;
        }
        return player;
    };

    var _switchStartPlayer = function () {
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
        switchStartPlayer: _switchStartPlayer,
        showStartPlayer: _showStartPlayer,

    };
})();

