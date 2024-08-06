
export class Student {
    name: string;
    dateOfBirth: Date;
    faculty: string;
    semester: number;
    constructor(name:string, dateOfBirth: Date, faculty: string, semester: number) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.faculty = faculty;
        this.semester = semester;
    }
}

export class Teacher {
    name: string;
    dateOfBirth: Date;
    teachingSubject: string;
    salary: number;
    constructor(name: string, dateOfBirth: Date, teachingSubject: string, salary: number) {
        this.name = name;
        this.dateOfBirth = dateOfBirth
        this.teachingSubject = teachingSubject;
        this.salary = salary;
    }
}

export class Subject {
    name: string;
    creditPoint: number;
    major: string;
    constructor(name: string, creditPoint: number, major: string) {
        this.name = name;
        this.creditPoint = creditPoint;
        this.major = major;
    }
}
