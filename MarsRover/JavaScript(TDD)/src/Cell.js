var Type = {EMPTY:'EMPTY', BLOCKED:'BLOCKED'}

function Cell(cellType){
	this.cellType = cellType;
}

Cell.prototype.isEmpty = function(){
	if (this.cellType == Type.EMPTY)
		return true;
	else return false;
}

Cell.prototype.isBlocked = function(){
	if (this.cellType == Type.BLOCKED)
		return true;
	else return false;
}