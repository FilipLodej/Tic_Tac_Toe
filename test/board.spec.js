describe('Board', function () {
    beforeEach(function () {
        var fixture = '<article></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
    })

    it('should create nine canvas element', function () {
        //given
        spyOn(gameModule, 'showStartPlayer');
        boardModule.createBoard(0);
        //when     
        var tab = document.getElementsByClassName("canvas");
        //then
        expect(tab.length).toBe(9);
    });
})