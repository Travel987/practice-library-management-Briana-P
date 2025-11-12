// Base Class
class LibraryItem {
  constructor(title, id, isAvailable = true) {
    this.title = title;
    this.id = id;
    this.isAvailable = isAvailable;
  }

  // Shared methods
  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been checked out.`);
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  returnItem() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} was not checked out.`);
    }
  }
}

// Child Class: Book
class Book extends LibraryItem {
  constructor(title, id, author, genre, isAvailable = true) {
    super(title, id, isAvailable);
    this.author = author;
    this.genre = genre;
  }

  getDetails() {
    return `Book: "${this.title}" by ${this.author} [Genre: ${this.genre}] - Available: ${this.isAvailable}`;
  }
}

// Child Class: DVD
class DVD extends LibraryItem {
  constructor(title, id, director, duration, isAvailable = true) {
    super(title, id, isAvailable);
    this.director = director;
    this.duration = duration;
  }

  getDetails() {
    return `DVD: "${this.title}" directed by ${this.director} [Duration: ${this.duration} mins] - Available: ${this.isAvailable}`;
  }
}

// Child Class: Magazine
class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher, isAvailable = true) {
    super(title, id, isAvailable);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  getDetails() {
    return `Magazine: "${this.title}" Issue #${this.issueNumber}, Publisher: ${this.publisher} - Available: ${this.isAvailable}`;
  }
}

// Instantiate Objects
const book1 = new Book("Atomic Habits", 101, "James Clear", "Self-Help");
const dvd1 = new DVD("Inception", 202, "Christopher Nolan", 148);
const mag1 = new Magazine("National Geographic", 303, 58, "NatGeo Society");

// Test Inheritance
console.log(book1.getDetails());
book1.checkOut();
console.log(book1.getDetails());
book1.returnItem();

console.log("\n" + dvd1.getDetails());
dvd1.checkOut();

console.log("\n" + mag1.getDetails());
mag1.checkOut();
mag1.returnItem();