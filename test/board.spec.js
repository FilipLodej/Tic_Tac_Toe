describe('Board', function () {
    beforeEach(function () {
        var fixture = '<article></article>';
        document.body.insertAdjacentHTML('afterbegin', fixture);
    })
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