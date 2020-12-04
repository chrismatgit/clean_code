interface RectangleInterface {
  width: number;
  height: number;
}

interface CircleInterface {
  radius: number;
}

interface Shape {
  area(): number;
}

interface Serializable {
  serialize(): string;
}

class Rectangle implements RectangleInterface, Shape {
  public width: number;
  public height: number;

  public area() {
    return this.width * this.height;
  }
}

class Circle implements CircleInterface, Shape {
  public radius: number;

  public area() {
    return this.radius * this.radius * Math.PI;
  }
}

class RectangleDTO implements RectangleInterface, Serializable {
  public width: number;
  public height: number;

  public serialize() {
    return JSON.stringify(this);
  }
}

class CircleDTO implements CircleInterface, Serializable {
  public radius: number;

  public serialize() {
    return JSON.stringify(this);
  }
}

function getArea(shapes: Shape[]) {
  return shapes.reduce((previous, current) => previous + current.area(), 0);
}
