import {Student,Teacher} from './Core';
import Author from './Library';
import {Book} from './Library';
import printHaloDunia from './MyFunctions';
import { jumlahkanAngka, multiplyNumber as perkalian, helloSomeone } from './MyFunctions';

console.log("====================Module======================");

let cynthia: Student = new Student("Cynthia Safori", new Date(1988, 10, 9), "IT Faculty", 2);
let alex: Teacher = new Teacher("Alex Agung", new Date(1990, 11, 2), "Kedokteran", 3);
let stephen: Author = new Author("Stephen King", new Date(1956, 2, 3), "Male");
let tommyKnocker: Book = new Book("Tommy Knockers", stephen, "2FD");

console.log(cynthia.name);
console.log(tommyKnocker.author.name);
console.log(alex);

printHaloDunia();
console.log(jumlahkanAngka(3,4));
console.log(perkalian(2, 4));
helloSomeone('Stanislav Petrov');