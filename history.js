
var historyModule = (function() {
    var _winsX = 0;
    var _winsO = 0;
    var _draws = 0;

    var _xWon = function(){
        _winsX++;
    }

    var _oWon = function(){
        _winsO++;
    }

    var _wasDraw = function(){
        _draws++;
    }

    var _getTimesXWon = function(){
        return _winsX;
    }

    var _getTimesOWon = function(){
        return _winsO;
    }

    var _getTimesWasDraw = function(){
        return _draws;
    }

    return {
        xWon: _xWon,
        oWon: _oWon,
        wasDraw: _wasDraw,
        getTimesXWon: _getTimesXWon,
        getTimesOWon: _getTimesOWon,
        getTimesWasDraw: _getTimesWasDraw
    }
})();
