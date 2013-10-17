/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario;

/**
 *
 * @author imanol
 */
public class Cell {
    
    enum Type {EMPTY,BLOCKED}
    private Type cellType;

    public Cell(Type cellType) {
        this.cellType = cellType;
    }
    
    public boolean isEmpty(){
        if (this.cellType == Type.EMPTY)
           return true;
        else return false;
    }
    
     public boolean isBlocked(){
        if (this.cellType == Type.BLOCKED)
           return true;
        else return false;
    }

    @Override
    public String toString() {
        return "{"+ cellType + '}';
    }
     
    
    
}
