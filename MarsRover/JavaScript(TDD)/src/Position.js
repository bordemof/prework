var Orientation;
    Orientation = {NORTH:'NORTH', EAST:'EAST',SOUTH:'SOUTH', WEST:'WEST'};

function Position(coordinateX, coordinateY, orientation){

    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.orientation = orientation;
}

Position.prototype.getMapOrientation = function() {
    return this.orientation;
}

Position.prototype.setMapOrientation = function(mapOrientation) {
    this.orientation = mapOrientation;
}

Position.prototype.getCoordinateX = function(){
    return this.coordinateX;
}

Position.prototype.setCoordinateX = function(coordinateX) {
    this.coordinateX = coordinateX;
}

Position.prototype.getCoordinateY = function() {
    return this.coordinateY;
}

Position.prototype.setCoordinateY = function(coordinateY) {
    this.coordinateY = coordinateY;
}
Position.prototype.toString = function(coordinateY) {
    return "["+this.coordinateX+","+this.coordinateY+"]";
}