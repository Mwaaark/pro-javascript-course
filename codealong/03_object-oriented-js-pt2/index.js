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
    return `The triangle with side A of ${this.base} and side B of ${this.height} and with an area of ${this.getArea()} says hi!`;
  }
}

class ShyTriangle extends Triangle {
  describe() {
    return `I am a shy triangle.`;
  }

  beShy() {
    return "I am too shy to say hi!";
  }
}

class ColorTriangle extends Triangle {
  constructor(base, height, color) {
    super(base, height);
    this.color = color;
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(base, height, color, mood) {
    super(base, height, color);
    this.mood = mood;
  }
}
