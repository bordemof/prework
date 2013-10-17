/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package marsrover;

import model.scenario.vehicle.SpaceRover;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.scenario.*;

/**
 *
 * @author imanol
 */
public class MarsRover {

   
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // Init Game
        SpaceRover mars2 = new SpaceRover();
        Position initialPosition = new Position(0,0,Position.Orientation.EAST);
        mars2.setVehiclePosition(initialPosition);
        mars2.setMovementRate(1);
        
        TableBoard marsTerrain = new TableBoard(5,5, mars2);
        marsTerrain.initRandomBoard();
        
        System.out.println("Mars expedition ready! Vehicle MarsII located at :"+mars2.getVehiclePosition().toString());
        System.out.println("Terrain information");
        marsTerrain.toString();
        
        while(true){
            try {
                System.out.println("1.Move - 2.Turn left - 3.Turn rigth - 4.Exit");
                int number = in.nextInt();
                switch (number){
                    case 1:
                        marsTerrain.moveVehicle(); break;
                    case 2:
                        marsTerrain.getVehicle().turnLeft(); break;
                    case 3:
                         marsTerrain.getVehicle().turnRight(); break;
                    case 4:
                        System.exit(1);
                }
            } catch (Exception ex) {
                Logger.getLogger(MarsRover.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        
        
    }
}
