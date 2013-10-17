/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario;

import model.scenario.vehicle.SpaceRover;
import model.scenario.vehicle.Vehicle;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author imanol
 */
public class TableBoardTest {
    
    private TableBoard terrain;
    SpaceRover vehicle;
    private Position wrongPosition;
    private Position correctPosition;
    @Before
    public void loadTest(){
        
        vehicle = new SpaceRover();
        Position initialPosition = new Position(0,0,Position.Orientation.EAST);
        vehicle.setVehiclePosition(initialPosition);
        vehicle.setMovementRate(1);
        
        terrain = new TableBoard(5,5, vehicle);
        terrain.initRandomBoard();
        
        wrongPosition = new Position(terrain.getTable().length,2,Position.Orientation.EAST);
        correctPosition = new Position(1,0,Position.Orientation.EAST);
      
    }
    
    @Test
    public void testRange(){

        assertFalse("Is not in Range",terrain.isInRange(wrongPosition));
        assertTrue("Is in Range",terrain.isInRange(correctPosition));
    }
    
   @Test
   public void testMove() throws Exception{
       terrain.moveVehicle();
       assertEquals(correctPosition.getCoordinateX(),this.vehicle.getVehiclePosition().getCoordinateX());
       assertEquals(correctPosition.getCoordinateY(),this.vehicle.getVehiclePosition().getCoordinateY());
       assertEquals(correctPosition.getMapOrientation().toString(),this.vehicle.getVehiclePosition().getMapOrientation().toString());
   }
}