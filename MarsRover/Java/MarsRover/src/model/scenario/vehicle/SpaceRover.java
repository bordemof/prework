/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario.vehicle;

import model.scenario.Position;
import model.scenario.vehicle.Vehicle;
import model.scenario.Position.Orientation;

/**
 *
 * @author imanol
 */
public class SpaceRover implements Vehicle {
 
    enum Direction { LEFT, RIGHT }
    private int movementRate;
    private Position vehiclePosition;

    public Position getVehiclePosition() {
        return vehiclePosition;
    }

    public void setVehiclePosition(Position vehiclePosition) {
        this.vehiclePosition = vehiclePosition;
    }

    public int getMovementRate() {
        return movementRate;
    }

    public void setMovementRate(int movementRate) {
        this.movementRate = movementRate;
    }
    
    public Position calcDestiny() throws Exception{
        
        Position result;
    
        if (this.vehiclePosition.getMapOrientation() == Orientation.NORTH){
            result = new Position(this.getVehiclePosition().getCoordinateX(),this.vehiclePosition.getCoordinateY()+this.movementRate, Orientation.NORTH);
        } else if(this.vehiclePosition.getMapOrientation() == Orientation.SOUTH){
            result = new Position(this.getVehiclePosition().getCoordinateX(),this.vehiclePosition.getCoordinateY()-this.movementRate, Orientation.SOUTH);
        } else if(this.vehiclePosition.getMapOrientation() == Orientation.WEST){
            result = new Position(this.getVehiclePosition().getCoordinateX()-this.movementRate,this.vehiclePosition.getCoordinateY(), Orientation.WEST);
        } else if (this.vehiclePosition.getMapOrientation() == Orientation.EAST){
            result = new Position(this.getVehiclePosition().getCoordinateX()+this.movementRate,this.vehiclePosition.getCoordinateY(), Orientation.EAST); 
        } else{
            throw new Exception("Destination Unknown");
        }  
        
        return  result;
        
    }
  

    @Override
    public void turnLeft() {
           if(this.vehiclePosition.getMapOrientation() == Orientation.NORTH){
               this.vehiclePosition.setMapOrientation(Orientation.WEST);
           }else if (this.vehiclePosition.getMapOrientation() == Orientation.WEST){
               this.vehiclePosition.setMapOrientation(Orientation.SOUTH);
           }else if (this.vehiclePosition.getMapOrientation() == Orientation.SOUTH){
               this.vehiclePosition.setMapOrientation(Orientation.EAST);
           }else {
               this.vehiclePosition.setMapOrientation(Orientation.NORTH); 
           }
    }

    @Override
    public void turnRight() {
        if(this.vehiclePosition.getMapOrientation() == Orientation.NORTH){
               this.vehiclePosition.setMapOrientation(Orientation.EAST);
           }else if (this.vehiclePosition.getMapOrientation() == Orientation.WEST){
               this.vehiclePosition.setMapOrientation(Orientation.NORTH);
           }else if (this.vehiclePosition.getMapOrientation() == Orientation.SOUTH){
               this.vehiclePosition.setMapOrientation(Orientation.WEST);
           }else {
               this.vehiclePosition.setMapOrientation(Orientation.SOUTH); 
           }
    }

    
}
