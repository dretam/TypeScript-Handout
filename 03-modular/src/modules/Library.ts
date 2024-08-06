
export default class Author {
    name: string;
    dateOfBirth: Date;
    gender: string;
    constructor(name: string, dateOfBirth: Date, gender: string) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}

export class Book {
    title: string;
    author: Author;
    location: string;
    constructor(title: string, author: Author, location: string) {
        this.title = title;
        this.author = author;
        this.location = location;
    }
}
