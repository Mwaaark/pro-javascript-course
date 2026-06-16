class Circle {
  static allowedColors = new Set([
    "red",
    "green",
    "blue",
    "yellow",
    "black",
    "white",
  ]);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor.toLowerCase())) {
      this._color = newColor;
    } else {
      throw new Error("Invalid color");
    }
  }

  get diameter() {
    return this._radius * 2;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = value;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
