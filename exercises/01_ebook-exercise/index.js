class Book {
  constructor(title, author, year) {
    // title and author should be strings, year should be a number
    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof year !== "number"
    ) {
      throw new Error("Invalid argument types");
    }

    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `Downloading "${this.title}" with file size ${this.fileSize}MB...`;
  }
}
