/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario;

import model.scenario.vehicle.Vehicle;

/**
 *
 * @author imanol
 */
public class TableBoard {
    
    private Cell[][] table;
    private Vehicle vehicle;

    public TableBoard(int columns,int rows, Vehicle vehicle) {
        this.table = new Cell[rows][columns];
        this.vehicle = vehicle;
    }
    public void initRandomBoard(){
        
        for (int i=0; i< this.table.length; i++){
            for (int j=0; j<this.table[i].length; j++){
                
                if (Math.floor(Math.random() * 2) == 0 ){
                    table[i][j]= new Cell(Cell.Type.EMPTY);
                }else{
                    table[i][j]= new Cell(Cell.Type.BLOCKED);
                }
                
            }
        }
    }
    
    public void moveVehicle() throws Exception{
        
        Position destiny = this.vehicle.calcDestiny();
        if (isApplicable(destiny))
        {
           this.vehicle.setVehiclePosition(destiny);
           System.out.println("Succes moved to :"+destiny.toString());
        }else{
           System.out.println("Cant moved to the destiny");
        }
     
    }
    public boolean isApplicable(Position pos){
        
        if (isInRange(pos) && !isBlocked(pos)){
            return true;
        }else
            return false;
    }
    public boolean isInRange(Position pos){
        int cordX = pos.getCoordinateX();
        int cordY = pos.getCoordinateY();
        if (cordX >= 0 && cordX < this.table.length && cordY >=0 && cordY < this.table[cordX].length )
            return true;
        else
            return false;
        
    }
    
    public boolean isBlocked(Position pos){
        int cordX = pos.getCoordinateX();
        int cordY = pos.getCoordinateY();
        if (this.table[cordX][cordY].isBlocked())
            return true;
        else
            return false;
        
    }
    public Cell[][] getTable() {
        return table;
    }

    public void setTable(Cell[][] table) {
        this.table = table;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehiclePosition(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Override
    public String toString() {
        
        for (int i=this.table.length-1; i>= 0; i--){
            for (int j=0; j < this.table[i].length; j++){
                System.out.print("("+j+","+i+")"+table[j][i].toString());
            }
          System.out.println();
        }
        
        return "TableBoard { }'";
    }
    
    
}
