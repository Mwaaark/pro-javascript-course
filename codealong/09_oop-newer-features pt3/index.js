class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(5);
myCircle.#radius = 10; // SyntaxError: Private field '#radius' must be declared in an enclosing class
console.log(myCircle.#radius); // SyntaxError: Private field '#radius' must be declared in an enclosing class
console.log(myCircle.getRadius()); // 5
