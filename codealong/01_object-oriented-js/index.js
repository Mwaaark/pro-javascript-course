class Triangle {
  constructor(base, height) {
    if (!Number.isFinite(base) || base <= 0) {
      throw new Error("Base must be a positive finite number");
    }
    if (!Number.isFinite(height) || height <= 0) {
      throw new Error("Height must be a positive finite number");
    }

    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.base ** 2 + this.height ** 2);
  }

  sayHi() {
    return "Hi, I'm a triangle!";
  }
}
