
function MarsTerrain(){
	
    this.terrain = new TableBoard(100,100);
    this.terrain.initRandomBoard();

    position = new Position(0,0,'EAST');
	movementRate = 1;
    this.vehicle = new Vehicle(position,movementRate);

}

MarsTerrain.prototype.moveVehicle = function(){

    var destiny = this.calcForwardDestinytiny();

    if (this.isApplicable(destiny))
      {
        this.vehicle.setVehiclePosition(destiny);
        console.log("Succes moved to :"+destiny.toString());
        return true;
    }else{
        console.log("Cant moved to the destiny");
        return false;
    }
}

MarsTerrain.prototype.isApplicable = function(position){
	if (this.isInRange(position) && !this.isBlocked(position)){
	 	return true;
	}else
		return false;

}

MarsTerrain.prototype.isInRange = function(position){
   var cordX = position.getCoordinateX();
   var cordY = position.getCoordinateY();
   if (cordX >= 0 && cordX < this.terrain.getTable().length && cordY >=0 && cordY < this.terrain.getTable()[cordX].length )
        return true;
    else
    	return false;

}
MarsTerrain.prototype.isBlocked = function(position){
   var cordX = position.getCoordinateX();
   var cordY = position.getCoordinateY();
   if (this.terrain.getTable()[cordX][cordY].isBlocked())
        return true;
   else
        return false;
}
MarsTerrain.prototype.getTable = function() {
    return this.terrain.getTable();
}
MarsTerrain.setTable = function(table){
     this.terrain.getTable() = table;
}
MarsTerrain.prototype.getVehicle = function(){
    return this.vehicle;
}
MarsTerrain.setVehicle = function(vehicle){
    this.vehicle = vehicle;
}

MarsTerrain.prototype.calcForwardDestiny = function(){

    var result;

    var currentCordX = this.vehicle.getCurrentPosition().getCoordinateX();
    var currentCordY = this.vehicle.getCurrentPosition().getCoordinateY();
    var currentOrientation = this.vehicle.getCurrentPosition().getMapOrientation();
    var movementRate = this.getVehicle().getMovementRate();

    switch(currentOrientation){
    	case "NORTH": result = new Position(currentCordX, currentCordY + movementRate, Orientation.NORTH);
    	break;
    	case "SOUTH": result = new Position(currentCordX, currentCordY - movementRate, Orientation.SOUTH);
    	break;
    	case "WEST":  result = new Position(currentCordX - movementRate, currentCordY, Orientation.WEST);
    	break;
    	case "EAST":  result = new Position(currentCordX + movementRate, currentCordY, Orientation.EAST);
    	break;
    	default: throw new Exception("Destination Unknown");
    	break;
    }

    return  result;
}
MarsTerrain.prototype.calcBackwardDestiny = function(){
    
    var result;

    var currentCordX = this.vehicle.getCurrentPosition().getCoordinateX();
    var currentCordY = this.vehicle.getCurrentPosition().getCoordinateY();
    var currentOrientation = this.vehicle.getCurrentPosition().getMapOrientation();

    var movementRate = this.getVehicle().getMovementRate();

       switch(currentOrientation){
    	case "NORTH": result = new Position(currentCordX, currentCordY - movementRate, Orientation.NORTH);
    	break;
    	case "SOUTH": result = new Position(currentCordX, currentCordY + movementRate, Orientation.SOUTH);
    	break;
    	case "WEST":  result = new Position(currentCordX + movementRate, currentCordY, Orientation.WEST);
    	break;
    	case "EAST":  result = new Position(currentCordX - movementRate, currentCordY, Orientation.EAST);
    	break;
    	default: throw new Exception("Destination Unknown");
    	break;
    }

    return  result;
}
MarsTerrain.prototype.moveVehicle = function(destiny){

    if (this.isApplicable(destiny))
    {
        this.vehicle.setVehiclePosition(destiny);
        console.log("Succesfully moved to :"+destiny.toString());
        return true;

    }else{
        console.log("Cant move to the destiny");
        return false;
        }
}

MarsTerrain.prototype.executeRoute = function(route){
	
	var canContinue = true;
	var i = 0;
	while(i<route.length && canContinue){
		
		switch(route.charAt(i)){
			case "F":
				canContinue = this.moveVehicle(this.calcForwardDestiny());
			break;
			case "B":
				canContinue = this.moveVehicle(this.calcBackwardDestiny());
			break;
			case "R": this.getVehicle().turnRight();
			break;
			case "L": this.getVehicle().turnLeft();
			break;
			default: throw new Exception("Unknown command");
			break;
		}
		i++;
	}

}