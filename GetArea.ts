interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  public area() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;

  public area() {
    return this.radius * this.radius * Math.PI;
  }
}

function getArea(shapes: Shape[]) {
  return shapes.reduce((previous, current) => previous + current.area(), 0);
}
