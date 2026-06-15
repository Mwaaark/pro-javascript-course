class MyMath {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = ["Whiskers", "Mittens", "Shadow", "Simba", "Luna"];
    const name = choice(names);
    return new Cat(name, "unknown");
  }

  meow() {
    return `${this.name} says meow!`;
  }
}

function choice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
