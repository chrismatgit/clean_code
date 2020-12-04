interface Shape {
  area(): number;
  serialize(): string;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  public area() {
    return this.width * this.height;
  }
  public serialize() {
    return JSON.stringify(this);
  }
}

class Circle implements Shape {
  public radius: number;

  public area() {
    return this.radius * this.radius * Math.PI;
  }
  public serialize() {
    return JSON.stringify(this);
  }
}

function getArea(shapes: Shape[]) {
  return shapes.reduce((previous, current) => previous + current.area(), 0);
}
