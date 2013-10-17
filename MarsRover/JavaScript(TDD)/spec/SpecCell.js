describe("Cell", function(){

	var cell;

	beforeEach(function(){
		cell = new Cell(Type.EMPTY);
	});
	it ("should say that cell is not BLOCKED", function(){
		expect(cell.isBlocked()).toBeFalsy();
	});
	it ("should say that cell is Empty", function(){
		expect(cell.isEmpty()).toBeTruthy();
	});


});