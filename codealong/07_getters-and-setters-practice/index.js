class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newFullName) {
    const [firstName, lastName] = newFullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
