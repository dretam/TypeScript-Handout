//public by default

class Superior {
    public name: string;
    protected grade: number;
    private accessNumber: string;
    public constructor(name: string, grade: number, accessNumber: string) {
        this.name = name;
        this.grade = grade;
        this.accessNumber = accessNumber;
    }
    public printInformation() {
        console.log("Namanya adalah: " + this.grade);
        this.printAccessNumber();
    }
    private printAccessNumber(){
        console.log(`Access Number: ${this.accessNumber}`);
    }
}

let eddy = new Superior('Eddy Sukardi', 10, '1366');
console.log(eddy.name);
//Access modifier bekerja
// console.log(eddy.grade);
// console.log(eddy.accessNumber);

class Supervisor extends Superior {
    public team: string;
    private shift: string;
    constructor(name: string, grade: number, accessNumber: string, team: string, shift: string) {
        super(name, grade, accessNumber);
        this.team = team;
        this.shift = shift;
    }
    public printSuperiorInfo() {
        console.log("Work with team: " + this.team);
    }
    private getSalary() {
        return 12000000;
    }
    public printAccessCardNumber() {
        //console.log(this.accessNumber);
        //Sifatnya private jadi tidak bisa di akses walaupun masih extend
    }
    public printGrade() {
        console.log("The grade is: " + this.grade);
    }
    public printPrivateInfo(){
        console.log(this.shift);
        console.log(this.getSalary());
    }
}

let adrian: Supervisor = new Supervisor("Adrian Maulana", 6, "799", "Team A", "Night Shift");
console.log(adrian);
adrian.printPrivateInfo();

//console.log(adrian.grade);
//tidak bisa diakses karena protected

//adrian.getSalary();
//tidak bisa diakses karena private