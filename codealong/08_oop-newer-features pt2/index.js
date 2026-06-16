class Cat {
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    if (this.numLegs > 0) {
      this.numLegs -= 1;
    }
  }
}
