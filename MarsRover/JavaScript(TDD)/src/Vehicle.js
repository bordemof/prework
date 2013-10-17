function Vehicle(position, movementRate){
    this.vehiclePosition = position;
    this.movementRate = movementRate;
}
Vehicle.prototype.getCurrentPosition = function(){
        return this.vehiclePosition;
}
Vehicle.prototype.setVehiclePosition = function(position){
        this.vehiclePosition = position;
}
Vehicle.prototype.getMovementRate = function(){
        return this.movementRate;
}
Vehicle.prototype.setMovementRate = function(movementRate){
         this.movementRate = movementRate;
}
Vehicle.prototype.turnLeft = function(){

    var currentOrientation = this.getCurrentPosition().getMapOrientation();

    switch(currentOrientation){
        case "NORTH": this.getCurrentPosition().setMapOrientation(Orientation.WEST);
        break;
        case "SOUTH": this.getCurrentPosition().setMapOrientation(Orientation.SOUTH);
        break;
        case "WEST":  this.getCurrentPosition().setMapOrientation(Orientation.EAST);
        break;
        case "EAST":  this.vehiclePosition.setMapOrientation(Orientation.NORTH);
        break;
        default: throw new Exception("Error while turning the vehicle");
        break;
    }
}
Vehicle.prototype.turnRight = function (){

 var currentOrientation = this.getCurrentPosition().getMapOrientation();

    switch(currentOrientation){
        case "NORTH": this.getCurrentPosition().setMapOrientation(Orientation.EAST);
        break;
        case "SOUTH": this.getCurrentPosition().setMapOrientation(Orientation.NORTH);
        break;
        case "WEST":  this.getCurrentPosition().setMapOrientation(Orientation.WEST);
        break;
        case "EAST":  this.getCurrentPosition().setMapOrientation(Orientation.SOUTH);
        break;
        default: throw new Exception("Error while turning the vehicle");
        break;
    }
}
