describe("MarsTerrain", function(){

	var marsTerrain;

	beforeEach(function(){
		marsTerrain = new MarsTerrain();
	});
	it ("Moves correctly forward if it can", function(){
		expect(true).toBeTruthy();
		var destiny = marsTerrain.calcForwardDestiny();

		marsTerrain.moveVehicle(destiny);

		if (marsTerrain.isApplicable(destiny)){
				expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateX()).toEqual(1);
				expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateY()).toEqual(0);
		}else{
			expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateX()).toEqual(0);
			expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateY()).toEqual(0);
		}
	

	});
	it ("Moves correctly backwards", function(){
				
		
		var  position = new Position(1,0,'EAST');
		marsTerrain.getVehicle().setVehiclePosition(position);
		var destiny = marsTerrain.calcBackwardDestiny();
		
		marsTerrain.moveVehicle(destiny);


		if (marsTerrain.isApplicable(destiny)){
				expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateX()).toEqual(0);
				expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateY()).toEqual(0);
		}else{
			expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateX()).toEqual(1);
			expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateY()).toEqual(0);
		}
		
	});
	it ("Abort move correctly backwards", function(){
				
		var destiny = marsTerrain.calcForwardDestiny();

		marsTerrain.moveVehicle(marsTerrain.calcBackwardDestiny());

		expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateX()).toEqual(0);
		expect(marsTerrain.getVehicle().getCurrentPosition().getCoordinateY()).toEqual(0);
		
	});
	it ("Check route", function(){
			
		marsTerrain.executeRoute("FFFB");
		
	});


});