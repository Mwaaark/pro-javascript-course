class UserProfile {
  constructor(username, email, birthdate) {
    this.validateUsername(username);
    this.validateEmail(email);
    this.validateBirthdate(birthdate);

    this._username = username;
    this._email = email;
    this._birthdate = birthdate;
  }

  validateUsername(username) {
    // if username is an empty string or not a string, throw an error
    if (typeof username !== "string" || username.trim() === "") {
      throw new Error("Invalid username.");
    }
  }

  validateEmail(email) {
    // if email does not include an @ symbol, throw an error
    if (
      typeof email !== "string" ||
      email.trim() === "" ||
      !email.includes("@")
    ) {
      throw new Error("Invalid email.");
    }
  }

  validateBirthdate(birthdate) {
    // if birthdate is not a valid date string and expected date string format is YYYY-MM-DD, throw an error
    if (isNaN(Date.parse(birthdate))) {
      throw new Error("Invalid birthdate.");
    }
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get birthdate() {
    return this._birthdate;
  }

  set username(newUsername) {
    this.validateUsername(newUsername);
    this._username = newUsername;
  }

  set email(newEmail) {
    this.validateEmail(newEmail);
    this._email = newEmail;
  }

  set birthdate(newBirthdate) {
    this.validateBirthdate(newBirthdate);
    this._birthdate = newBirthdate;
  }
}
