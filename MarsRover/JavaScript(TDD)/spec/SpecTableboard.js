describe("TableBoard", function(){

	var tableBoard;

	beforeEach(function(){
		tableBoard = new TableBoard(10,10);
	});
	it ("should create a 10x10 tableBoard", function(){
		expect(tableBoard.getTable().length).toEqual(10);
		for (i=0; i < tableBoard.getTable().length; i++){
        	for (j=0; j < tableBoard.getTable()[i].length; j++){
				expect(tableBoard.getTable()[i].length).toEqual(10);
        	}
    	}
	});
	it ("should check if it is filled with a consistent cell states", function(){
		tableBoard.initRandomBoard();
		for (i=0; i < tableBoard.getTable().length; i++){
        	for (j=0; j < tableBoard.getTable()[i].length; j++){
				expect(tableBoard.getTable()[2][3].cellType).toBeDefined();
        	}
    	}

    	
	});
	


});