/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario.vehicle;

import model.scenario.Position;

/**
 *
 * @author imanol
 */
public interface Vehicle {
   
    
  
   public void turnLeft();
   public void turnRight();
   
   public Position getVehiclePosition();
   public void setVehiclePosition(Position vehiclePosition);        
   public Position calcDestiny() throws Exception;
}
