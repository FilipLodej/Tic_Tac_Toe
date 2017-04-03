describe('Game', function () {
    beforeEach(function () {
        spyOn(boardModule, 'showPlayer');
        spyOn(gameModule, 'showStartPlayer');
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="canvas"></canvas><canvas id="12" width="100" height="100" class="canvas"></canvas><canvas id="13" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="canvas"></canvas><canvas id="22" width="100" height="100" class="canvas"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="canvas"></canvas><canvas id="32" width="100" height="100" class="canvas"></canvas><canvas id="33" width="100" height="100" class="canvas"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    afterEach(function () {
        for (j = 1; j < 4; j++) {
            var br = document.getElementById("odstep").remove();
            for (i = 1; i < 4; i++) {
                var id = String(j) + String(i);
                var canvas = document.getElementById(id);
                canvas.remove();
            }
        }
    });


    it('should call drawX method', function () {
        //given
        spyOn(boardModule, 'drawX');
        //when     
        var player = gameModule.turn(11, 1);
        //then
        expect(player).toBe(0);
        expect(boardModule.drawX).toHaveBeenCalled();
        winnerCheckerModule.resetTab();
    });

    it('should call drawO method', function () {
        //given
        spyOn(boardModule, 'drawO');
        //when     
        var player = gameModule.turn(11, 0);
        //then
        expect(player).toBe(1);
        expect(boardModule.drawO).toHaveBeenCalled();
        winnerCheckerModule.resetTab();
    });

        it('should switch start player', function () {
        //given
        //when     
        gameModule.switchStartPlayer();
        //then
        expect(1).toBe(startPlayer);
    });
})