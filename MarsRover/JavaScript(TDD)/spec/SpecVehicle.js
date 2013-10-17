describe("Vehicle", function(){

	var vehicle;
	var position;

	beforeEach(function(){

		position = new Position(0,0,'EAST');
		movementRate = 1;
		vehicle = new Vehicle(position,1);
	});
	it ("vehicle correctly positioned", function(){
		expect(vehicle.getCurrentPosition().getCoordinateX()).toEqual(0);
		expect(vehicle.getCurrentPosition().getCoordinateX()).toEqual(0);
	});
	it ("vehicle correctly directioned", function(){
		expect(vehicle.getCurrentPosition().getMapOrientation()).toEqual('EAST');

	});
	it ("vehicle correctly turned left", function(){
		vehicle.turnLeft()
		expect(vehicle.getCurrentPosition().getMapOrientation()).toEqual('NORTH');

	});
	it ("vehicle correctly turned right", function(){
		vehicle.turnRight()
		expect(vehicle.getCurrentPosition().getMapOrientation()).toEqual('SOUTH');

	});
	

});