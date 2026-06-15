class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }

  static average(arr) {
    // if the array is empty, throw an error
    if (arr.length === 0) {
      throw new Error("Array cannot be empty.");
    }

    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }

  static max(arr) {
    return Math.max(...arr);
  }
}
