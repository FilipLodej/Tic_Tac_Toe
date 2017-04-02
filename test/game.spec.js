describe('Game', function () {
    beforeEach(function () {
        spyOn(boardModule, 'showPlayer');
    })

    it('should call drawX method', function () {
        //given

        spyOn(boardModule, 'drawX');
        //when     
        var player = gameModule.turn(11, 1);
        //then
        expect(player).toBe(0);
        expect(boardModule.drawX).toHaveBeenCalled();
    });

    it('should call drawO method', function () {
        //given

        spyOn(boardModule, 'drawO');
        //when     
        var player = gameModule.turn(11, 0);
        //then
        expect(player).toBe(1);
        expect(boardModule.drawO).toHaveBeenCalled();
    });
})