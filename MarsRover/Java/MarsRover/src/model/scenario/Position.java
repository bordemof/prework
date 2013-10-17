/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package model.scenario;

/**
 *
 * @author imanol
 */
public class Position {
    
    public enum Orientation {NORTH,SOUTH, EAST, WEST};

    
    private int coordinateX;
    private int coordinateY;
    private Orientation mapOrientation;

    
    
    public Position(int coordinateX, int coordinateY,Orientation orientation) {
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.mapOrientation = orientation;
    }

    @Override
    public String toString() {
        return "Position{" + "coordinateX=" + coordinateX + ", coordinateY=" + coordinateY + ", mapOrientation=" + mapOrientation + '}';
    }
    
    public Orientation getMapOrientation() {
        return mapOrientation;
    }

    public void setMapOrientation(Orientation mapOrientation) {
        this.mapOrientation = mapOrientation;
    }

    public int getCoordinateX() {
        return coordinateX;
    }

    public void setCoordinateX(int coordinateX) {
        this.coordinateX = coordinateX;
    }

    public int getCoordinateY() {
        return coordinateY;
    }

    public void setCoordinateY(int coordinateY) {
        this.coordinateY = coordinateY;
    }
    
    
    
}
