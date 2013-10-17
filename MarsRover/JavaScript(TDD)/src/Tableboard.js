function TableBoard(columns,rows){
	this.table = new Array(columns);
	for (var i = 0; i < columns; i++) {
        this.table[i] = new Array(rows);
     }
}
TableBoard.prototype.getTable = function(){
	return this.table;
}
TableBoard.setTable = function(table){
        this.table = table;
}
TableBoard.prototype.initRandomBoard = function(){
   for (i=0; i < this.table.length; i++){
        for (j=0; j < this.table[i].length; j++){

            if (Math.floor(Math.random() * 2) == 0 ){
                    this.table[i][j]= new Cell(Type.EMPTY);
            }else{
                    this.table[i][j]= new Cell(Type.BLOCKED);
            }

        }
    }

}
