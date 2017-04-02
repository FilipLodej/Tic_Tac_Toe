describe('Winner-Checker', function () {
    beforeEach(function () {
        spyOn(historyModule, 'oWon');
        spyOn(boardModule, 'showHistory');
        

    })

    it('should check O Won', function () {
        //given
        var fixture = '<article><br id="odstep"><canvas id="11" width="100" height="100" class="occupatedX"></canvas><canvas id="12" width="100" height="100" class="occupatedO"></canvas><canvas id="13" width="100" height="100" class="occupatedX"></canvas><br id="odstep"><canvas id="21" width="100" height="100" class="occupatedO"></canvas><canvas id="22" width="100" height="100" class="occupatedO"></canvas><canvas id="23" width="100" height="100" class="canvas"></canvas><br id="odstep"><canvas id="31" width="100" height="100" class="canvas"></canvas><canvas id="32" width="100" height="100" class="occupatedO"></canvas><canvas id="33" width="100" height="100" class="occupatedX"></canvas></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
        //when     
        var winner = winnerCheckerModule.check(0);
        //then
        expect(winner).toBe(0);
    });
})