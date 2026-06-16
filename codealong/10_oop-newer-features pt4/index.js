class MyClass {
  #privateMethod() {
    console.log("This is a private method.");
  }

  publicMethod() {
    console.log("This is a public method.");
    this.#privateMethod(); // This is allowed because it's called from within the class.
  }
}

const myClass = new MyClass();
myClass.#privateMethod(); // This will throw an error because it's a private method.
myClass.publicMethod(); // This will work and will call the private method from within the class.
