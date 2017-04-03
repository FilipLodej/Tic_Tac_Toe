describe('Winner-Checker', function () {
    beforeEach(function () {
        spyOn(historyModule, 'oWon');
        spyOn(historyModule, 'xWon');
        spyOn(historyModule, 'wasDraw');
        spyOn(boardModule, 'showHistory');
        spyOn(window, 'alert');

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

    it('should check O Won', function () {
        //given
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="occupatedO"></canvas><canvas id="12" width="100" height="100" class="canvas"></canvas><canvas id="13" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="occupatedX"></canvas><canvas id="22" width="100" height="100" class="occupatedO"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="occupatedX"></canvas><canvas id="32" width="100" height="100" class="canvas"></canvas><canvas id="33" width="100" height="100" class="occupatedO"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        //when     
        var winner = winnerCheckerModule.check(0);
        //then
        expect(0).toBe(winner);
        expect(window.alert).toHaveBeenCalledWith('Gra jest skończona! Wygrywa O');
        winnerCheckerModule.resetTab();
    });

    it('should check X Won', function () {
        //given
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="occupatedX"></canvas><canvas id="12" width="100" height="100" class="canvas"></canvas><canvas id="13" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="occupatedO"></canvas><canvas id="22" width="100" height="100" class="occupatedX"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="occupatedO"></canvas><canvas id="32" width="100" height="100" class="occupatedO"></canvas><canvas id="33" width="100" height="100" class="occupatedX"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        //when     
        var winner = winnerCheckerModule.check(1);
        //then
        expect(1).toBe(winner);
        expect(window.alert).toHaveBeenCalledWith('Gra jest skończona! Wygrywa X');
        winnerCheckerModule.resetTab();
    });

    it('should check draw', function () {
        //given
        moveCounter = 9;
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="occupatedO"></canvas><canvas id="12" width="100" height="100" class="occupatedO"></canvas><canvas id="13" width="100" height="100" class="occupatedX"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="occupatedX"></canvas><canvas id="22" width="100" height="100" class="occupatedO"></canvas><canvas id="23" width="100" height="100" class="occupatedO"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="occupatedO"></canvas><canvas id="32" width="100" height="100" class="occupatedX"></canvas><canvas id="33" width="100" height="100" class="occupatedX"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        //when     
        var winner = winnerCheckerModule.check(1);
        //then
        expect(2).toBe(winner);
        expect(window.alert).toHaveBeenCalledWith('Gra zakończona remisem!');
        winnerCheckerModule.resetTab();
    });

    it('should check where game is not finished', function () {
        //given
        moveCounter = 2;
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="canvas"></canvas><canvas id="12" width="100" height="100" class="canvas"></canvas><canvas id="13" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="canvas"></canvas><canvas id="22" width="100" height="100" class="occupatedX"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="canvas"></canvas><canvas id="32" width="100" height="100" class="occupatedO"></canvas><canvas id="33" width="100" height="100" class="canvas"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        //when     
        var winner = winnerCheckerModule.check(1);
        //then
        expect(-1).toBe(winner);
        winnerCheckerModule.resetTab();
    });

    it('should check that game is over', function () {
        //given
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="canvas"></canvas><canvas id="12" width="100" height="100" class="canvas"></canvas><canvas id="13" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="canvas"></canvas><canvas id="22" width="100" height="100" class="occupatedX"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="canvas"></canvas><canvas id="32" width="100" height="100" class="occupatedO"></canvas><canvas id="33" width="100" height="100" class="canvas"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        moveCounter = 9;
        //when     
        var isOver = winnerCheckerModule.isOver();
        //then
        expect(true).toBe(isOver);
        expect(window.alert).toHaveBeenCalledWith('Gra zakończona!');
    });
})