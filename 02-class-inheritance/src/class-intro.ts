console.log("====================Class======================");

class Employee {
    name: string;
    position: string;
    department: string;
    birthDate: Date;
    readonly birthPlace: string;
    salary: number;

    constructor(name: string, position: string, department: string, birthDate: Date, birthPlace:any, salary: number) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.salary = salary;
    }

    calculateAge(): number {
        var today: Date = new Date();
        var age: number = this.birthDate.getFullYear() - today.getFullYear();
        if (today.getMonth() < this.birthDate.getMonth()) {
            --age;
        }
        return age;
    }

    calculateAnnualSalary(): number {
        var annualSalary: number = 12 * this.salary;
        return annualSalary;
    }

    printPersonalInformation(): void {
        console.log("Nama karyawan ini: " + this.name + ", posisinya: " + this.position +
            ", departmentnya: " + this.department + ", birthDate: " + this.birthDate.toDateString());
    }
}

let shanty: Employee = new Employee("Shanty", "Staff", "IT Department", new Date(1988, 10, 27), "Jakarta", 6000000);
let johan: Employee = new Employee("Johan", "Staff", "IT Department", new Date(1986, 10, 27), "Bandung", 5000000);

console.log(shanty);
console.log("Umur Shanty: " + shanty.calculateAge());
console.log("Gaji Johan per-tahun: " + johan.calculateAnnualSalary());
shanty.printPersonalInformation();

//Normal object literal masih bisa di Typescript
let aqira = {
    fullName: "Aqira Kelana",
    department: "IT"
}
console.log(aqira);

//Typed object literal bisa ditulis begini.
const alice: { name: string; age: number; isActive: boolean } = {
    name: 'Alicia Vikander',
    age: 30,
    isActive: true
};

const {fullName, department} = aqira;
console.log(`Destructuring aqira: ${fullName}, ${department}`);

const {name, age, isActive} = alice;
console.log(`Destructuring alice: ${name}, ${age}, ${isActive}`);

//Strongly type destructuring
const {position, salary}:Employee = shanty;
console.log(`Destructuring shanty: ${position}, ${salary}`);

//Bisa di rename selagi destructuring
const {position: posisi, salary: gaji} = shanty;
console.log(`Destructuring shanty: ${posisi}, ${gaji}`);

function prosesEmployee({birthPlace, name}:Employee):void{
    console.log(birthPlace);
    console.log(name);
}
prosesEmployee(johan);