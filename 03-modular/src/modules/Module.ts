import {Student,Teacher} from './Core';
import {Author, Book} from './Library';

console.log("====================Module======================");

let cynthia: Student = new Student("Cynthia Safori", new Date(1988, 10, 9), "IT Faculty", 2);
let alex: Teacher = new Teacher("Alex Agung", new Date(1990, 11, 2), "Kedokteran", 3);
let stephen: Author = new Author("Stephen King", new Date(1956, 2, 3), "Male");
let tommyKnocker: Book = new Book("Tommy Knockers", stephen, "2FD");

console.log(cynthia.name);
console.log(tommyKnocker.author.name);
console.log(alex);