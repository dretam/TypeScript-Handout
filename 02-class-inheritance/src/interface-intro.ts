console.log("====================Interface======================");

interface IPerson {
    firstName: string;
    gender: string;
    dateOfBirth: Date;
    birthPlace: string;
    idCardNumber: number;
    printBiodata(): void;
    calculateUmur(): number;
    changeIDCardNumber(newNumber: number): void;
}

class Student implements IPerson {
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
let maria: IPerson = new Student("Maria Sianturi", "Female", new Date(11, 3, 1987), "Jakarta", 1445, 4667, 2, "Information Technology");

rheza.printBiodata();
console.log("Umur maria: " + rheza.calculateUmur() + " tahun.");

maria.changeIDCardNumber(2337);
console.log("Maria ID card number: " + maria.idCardNumber);

interface IEmployee{
    staffNumber: number;
    salary: number;
    jobTitle: string;
    calculateAnnualSalary(): number;
}

//Penggunaan multiple interface pada typescript
class Programmer implements IPerson, IEmployee {
    firstName: string;
    gender: string;
    dateOfBirth: Date;
    birthPlace: string;
    idCardNumber: number;
    staffNumber: number;
    salary: number;
    jobTitle: string;

    constructor(firstName: string, gender: string, dateOfBirth: Date, birthPlace: string, idCardNumber: number,
        staffNumber: number, salary: number, jobTitle: string) {
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

//Interface bisa menginherit interface dengan menggunakan extends
interface IStaff extends IEmployee {
    staffNumber: number;
    salary: number;
    jobTitle: string;
    calculateAnnualSalary(): number;
}

