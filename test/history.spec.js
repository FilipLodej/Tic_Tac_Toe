describe('History', function () {

    it('should check add xwon game to history', function () {
        //given
        //when
        historyModule.xWon();
        var xwon = historyModule.getTimesXWon();
        //then
        expect(1).toBe(xwon);
    });

    it('should check add owon game to history', function () {
        //given
        //when
        historyModule.oWon();
        var owon = historyModule.getTimesOWon();
        //then
        expect(1).toBe(owon);
    });

        it('should check add draw game to history', function () {
        //given
        //when
        historyModule.wasDraw();
        var draw = historyModule.getTimesWasDraw();
        //then
        expect(1).toBe(draw);
    });
})
