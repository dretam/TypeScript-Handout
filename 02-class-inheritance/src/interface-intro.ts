console.log("====================Interface======================");

interface Person {

    firstName: string;
    gender: string;
    dateOfBirth: Date;
    birthPlace: string;
    idCardNumber: number;

    printBiodata(): void;
    calculateUmur(): number;
    changeIDCardNumber(newNumber: number): void;
}

class Student implements Person {
    //IPerson properties
    firstName: string;
    gender: string;
    dateOfBirth: Date;
    birthPlace: string;
    idCardNumber: number;

    //Student properties
    studentNumber: number;
    semester: number;
    faculty: string;

    constructor(firstName: string, gender: string, dateOfBirth: Date, birthPlace: string, idCardNumber: number, studentNumber: number, semester: number, faculty: string) {
        this.firstName = firstName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.birthPlace = birthPlace;
        this.idCardNumber = idCardNumber;
        this.studentNumber = studentNumber;
        this.semester = semester;
        this.faculty = faculty;
    }

    printBiodata(): void {
        console.log("Nama depan: " + this.firstName + ", Gender: " + this.gender + ", Lahir tanggal: " + this.dateOfBirth.toDateString());
    }
    calculateUmur(): number {
        var year = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        if (new Date().getMonth() < this.dateOfBirth.getMonth()) {
            year--;
        }
        return year;
    }
    changeIDCardNumber(newNumber: number): void {
        this.idCardNumber = newNumber;
    }
}

let rheza: Student = new Student("Rheza Kurnia", "Male", new Date(11, 3, 1987), "Jakarta", 1445, 4667, 2, "Information Technology");
console.log(rheza);

//Polymorphism di dalam Typescript
let maria: Person = new Student("Maria Sianturi", "Female", new Date(11, 3, 1987), "Jakarta", 1445, 4667, 2, "Information Technology");
console.log(maria);

rheza.printBiodata();
console.log("Umur maria: " + rheza.calculateUmur() + " tahun.");

maria.changeIDCardNumber(2337);
console.log("Maria ID card number: " + maria.idCardNumber);

//Polymorphism dengan object literal
let susan: Person = {
    firstName: 'Susan',
    gender: 'Female',
    dateOfBirth: new Date(4, 6, 1986),
    birthPlace: 'New York',
    idCardNumber: 3466,
    printBiodata: function():void{
        console.log("Nama depan: " + this.firstName + ", Gender: " + this.gender + ", Lahir tanggal: " + this.dateOfBirth.toDateString());
    },
    calculateUmur: function():number{
        var year = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        if (new Date().getMonth() < this.dateOfBirth.getMonth()) {
            year--;
        }
        return year;
    },
    changeIDCardNumber(newNumber: number): void {
        this.idCardNumber = newNumber;
    }
}
console.log(susan);

interface Employee{
    staffNumber: number;
    salary: number;
    jobTitle: string;
    calculateAnnualSalary(): number;
}

//Penggunaan multiple interface pada typescript
class Programmer implements Person, Employee {
    firstName: string;
    gender: string;
    dateOfBirth: Date;
    birthPlace: string;
    idCardNumber: number;
    staffNumber: number;
    salary: number;
    jobTitle: string;

    constructor(firstName: string, gender: string, dateOfBirth: Date, birthPlace: string, idCardNumber: number, staffNumber: number, salary: number, jobTitle: string) {
        this.firstName = firstName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.birthPlace = birthPlace;
        this.idCardNumber = idCardNumber;
        this.staffNumber = staffNumber;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    printBiodata(): void {
        console.log("Nama depan: " + this.firstName + ", Gender: " + this.gender + ", Lahir tanggal: " + this.dateOfBirth.toDateString());
    }
    calculateUmur(): number {
        var year = new Date().getFullYear() - this.dateOfBirth.getFullYear();
        if (new Date().getMonth() < this.dateOfBirth.getMonth()) {
            year--;
        }
        return year;
    }
    changeIDCardNumber(newNumber: number): void {
        this.idCardNumber = newNumber;
    }
    calculateAnnualSalary(): number {
        return 12 * this.salary;
    }
}

let bagas:Programmer = new Programmer('Bagas', 'Male', new Date(6, 7, 1976), 'Bandung', 123, 123, 5_000_000, 'Front-End');
console.log(bagas);

//Interface bisa menginherit interface dengan menggunakan extends
interface Staff extends Employee {
    staffNumber: number;
    salary: number;
    jobTitle: string;
    calculateAnnualSalary(): number;
}

let jessica:Staff = {
    staffNumber: 456,
    salary: 6_000_000,
    jobTitle: 'Accountant',
    calculateAnnualSalary: function():number{
        return 12 * this.salary;
    }
};
console.log(jessica);
